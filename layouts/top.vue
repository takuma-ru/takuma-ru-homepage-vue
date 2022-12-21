<template>
  <div id="top-layout">
    <div class="contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
#top-layout {
  display: grid;
  grid-template-rows: 1fr;

  position: relative;
  width: 100%;
  height: 100%;

  .contents {
    padding: 2rem;
  }
}
</style>
