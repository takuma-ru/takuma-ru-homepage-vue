<template>
  <div id="index">
    <div class="title">
      <h1 class="my-name">
        Hi!<br>
        I'm <HighLight>takuma-ru</HighLight>.
      </h1>
      <div class="media">
        <Button
          icon="person"
          fit-content
          :icon-props="{
            fill: true
          }"
          to="/about"
        >
          Go to About Me
        </Button>
        <Button
          icon="category"
          fit-content
          :icon-props="{
            fill: true
          }"
          to="/works"
        >
          Go to My Portfolio
        </Button>
        <Button
          icon="mail"
          fit-content
          :icon-props="{
            fill: true
          }"
          to="/contact"
        >
          How to contact me
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
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
  display: grid;
  align-items: center;
  justify-content: center;

  height: 100%;

  .title {
    .my-name {
      font-size: 3rem;
    }

    .media {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      row-gap: 1rem;
    }
  }
}
</style>
