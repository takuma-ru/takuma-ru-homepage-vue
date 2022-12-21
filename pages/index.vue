<template>
  <div id="index">
    <div class="title">
      <h1 class="my-name">
        Hi!<br>
        I'm <HighLight>takuma-ru</HighLight>.
      </h1>
      <div class="media">
        <SocialMediaButon
          v-for="mediaData in mediaDataList"
          :key="mediaData.mediaName"
          :uid="mediaData.uid"
          :media-name="mediaData.mediaName"
          :style="{
            marginBottom: '1rem'
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ISocialMediaButonProps } from '~/components/utils/SocialMediaButon/SocialMediaButon.vue'

/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const displayStatusStore = useDisplayStatusStore()
const mediaDataList = ref<Array<ISocialMediaButonProps>>([
  {
    uid: 'takuma-ru',
    mediaName: 'github'
  },
  {
    uid: 'takumaru_2222',
    mediaName: 'twitter'
  },
  {
    uid: 'nekoo_2222',
    mediaName: 'instagram'
  }
])

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Index',
  layout: 'top'
})
</script>

<style lang="scss" scoped>
#index {
  .title {
    display: grid;

    position: absolute;
    top: 50%;

    transform: translateY(-50%);

    .my-name {
      font-size: 3rem;
    }

    .media {
      display: flex;
      flex-flow: column;
    }
  }
}
</style>
