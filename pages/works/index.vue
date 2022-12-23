<template>
  <div
    id="works"
    :class="displayStatusStore.displaySize"
  >
    <AchievementCard
      v-for="productData in productDataStore.productDataList"
      :key="productData.productId"
      :development-type="productData.developmentType"
      :img-src="productData.imgSrc"
      :product-id="productData.productId"
      :title="productData.title"
      :style="{
        marginRight: displayStatusStore.displaySize !== 'sm' ? '0.5rem' : 0,
        marginLeft: displayStatusStore.displaySize !== 'sm' ? '0.5rem' : 0,
        marginBottom: '1rem'
      }"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const productDataStore = useProductDataStore()

/* -- props, emit -- */

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
  justify-content: space-around;

  padding-top: 2rem;

  &.pc {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.lp {
    grid-template-columns: 1fr 1fr;
  }

  &.sm {
    grid-template-columns: 1fr;
  }
}
</style>
