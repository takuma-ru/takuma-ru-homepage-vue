<template>
  <div
    id="about"
    :class="displayStatusStore.displaySize"
  >
    <div
      class="name"
    >
      <h1>
        my
        <HighLight :border-color="colorStore.color.red.default">
          name
        </HighLight>
        is
        <HighLight>takuma-ru</HighLight>
      </h1>
      <p class="text">
        I am a Japanese who loves 🐈 and programming.<br>
        I am currently a student, but I have decided to work as a web engineer.<br>
        My hobbies are varied, but I especially enjoy things related to cats, games, and searching for artists.<br>
        I also like to create things, so I became a web engineer because I can create various tangible things with a single PC.<br>
        Best regards.
      </p>
    </div>

    <div
      class="occupation"
    >
      <h1>
        my
        <HighLight :border-color="colorStore.color.red.default">
          occupation
        </HighLight>
        is
        <HighLight>NITC student</HighLight>
      </h1>
      <p class="text">
        I am currently a student at a National Institute of Technology College.<br>
        I am majoring in Information Processing and Software Development.<br>
        I am especially knowledgeable about web-related topics and develop web applications for my research and hobby.<br>
      </p>
    </div>

    <div
      class="good"
    >
      <h1>
        I'm
        <HighLight :border-color="colorStore.color.red.default">
          good
        </HighLight>
        at
        <HighLight>web font-end</HighLight>
      </h1>
      <p class="text">
        aaaaa
      </p>
    </div>

    <div
      class="skill"
    >
      <h1>
        My
        <HighLight :border-color="colorStore.color.red.default">
          skill
        </HighLight>
        are
        <HighLight :style="{ marginRight: '1rem' }">
          web
        </HighLight>
        <HighLight :style="{ marginRight: '1rem' }">
          unity
        </HighLight>
        <HighLight>and ...</HighLight>
      </h1>
      <p class="text">
        aaaaa
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const colorStore = useColorStore()

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'takuma-ru｜About'
})
</script>

<style lang="scss" scoped>
#about {

  .name, .occupation, .good, .skill {
    height: calc(100vh - 64px - 4rem);

    h1 {
      color: v-bind("colorStore.color.theme.subText");
      line-height: 4.5rem;
    }

    .highLight {
      font-size: 3rem;
      color: v-bind("colorStore.color.theme.text");
    }
  }

  &.pc, &.lp {
    .name, .occupation, .good, .skill {
      padding: 2rem 0px;

      .text {
        font-size: 1.5rem;
      }
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
