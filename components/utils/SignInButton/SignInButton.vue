<template>
  <button
    id="signInButton"
    :class="providerClassName"
    :is-signin="userDataStore.user?.username !== null"
    @click="signInOut"
  >
    <div class="logo">
      <img v-if="provider === 'github'" src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg" alt="github-logo">
      <img v-if="provider === 'google'" src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="google-logo">
    </div>
    <span class="text">
      <span v-if="!userDataStore.supabaseUser">
        Sign in with <span class="provider-name">{{ providerName }}</span>
      </span>
      <span v-else>
        Sign out
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { Provider } from '~/types/composables/supabase/SignInProvider'

/* -- type, interface -- */
export interface ISignInButtonProps {
  provider: Provider;
}

/* -- store -- */
const authStore = useAuthStore()
const userDataStore = useUserDataStore()
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<ISignInButtonProps>(), {
  provider: 'github'
})

/* -- variable(ref, reactive, computed) -- */
const providerName = computed(() => {
  switch (props.provider) {
    case 'github':
      return 'GitHub'
    case 'google':
      return 'Google'
  }
})

const providerClassName = computed(() => {
  switch (props.provider) {
    case 'github':
      return 'github'
    case 'google':
      return 'google'
  }
})

/* -- function -- */
const signInOut = () => {
  if (userDataStore.user?.fullName) {
    authStore.signOut()
  } else {
    authStore.signInWithProvider(props.provider)
  }
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#signInButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 40px;
  padding: 0px;

  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;

  color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 6px;
  border: solid 1px;
  cursor: pointer;

  .text {
    margin-right: 1em;

    .provider-name {
      font-weight: 700;
    }
  }

  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 36px;
    width: 36px;
    margin: 2px;
    margin-right: 1em;

    border-radius: 4px 2px 2px 4px;
    background-color: v-bind("colorStore.color.white.default");
  }

  &.google {
    background-color: #4285F4;
    border-color: #4285F4;

    .logo {
      img {
        width: 18px;
      }
    }
  }

  &.github {
    background-color: #0B0B0B;
    border-color: #0B0B0B;

    .logo {
      img {
        width: 22px;
      }
    }
  }
}
</style>
