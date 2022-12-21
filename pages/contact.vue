<template>
  <div
    id="contact"
    :class="displayStatusStore.displaySize"
  >
    <div class="media-link">
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
</template>

<script lang="ts" setup>
import { ISocialMediaButonProps } from '~/components/utils/SocialMediaButon/SocialMediaButon.vue'

/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
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
  title: 'Contact'
})
</script>

<style lang="scss" scoped>
#contact {

  .media-link {
    display: grid;
  }

  &.pc {

  }

  &.lp {

  }

  &.sm {

  }
}
</style>
