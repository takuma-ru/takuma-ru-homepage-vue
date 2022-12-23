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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding-top: 2rem;

  &.sm {

  }
}
</style>
