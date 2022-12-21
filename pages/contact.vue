<template>
  <div
    id="contact"
    :class="displayStatusStore.displaySize"
  >
    contact
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
  title: 'Contact'
})
</script>

<style lang="scss" scoped>
#contact {

  &.pc {

  }

  &.lp {

  }

  &.sm {

  }
}
</style>
