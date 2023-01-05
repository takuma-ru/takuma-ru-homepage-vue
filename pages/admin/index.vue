<template>
  <div
    id="admin"
    :class="displayStatusStore.displaySize"
  >
    <div class="user-data">
      <h1>
        Hi admin,
        <HighLight :border-color="colorStore.color.green.default">
          {{ authStore.loggedInUser.name }}
        </HighLight>
      </h1>
      <div class="signout">
        <SignInButton :provider="authStore.loggedInUser.providerId" />
      </div>
      <div class="sub-data">
        <p>
          <Icon icon="mail" size="1rem" />
          {{ authStore.loggedInUser.email }}
        </p>
        <p>
          <Icon icon="domain" size="1rem" />
          {{ authStore.loggedInUser.providerId }}
        </p>
        <p>
          <Icon icon="badge" size="1rem" />
          Chief administrator
        </p>
      </div>
    </div>
    <hr>
    <div class="actions">
      <h3>Acitons</h3>
      <div class="cards">
        <div class="card">
          <p>
            <Icon
              :icon="findPathData('/about').icon"
              style="margin-right: 0.5rem"
            />
            {{ findPathData('/about').title }}
          </p>
          <div class="contents">
            <Button
              icon="add"
              :color="colorStore.color.blue.default"
              fit-content
            >
              Add Work
            </Button>
            <Button
              icon="edit"
              :color="colorStore.color.green.default"
              fit-content
            >
              Edit Work Info
            </Button>
          </div>
        </div>
        <div class="card">
          <p>
            <Icon
              :icon="findPathData('/works').icon"
              style="margin-right: 0.5rem"
            />
            {{ findPathData('/works').title }}
          </p>
          <div class="contents">
            <Button
              icon="add"
              :color="colorStore.color.blue.default"
              fit-content
            >
              Add Work
            </Button>
            <Button
              icon="edit"
              :color="colorStore.color.green.default"
              fit-content
            >
              Edit Work Info
            </Button>
          </div>
        </div>
        <div class="card">
          <p>Works</p>
          <div class="contents">
            <Button
              icon="add"
              :color="colorStore.color.blue.default"
              fit-content
            >
              Add Work
            </Button>
            <Button
              icon="edit"
              :color="colorStore.color.green.default"
              fit-content
            >
              Edit Work Info
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="signin-methods">
      <h3>SignIn method</h3>
      <SignInButton provider="github.com" style="margin-bottom: 0.5rem;" />
      <SignInButton provider="google.com" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IButtonProps } from '~/components/utils/Button/Button.vue'
import { IPath } from '~/utils/utils/path'
/* -- type, interface -- */
interface IActionList {
  pathData: IPath
  buttons?: Array<{
    props?: IButtonProps
    title: string
  }>
}

/* -- store -- */
const authStore = useAuthStore()
const colorStore = useColorStore()
const displayStatusStore = useDisplayStatusStore()
const colorModeStore = useColorModeStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { findPathData } = usePath()
/* const actionList = ref<Array<IActionList>>([
  {
    pathData: findPathData('/about'),
    buttons: [
      {
        props: {
          icon: 'edit_square'
        },
        title: '内容を編集する'
      }
    ]
  }
]) */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Admin',
  middleware: 'auth'
})
</script>

<style lang="scss" scoped>
#admin {

  .user-data {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-columns: 1fr auto;

    .signout {
      align-self: center;
    }

    .sub-data {
      grid-column: 1/3;
      grid-row: 2;

      display: flex;
      flex-flow: column;

      margin-bottom: 1rem;

      p {
        display: inline-flex;
        align-items: center;

        margin: 0px;

        font-size: 0.85rem;
        font-weight: bold;
        color: v-bind("colorStore.color.theme.subText");

        #Icon {
          margin-right: 1rem;
        }
      }
    }
  }

  .actions {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-auto-columns: auto;

    h3 {
      grid-row: 1;
    }

    .cards {
      grid-row: 2;
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 1rem;
    }

    .card {
      display: grid;
      grid-template-rows: min-content min-content;
      grid-template-columns: 1fr;

      padding: 1rem;

      background-color: v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.darken[2] : colorStore.color.white.default");
      border-radius: 0.5rem;

      #Button {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .contents {
        display: flex;
        flex-wrap: wrap;
      }

      p {
        grid-row: 1;

        display: inline-flex;
        align-items: center;

        margin-top: 0px;
      }
    }
  }

  .signin-methods {
    display: flex;
    flex-flow: column;
  }

  &.sm {
    .user-data {
      grid-template-rows: min-content min-content min-content;
      grid-template-columns: 1fr;

      .sub-data {
        grid-column: 1;
        justify-self: start;
      }
    }
  }
}
</style>
