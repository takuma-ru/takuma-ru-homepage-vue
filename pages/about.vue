<template>
  <div
    id="about"
    :class="displayStatusStore.displaySize"
  >
    <div
      ref="name"
      class="name"
    >
      <h1>
        my
        <HighLight :border-color="colorStore.color.red.default">
          name
        </HighLight>
        is
        <HighLight delay="1400">
          takuma-ru
        </HighLight>
      </h1>
      <div class="description">
        <p class="first-contents">
          I am a Japanese who loves 🐈 and programming.<br>
          I am currently a student, but I have decided to work as a web engineer.<br>
          My hobbies are varied, but I especially enjoy things related to cats, games, and searching for artists.<br>
          I also like to create things, so I became a web engineer because I can create various tangible things with a single PC.<br>
          Best regards.
        </p>
      </div>
      <Button
        fit-content
        :color="colorStore.color.theme.text"
        icon="south"
        @click="scrollToRef(occupation)"
      >
        Go to Next
      </Button>
    </div>

    <div
      ref="occupation"
      class="occupation"
    >
      <h1>
        my
        <HighLight :border-color="colorStore.color.red.default">
          occupation
        </HighLight>
        is
        <HighLight delay="1400">
          NITC student
        </HighLight>
      </h1>
      <div class="description">
        <p class="first-contents">
          I am currently a student at a National Institute of Technology College.<br>
          I am majoring in Information Processing and Software Development.<br>
          I am especially knowledgeable about web-related topics and develop web applications for my research and hobby.<br>
        </p>
        <div class="second-contents">
          <p class="contents-title">
            track record
          </p>
          <AchievementCard />
        </div>
      </div>
      <Button
        fit-content
        :color="colorStore.color.theme.text"
        icon="south"
        @click="scrollToRef(good)"
      >
        Go to Next
      </Button>
    </div>

    <div
      ref="good"
      class="good"
    >
      <h1>
        I'm
        <HighLight :border-color="colorStore.color.red.default">
          good
        </HighLight>
        at
        <HighLight delay="1400">
          web font-end
        </HighLight>
      </h1>
      <div class="description">
        <p class="first-contents">
          We are good at implementing the "front end," the part of the Web that the end user touches.<br>
          In particular, <HighLight>Vue.js (NuxtJs)</HighLight> is the framework I am best at, and I also develop libraries for it!<br>
          Of course I can also do React and Svelte.
        </p>
      </div>
      <Button
        fit-content
        :color="colorStore.color.theme.text"
        icon="south"
        @click="scrollToRef(skill)"
      >
        Go to Next
      </Button>
    </div>

    <div
      ref="skill"
      class="skill"
    >
      <h1>
        My
        <HighLight :border-color="colorStore.color.red.default">
          skill
        </HighLight>
        are
        <HighLight
          delay="1400"
          :style="{
            marginRight: '1rem'
          }"
        >
          web
        </HighLight>
        <HighLight
          delay="1700"
          :style="{
            marginRight: '1rem'
          }"
        >
          unity
        </HighLight>
        <HighLight delay="2000">
          and ...
        </HighLight>
      </h1>
      <div class="description">
        <p class="first-contents">
          We have been exposed to a variety of languages and frameworks in addition to web front-end.<br>
          I have a basic understanding of how to handle the following technologies
        </p>
        <div class="second-contents">
        </div>
      </div>
      <Button
        fit-content
        :color="colorStore.color.theme.text"
        icon="vertical_align_top"
        @click="scrollToRef(name)"
      >
        Go to Top
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const colorStore = useColorStore()

/* -- variable(ref, reactive, computed) -- */
const {
  svh
} = useSvh()
const name = ref<HTMLElement>()
const occupation = ref<HTMLElement>()
const good = ref<HTMLElement>()
const skill = ref<HTMLElement>()
const contentsElement = ref<HTMLElement | null>()
const currentRef = ref<'name' | 'occupation' | 'good' | 'skill'>('name')

/* -- function -- */
const scrollToRef = (toRef?: HTMLElement) => {
  currentRef.value = toRef?.className as 'name' | 'occupation' | 'good' | 'skill'
  contentsElement.value!.scrollTo({
    top: (contentsElement.value?.scrollTop ? contentsElement.value?.scrollTop : 0) + toRef!.getBoundingClientRect().top - 64,
    behavior: 'smooth'
  })
}

/* -- watch -- */

/* -- life cycle -- */
onMounted(() => {
  contentsElement.value = document.getElementById('contents')
})

definePageMeta({
  title: 'takuma-ru｜About'
})
</script>

<style lang="scss" scoped>
#about {
  .name, .occupation, .good, .skill {
    display: grid;
    grid-template-rows: auto 1fr auto;

    position: relative;
    width: 100%;
    height: calc((v-bind("svh") * 100) - 64px - 4rem);
    padding: 2rem 0px;

    h1 {
      margin: 0px;
      margin-bottom: 1rem;

      color: v-bind("colorStore.color.theme.text");

      .highLight {
        font-size: 3rem;
        line-height: 5rem;
      }
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      position: relative;
      width: 100%;

      p {
        margin: 0px;
      }

      .first-contents {
        font-size: 1.5rem;
      }

      .second-contents {
        position: relative;
        width: 100%;

        .contents-title {
          margin-bottom: 1rem;

          font-weight: 600;
          font-size: 1rem;
          color: v-bind("colorStore.color.theme.subText");
        }
      }
    }
  }

  &.sm {
    .name, .occupation, .good, .skill {
      .description {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;

        font-size: 1rem;
      }
    }

    .skill {
      margin-bottom: 2rem;
    }
  }
}
</style>
