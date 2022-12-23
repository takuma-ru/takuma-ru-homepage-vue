<template>
  <div
    id="header"
    :class="displayStatusStore.displaySize"
  >
    <div class="left-contents">
      <Button
        v-if="displayStatusStore.displaySize === 'sm'"
        is-icon
        icon="menu"
        class="menu-button"
      />

      <div
        class="title"
        @click="navigateTo('/')"
      >
        <img v-if="colorModeStore.colorMode === 'dark'" src="/icons/icon-darkmode.png" alt="icon-darkmode">
        <img v-else src="/icons/icon-lightmode.png" alt="icon-lightmode">
        <span>
          takumaru.dev
        </span>
      </div>
    </div>

    <div
      v-if="displayStatusStore.displaySize !== 'sm'"
      class="link-list"
    >
      <Button
        v-for="pathData in pathList"
        :key="pathData.path"
        size="small"
        outlined
        :color="pathData.path === route.fullPath ? colorStore.color.blue.default : 'transparent'"
        @click="navigateTo(pathData.path)"
      >
        {{ pathData.title }}
      </Button>
    </div>

    <div class="buttons">
      <ColorModeButton />
      <GithubButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorModeStore = useColorModeStore()
const colorStore = useColorStore()
const displayStatusStore = useDisplayStatusStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const {
  pathList
} = usePath()
const route = useRoute()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  padding: v-bind("displayStatusStore.displaySizeMixin({sm: '0px 1rem', lp: '0px 4rem', pc: '0px 4rem'})");

  .left-contents {
    display: flex;
    align-items: center;
  }

  .menu-button{
    margin-right: 1rem;
  }

  .title {
    display: flex;
    align-items: center;

    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    img {
      height: 20px;
    }

    span {
      margin-left: 0.5rem;

      font-size: 20px;
    }
  }

  .link-list {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin: 0px 0.5rem;
    }
  }

  .buttons {
    grid-column: 3;
    justify-self: end;
  }
}
</style>
