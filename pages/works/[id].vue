<template>
  <div
    id="works"
    :class="displayStatusStore.displaySize"
  >
    <Button
      fit-content
      icon="chevron_left"
      color="transparent"
      :style="{
        marginBottom: '1rem'
      }"
      @click="navigateTo('/works')"
    >
      Back to works page
    </Button>
    <div class="imgs">
      <img :src="productDataStore.searchProductData(route.params.id)?.imgSrc[0]" alt="">
    </div>
    <div class="detail">
      <h1>
        This product is
        <HighLight>
          {{ productDataStore.searchProductData(route.params.id)?.title }}
        </HighLight>
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const productDataStore = useProductDataStore()
const colorStore = useColorStore()

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
    position: relative;
    width: 100%;

    border-radius: 1.25rem 1.25rem 0.5rem 0.5rem;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      height: auto;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
    }

  }

  .detail {
    padding: 1rem 0px;

    h1 {
      margin: 0px;
      margin-bottom: 1rem;

      color: v-bind("colorStore.color.theme.text");

      .highLight {
        font-size: 2.75rem;
        line-height: 4.5rem;
      }
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
