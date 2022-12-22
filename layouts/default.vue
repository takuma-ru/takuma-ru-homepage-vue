<template>
  <div id="default-layout">
    <Header />
    <div
      id="contents"
      ref="contents"
    >
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
#default-layout {
  display: grid;
  grid-template-rows: 64px 1fr;

  position: relative;
  width: 100%;
  height: 100%;

  #contents {
    grid-row: 2;

    padding: 0rem 4em;

    overflow-y: auto;
    scroll-behavior: smooth;
  }
}
</style>
