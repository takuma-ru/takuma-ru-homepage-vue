<template>
  <div
    id="works"
    :class="displayStatusStore.displaySize"
  >
    works
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
  title: 'Works'
})
</script>

<style lang="scss" scoped>
#works {

  &.pc {

  }

  &.lp {

  }

  &.sm {

  }
}
</style>
