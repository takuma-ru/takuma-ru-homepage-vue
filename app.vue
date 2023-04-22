<template>
  <div v-cloak id="app">
    <div class="main-wrapper">
      <div v-cloak class="main">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
  background: linear-gradient(252.44deg, #055A76 0%, #5B2591 50.52%, #930C18 100%);
}

.light-mode #app {
  background: linear-gradient(252.44deg, #9EF9E0 0%, #D3B7EE 50.52%, #FF825D 100%);
}

#app {
  height: 100dvh;
  width: 100vw;
  color: v-bind('colorStore.value.theme.text');
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
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  top: 3rem;
  bottom: 3rem;

  .main {
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
</style>
