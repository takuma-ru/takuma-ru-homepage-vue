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
        <HighLight delay="1200">
          takuma-ru
        </HighLight>
      </h1>
      <p class="text">
        I am a Japanese who loves 🐈 and programming.<br>
        I am currently a student, but I have decided to work as a web engineer.<br>
        My hobbies are varied, but I especially enjoy things related to cats, games, and searching for artists.<br>
        I also like to create things, so I became a web engineer because I can create various tangible things with a single PC.<br>
        Best regards.
      </p>
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
        <HighLight delay="1200">
          NITC student
        </HighLight>
      </h1>
      <p class="text">
        I am currently a student at a National Institute of Technology College.<br>
        I am majoring in Information Processing and Software Development.<br>
        I am especially knowledgeable about web-related topics and develop web applications for my research and hobby.<br>
      </p>
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
        <HighLight delay="1200">
          web font-end
        </HighLight>
      </h1>
      <p class="text">
        aaaaa
      </p>
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
          delay="1200"
          :style="{
            marginRight: '1rem'
          }"
        >
          web
        </HighLight>
        <HighLight
          delay="1500"
          :style="{
            marginRight: '1rem'
          }"
        >
          unity
        </HighLight>
        <HighLight delay="1800">
          and ...
        </HighLight>
      </h1>
      <p class="text">
        aaaaa
      </p>
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

/* -- function -- */
const scrollToRef = (toRef?: HTMLElement) => {
  const contentsElement = document.getElementById('contents')
  contentsElement!.scrollTo({
    top: (contentsElement?.scrollTop ? contentsElement?.scrollTop : 0) + toRef!.getBoundingClientRect().top - 64,
    behavior: 'smooth'
  })
}

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'takuma-ru｜About'
})
</script>

<style lang="scss" scoped>
#about {
  .name, .occupation, .good, .skill {
    display: grid;
    grid-template-rows: auto 1fr auto;

    height: calc(v-bind("svh") * 100 - 64px - 4rem);
    padding: 2rem 0px;

    h1 {
      color: v-bind("colorStore.color.theme.text");
      line-height: 4.5rem;
    }

    .highLight {
      font-size: 3rem;
    }

    .text {
      font-size: 1.5rem;
    }
  }

  &.sm {
    .name, .occupation, .good, .skill {

      .text {
        font-size: 1rem;
      }
    }
  }
}
</style>
