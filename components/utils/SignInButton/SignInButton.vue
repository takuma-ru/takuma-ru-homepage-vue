<template>
  <button
    id="signInButton"
    @click="signInOut"
  >
    <div :class="`${provider}-logo`">
      <img v-if="provider === 'github'" src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg" alt="github-logo">
      <img v-if="provider === 'google'" src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="google-logo">
    </div>
    <span class="text">
      <span v-if="!authStore.loggedInUser.uid">
        Sign in with <span class="provider-name">{{ providerName }}</span>
      </span>
      <span v-else>
        Sign out
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ISignInButtonProps {
  provider: 'google' | 'github';
}

/* -- store -- */
const authStore = useAuthStore()
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

/* -- function -- */
const signInOut = () => {
  if (authStore.loggedInUser.uid) {
    authStore.trySignOut()
  } else {
    authStore.trySignIn(props.provider)
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
  margin-bottom: 1rem;

  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;

  color: #FFFFFF;
  background-color: v-bind("provider === 'google' ? '#4285F4' : '#0B0B0B'");
  box-sizing: border-box;
  border-radius: 6px;
  border: solid 1px v-bind("provider === 'google' ? '#4285F4' : '#0B0B0B'");
  cursor: pointer;

  .text {
    margin-right: 1em;

    .provider-name {
      font-weight: 700;
    }
  }

  .google-logo, .github-logo {
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

  .google-logo {
    img {
      width: 18px;
    }
  }

  .github-logo {
    img {
      width: 22px;
    }
  }
}
</style>
