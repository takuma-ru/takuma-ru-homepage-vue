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
      <NavigationBar />
      <div
        v-cloak
        class="main"
      >
        <NavigationBarButton />
        <NuxtPage />
      </div>
    </TransitionGroup>
    <div class="bottom-contents">
      <ColorModeButton />
    </div>
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
}

.dark-mode #app {
  background: linear-gradient(
    252.44deg,
    #055a76 0%,
    #5b2591 50.52%,
    #930c18 100%
  );
}

.light-mode #app {
  background: linear-gradient(
    252.44deg,
    #9ef9e0 0%,
    #d3b7ee 50.52%,
    #ff825d 100%
  );
}

#app {
  height: 100dvh;
  width: 100vw;

  color: v-bind('colorStore.value.theme.text');
  transition: color background border 0.2s;
}

.outline {
  color: transparent;
  text-stroke: 2px v-bind('colorStore.value.theme.text');
  -webkit-text-stroke: 2px v-bind('colorStore.value.theme.text');
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
  bottom: 3rem;

  .main {
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: rgba(250, 252, 252, 0.05);
    border: 4px solid v-bind('colorStore.value.theme.text');
    box-shadow: 0px 8px 40px rgba(34, 38, 37, 0.15);
    backdrop-filter: blur(3px);
    border-radius: 0.5rem;
    box-sizing: border-box;
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
      transform: translateX(30px) !important;
    }
    &-active {
      transition: all 0.5s ease;
    }
    &-to {
    }
  }

  &-leave {
    &-from {
    }
    &-active {
      transition: all 0.5s ease;
    }
    &-to {
      opacity: 0 !important;
      transform: translateX(30px) !important;
    }
  }
}
</style>
