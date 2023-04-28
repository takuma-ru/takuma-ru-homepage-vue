<template>
  <div id="about">
    <div
      v-for="selfIntro in selfIntroList"
      :key="selfIntro.contentTitle"
      class="self-intro"
    >
      <div class="contents">
        <h1 class="title">
          <span class="outline">My</span>
          <span v-text="selfIntro.contentTitle" />
          <span class="outline">is</span>
          <span v-text="selfIntro.contentName" />
        </h1>
        <p>{{ selfIntro.detail }}</p>
      </div>
      <div class="content-other"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
type SelfIntroListType = Array<{
  contentTitle: string
  contentName: string
  detail: string
}>
/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const selfIntroList = ref<SelfIntroListType>([
  {
    contentTitle: 'name',
    contentName: 'takumaru',
    detail:
      'I am a Japanese who loves 🐈 and programming.I am currently a student, but I have decided to work as a web engineer. My hobbies are varied, but I especially enjoy things related to cats, games, and searching for artists.I also like to create things, so I became a web engineer because I can create various tangible things with a single PC.Best regards.',
  },
])

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'About',
})
</script>

<style lang="scss" scoped>
#about {
  .self-intro {
    height: 100%;
    padding: 0 10vw;

    display: flex;

    .contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      .title {
        display: flex;
        flex-flow: row wrap;
        column-gap: 12px;
      }
    }
  }
}
</style>
