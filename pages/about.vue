<template>
  <div
    id="about"
    :class="displayStatusStore.displaySize"
  >
    about
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()

/* -- props, emit -- */

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

  &.pc {

  }

  &.lp {

  }

  &.sm {

  }
}
</style>
