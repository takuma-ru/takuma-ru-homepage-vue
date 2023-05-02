<template>
  <div id="about">
    <div
      v-for="(selfIntro, i) in selfIntroList"
      :key="selfIntro.query"
      class="self-intro"
    >
      <div class="contents">
        <h1 class="title">
          <span class="outline">My</span>
          <span v-text="selfIntro.contentTitle" />
          <span class="outline">is</span>
          <span v-text="selfIntro.contentName" />
          <span class="outline">.</span>
        </h1>
        <p>{{ selfIntro.detail }}</p>
      </div>
      <div class="content-other">
        <template v-if="selfIntro.query === 'how'">
          <img
            src="~/assets/imgs/NK_v6_sq_3_512.png"
            alt="takumaru's icon"
          />
        </template>
        <template v-if="selfIntro.query === 'occupation'">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Teamlab_logo_RGB_color.png"
            alt=""
          />
        </template>
      </div>
      <div
        v-if="selfIntroList.length - 1 !== i"
        class="next-guidepost"
      >
        <div class="line" />
        <div class="circle" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
type SelfIntroListType = Array<{
  query: string
  contentTitle: string
  contentName: string
  detail: string
}>

/* -- store -- */
const colorStore = useColorStore()
const route = useRoute()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const selfIntroList = ref<SelfIntroListType>([
  {
    query: 'how',
    contentTitle: 'name',
    contentName: 'takumaru',
    detail:
      'I am a Japanese who loves 🐈 and programming.I am currently a student, but I have decided to work as a web engineer. My hobbies are varied, but I especially enjoy things related to cats, games, and searching for artists.I also like to create things, so I became a web engineer because I can create various tangible things with a single PC.Best regards.',
  },
  {
    query: 'occupation',
    contentTitle: 'occupation',
    contentName: 'engineer',
    detail: 'I work as a front-end engineer at @team-lab.',
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
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    position: relative;
    height: 100%;
    padding: 0 15vw;
    margin-bottom: calc(40px + 2rem);

    @include mq-mixin(sp) {
      flex-direction: column;
      justify-content: center;

      height: auto;
      padding: 0;
      padding-bottom: 96px;
    }

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

    .content-other {
      display: flex;
      flex-flow: column;
      justify-content: center;

      img {
        width: 360px;
        border-radius: 1rem;
        border: 0.25rem solid v-bind('colorStore.value.theme.text');
        box-sizing: border-box;

        @include mq-mixin(sp) {
          width: 100%;
        }
      }
    }

    .next-guidepost {
      position: absolute;
      width: 8px;
      height: 56px;
      left: 50%;
      bottom: 1rem;
      transform: translateX(-50%);

      &::after {
        content: 'scroll to next';
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 50%;
        transform: translateX(-50%);
        color: v-bind('colorStore.value.theme.subText');

        font-size: 0.75rem;
        white-space: nowrap;
      }

      .line {
        position: absolute;
        width: 1px;
        height: 100%;
        left: 50%;

        transform: translateX(-50%);
        border-radius: 1px;
        background-color: v-bind('colorStore.value.theme.subText');
      }

      .circle {
        position: absolute;
        width: 8px;
        height: 8px;

        border-radius: 50%;
        background-color: v-bind('colorStore.value.theme.text');

        animation-name: circle;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;

        @keyframes circle {
          0% {
            top: 0%;
            scale: 0;
          }
          20% {
            scale: 1;
          }
          80% {
            top: calc(100% - 8px);
            scale: 1;
          }
          100% {
            top: calc(100% - 4px);
            scale: 0;
          }
        }
      }
    }
  }
}
</style>
