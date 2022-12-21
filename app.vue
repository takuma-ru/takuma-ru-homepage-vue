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
const colorMode = useColorModeStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const displayStatusStore = useDisplayStatusStore()
const layout = computed(() => {
  if (displayStatusStore.displaySize === 'sm') {
    return 'smartphone'
  } else {
    return 'default'
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
colorMode.setSytemMode()

</script>

<style lang="scss">
html, body {
  margin: 0px;

  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: v-bind("colorStore.color.theme.background");
  color: v-bind("colorStore.color.theme.text");
}
</style>
