<template>
  <div
    id="works"
    :class="displayStatusStore.displaySize"
  >
    <Button
      fit-content
      icon="chevron_left"
      color="transparent"
    >
      Back to works page
    </Button>
    <div class="imgs">
      <img :src="productDataStore.searchProductData(route.params.id)?.imgSrc" alt="">
    </div>
    <div>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const productDataStore = useProductDataStore()

/* -- props, emit -- */
const route = useRoute()

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Works'
})
</script>

<style lang="scss" scoped>
#works {
  display: grid;
  grid-template-rows: auto 1fr 1fr;

  position: relative;
  height: 100%;

  .imgs {
    width: 100%;

    img {
      width: 100%;
      height: 50vh;

      border-radius: 1.25rem 1.25rem 0.25rem 0.25rem;
      object-fit: cover;
    }
  }
  &.pc {

  }

  &.lp {

  }

  &.sm {

  }
}
</style>
