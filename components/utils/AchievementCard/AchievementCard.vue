<template>
  <div
    id="achievementCard"
    :style="{
      backgroundImage: `url('${imgSrc}')`
    }"
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
  title: string
  imgSrc: string
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IAchievementCardProps>(), {
  developmentType: 'developmentType',
  title: 'Product Title',
  imgSrc: '/imgs/mock_1.jpg'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#achievementCard {
  display: grid;
  grid-template-columns: minmax(100%, calc(640px - 2rem));
  grid-template-rows: min-content min-content 1fr;

  position: relative;
  z-index: 2;
  height: calc(160px - 2rem);

  padding: 1rem;

  color: v-bind("colorStore.color.white.default");
  border-radius: 0.5rem;
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
