<script lang="ts" setup>
const msg = ref('Hello World')
const test = (a: string, b: string, c: string, d: string) => {
  console.log(a, b, c, d)
}

test('252.44deg', '#9ef9e0 0 %', '#d3b7ee 50.52 %', '#ff825d 100 %')
</script>

<template>
  <div id="app">
    <div class="main-wrapper">
      <div class="main">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

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

#app {
  height: 100dvh;
  width: 100vw;

  background: linear-gradient(252.44deg,
      #9ef9e0 0%,
      #d3b7ee 50.52%,
      #ff825d 100%);
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
    border: 4px solid #222625;
    box-shadow: 0px 8px 40px rgba(34, 38, 37, 0.15);
    backdrop-filter: blur(3px);
    border-radius: 0.5rem;
    box-sizing: border-box;
  }
}
</style>
