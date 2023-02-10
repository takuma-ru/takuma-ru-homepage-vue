<template>
  <div
    id="achievementCard"
    :style="{
      backgroundImage: `url('${productData.imgs[0]}')`
    }"
    @click="moveProductPage"
  >
    <span
      class="dev-type"
      v-text="productData.developmentType"
    />
    <h2 v-text="productData.title" />
    <div class="bottom-contents">
      <i
        v-for="techniqueName in productData.usedTechniques"
        :key="techniqueName"
        :class="`devicon-${techniqueName}-plain`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

/* -- type, interface -- */
export interface IAchievementCardProps {
  productId: string
}

/* -- store -- */
const colorStore = useColorStore()
const colorModeStore = useColorModeStore()
const productDataStore = useProductDataStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IAchievementCardProps>(), {
  productId: 'ZBTraN6IoRXfusw6l30N'
})

/* -- variable(ref, reactive, computed) -- */
const productData = computed(() => {
  return productDataStore.searchProductData(props.productId)
})

/* -- function -- */
const moveProductPage = () => {
  navigateTo(`/works/${props.productId}`)
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#achievementCard {
  display: grid;
  grid-template-columns: minmax(100%, 720px);
  grid-template-rows: min-content min-content 1fr;

  position: relative;
  z-index: 2;
  height: 200px;
  max-width: 720px;

  padding: 1rem;

  color: v-bind("colorStore.color.white.default");
  border: solid 2px v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.theme.complementaryDarken[3] : colorStore.color.white.darken[2]");
  border-radius: 0.5rem;
  box-sizing: border-box;
  background-color: v-bind("colorStore.color.theme.complementaryDarken[2]");
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    border-radius: 0.35rem;
    background-color: #0000009A;
  }

  h2 {
    width: 100%;
    margin: 0px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dev-type {
    color: v-bind("colorStore.color.white.darken[2]");
    font-size: 16px;
    font-weight: 300;
  }

  .bottom-contents {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    i {
      margin-right: 0.5rem;

      font-size: 24px;
    }
  }
}
</style>
