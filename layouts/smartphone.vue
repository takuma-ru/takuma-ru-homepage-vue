<template>
  <div id="smartphone-layout">
    <Header />
    <div id="contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#smartphone-layout {
  display: grid;
  grid-template-rows: 64px 1fr;

  position: relative;
  width: 100%;
  height: 100%;

  #contents {
    grid-row: 2;

    width: calc(100% - 2rem);
    padding: 0px 1em;

    overflow-y: auto;
    scroll-behavior: smooth;
  }
}
</style>
