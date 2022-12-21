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
          to="/about"
        >
          Go to About Me
        </Button>
        <Button
          icon="category"
          to="/works"
          :color="colorStore.color.green.default"
        >
          Go to My Portfolio
        </Button>
        <Button
          icon="mail"
          to="/about"
          :color="colorStore.color.yellow.default"
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
const displayStatusStore = useDisplayStatusStore()
const colorStore = useColorStore()

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

      #Button {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
