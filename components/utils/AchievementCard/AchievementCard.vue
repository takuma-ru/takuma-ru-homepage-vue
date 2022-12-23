<template>
  <div
    id="achievementCard"
    :style="{
      backgroundImage: `url('${imgSrc[0]}')`
    }"
    @click="moveProductPage"
  >
    <span class="dev-type">
      {{ developmentType }}
    </span>
    <h2>
      {{ title }}
    </h2>
    <div class="bottom-contents">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg">
    </div>
  </div>
</template>

<script lang="ts" setup>

/* -- type, interface -- */
export interface IAchievementCardProps {
  developmentType: 'Graduation research' | 'Personal development' | 'Team development' | string
  imgSrc: Array<string>
  productId: string
  title: string
}

/* -- store -- */
const colorStore = useColorStore()
const colorModeStore = useColorModeStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IAchievementCardProps>(), {
  developmentType: 'developmentType',
  imgSrc: () => [ 'https://firebasestorage.googleapis.com/v0/b/takuma-ru-homepage.appspot.com/o/product_image%2Fchisk%2FfeatureGraphic.png?alt=media&token=d146d2fb-a990-42a5-b6bf-40f3aeb6486b' ],
  productId: 'testProduct',
  title: 'Product Title'
})

/* -- variable(ref, reactive, computed) -- */

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
  height: 160px;
  max-width: 720px;

  padding: 1rem;

  color: v-bind("colorStore.color.white.default");
  border: solid 2px v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.theme.complementaryDarken[1] : colorStore.color.white.darken[2]");
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

    border-radius: 0.5rem;
    background-color: #0000006C;
  }

  h2 {
    width: 100%;
    margin: 0px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dev-type {
    color: v-bind("colorStore.color.white.darken[3]");
    font-size: 16px;
  }

  .bottom-contents {
    display: flex;
    align-items: flex-end;

    img {
      height: 24px;
    }
  }
}
</style>
