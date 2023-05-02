<template>
  <div
    v-cloak
    id="app"
  >
    <div class="top-contents">
      <TopContents />
    </div>
    <TransitionGroup
      name="main-wrapper-transition"
      tag="div"
      class="main-wrapper"
    >
      <NavigationBar :key="1" />
      <div
        v-cloak
        :key="2"
        class="main"
      >
        <NavigationBarButton />
        <NuxtPage />
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import 'material-symbols'

const colorStore = useColorStore()

colorStore.setThemeFromColorMode()
</script>

<style lang="scss">
@font-face {
  font-family: 'Mona-Sans';
  src: url('~/assets/Mona-Sans-Medium.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: 'Mona-Sans';
  src: url('~/assets/Mona-Sans-Bold.ttf') format('truetype');
  font-weight: bold;
}

html,
body {
  position: relative;
  height: 100dvh;
  width: 100vw;
  margin: 0;
  font-family: 'Mona-Sans', sans-serif;
  overscroll-behavior: none;

  ::-webkit-scrollbar {
    width: 12px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    margin: 1rem 0;
    border: 4px solid transparent;
    border-radius: 8px;
    background-color: v-bind('colorStore.value.theme.subText');
    background-clip: content-box;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
}

.dark-mode #app {
  background: linear-gradient(
    252.44deg,
    #0da3af 0%,
    #705dbd 50.52%,
    #db2a1d 100%
  );
}

.light-mode #app {
  background: linear-gradient(
    252.44deg,
    #12ccc9 0%,
    #bc86f2 50.52%,
    #ff825d 100%
  );
}

#app {
  position: relative;
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  width: 100dvw;

  overflow: hidden;

  color: v-bind('colorStore.value.theme.text');
  transition: color background border 0.2s;
}

.outline {
  color: transparent;
  text-stroke: 2px v-bind('colorStore.value.theme.text');
  -webkit-text-stroke: 2px v-bind('colorStore.value.theme.text');

  @include mq-mixin(sp) {
    -webkit-text-stroke: 1px v-bind('colorStore.value.theme.text');
  }
}

[v-cloak] {
  display: none;
}
</style>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  column-gap: 24px;
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  top: 3rem;
  bottom: 1.5rem;

  .main {
    display: grid;
    grid-template-rows: auto 1fr;

    position: relative;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: rgba(250, 252, 252, 0.05);
    border: 4px solid v-bind('colorStore.value.theme.text');
    box-shadow: 0px 8px 40px rgba(34, 38, 37, 0.15);
    backdrop-filter: blur(3px);
    border-radius: 1rem;
    box-sizing: border-box;
    overflow-y: auto;
  }
}

.top-contents {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  height: 48px;
  left: 1.5rem;
  right: 1.5rem;
  top: 0;
}

.bottom-contents {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  position: absolute;
  height: 48px;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 0;
}

.main-wrapper-transition {
  &-enter {
    &-from {
      opacity: 0 !important;
      transform: translateX(-128px) !important;
    }
    &-active {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    &-to {
    }
  }

  &-leave {
    &-from {
    }
    &-active {
      transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    &-to {
      opacity: 0 !important;
      transform: translateX(-128px) !important;
    }
  }

  &-move {
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  &-leave-active {
    position: absolute;
  }
}
</style>
