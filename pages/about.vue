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
        Click to Next
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
          I am currently enrolled in a National College of Technology.<br>
          I am majoring in Information Processing and Software Development.<br>
          I am currently doing my thesis on "Development of an Automatic Agitating Composting Toilet using IoT" and I am in charge of controlling and managing sensor data and developing applications.<br>
          At school, I mainly study web in general and game development; I use my web knowledge for my work and my game knowledge for teaching junior students.<br>
        </p>
        <div class="second-contents">
          <AchievementCard
            :product-id="productDataStore.searchProductData('b6a65930-f0d5-4c47-aa1b-ebe4864f699a').id"
          />
        </div>
      </div>
      <Button
        fit-content
        :color="colorStore.color.theme.text"
        icon="south"
        @click="scrollToRef(good)"
      >
        Click to Next
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
        <span class="first-contents">
          <p>
            We are good at implementing the "front end," the part of the Web that the end user touches.
          </p>
          <p>
            In particular, <HighLight delay="2000">
              Vue.js (NuxtJs)
            </HighLight> is the framework I am best at, and I also develop libraries for it!
          </p>
          <p>
            Of course I can also do React and Svelte.
          </p>
          <p>
            A representative work using the frontend is "CHISK".The concept is "Have fun performing tasks" and the UI and UX are pop and friendly.
          </p>
          <p>
            We are also involved in library development, albeit on a smaller scale. vue-swipe-modal" is in some demand and has been recognized and supported by JetBrains as OSS.
          </p>
        </span>
        <div class="second-contents">
          <AchievementCard
            :product-id="productDataStore.searchProductData('3c1b18f2-a88d-4bce-a587-43d4b10c4b9d').id"
          />
          <AchievementCard
            :product-id="productDataStore.searchProductData('9bd0a267-0aa8-427f-a930-abcfc549233a').id"
          />
        </div>
      </div>
      <Button
        fit-content
        :color="colorStore.color.theme.text"
        icon="south"
        @click="scrollToRef(skill)"
      >
        Click to Next
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
          <img src="https://skillicons.dev/icons?i=c,cs,cpp,codepen,css,express,figma,firebase,gcp,git,github,html,idea,js,nextjs,nodejs,nuxtjs,pug,py,raspberrypi,react,rollupjs,sass,supabase,svelte,svg,ts,unity,vite,vue,webpack" alt="">
        </div>
      </div>
      <Button
        fit-content
        :color="colorStore.color.theme.text"
        icon="vertical_align_top"
        @click="scrollToRef(name)"
      >
        Back to Top
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const colorStore = useColorStore()
const productDataStore = useProductDataStore()

/* -- variable(ref, reactive, computed) -- */
useSvh()
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
    min-height: calc((var(--svh, 1vh) * 100) - 64px - 2rem);
    padding: 1rem 0px;

    h1 {
      margin: 0px;
      margin-bottom: 1rem;

      color: v-bind("colorStore.color.theme.text");

      .highLight {
        font-size: 2.75rem;
        line-height: 4.5rem;
      }
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;

      position: relative;
      width: 100%;

      p {
        margin: 0px;
      }

      .first-contents {
        font-size: 1.25rem;
      }

      .second-contents {
        position: relative;
        width: 100%;

        img {
          width: 100%;
        }

        .contents-title {
          margin-bottom: 0.5rem;

          text-align: start;
          font-weight: 600;
          font-size: 0.75rem;
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

        .first-contents {
          font-size: 1rem;
        }
      }
    }

    .skill {
      margin-bottom: 2rem;
    }
  }
}
</style>
