<template>
  <div id="index">
    <div class="title">
      <h1 class="my-name">
        Hi!<br>
        I'm <HighLight>takuma-ru</HighLight>.
      </h1>
      <SocialMediaButon
        id="takumaru_2222"
        media-name="twitter"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const displayStatusStore = useDisplayStatusStore()

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
  }
}
</style>
