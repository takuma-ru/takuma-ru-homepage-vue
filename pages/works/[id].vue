<template>
  <div
    id="works"
    :class="displayStatusStore.displaySize"
  >
    works
    {{ route.params.id }}
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()

/* -- props, emit -- */
const route = useRoute()

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
