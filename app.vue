<template>
  <div id="app">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { registerSW } from 'virtual:pwa-register'

registerSW()
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const displayStatusStore = useDisplayStatusStore()
const colorModeStore = useColorModeStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const layout = computed(() => {
  if (useRoute().fullPath === '/') {
    return 'top'
  } else if (displayStatusStore.displaySize === 'sm') {
    return 'smartphone'
  } else {
    return 'default'
  }
})

const {
  svh
} = useSvh()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */

</script>

<style lang="scss">
html, body {
  margin: 0px;

  font-family: 'Noto Sans JP', sans-serif;

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    border-radius: 8px;
    background-color: v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[1]");
    background-clip: content-box;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
}

#app {
  width: 100vw;
  height: 100vh;
  height: calc(v-bind("svh") * 100);
  background-color: v-bind("colorStore.color.theme.background");
  color: v-bind("colorStore.color.theme.text");
}

p {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
