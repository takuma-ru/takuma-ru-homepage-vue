<template>
  <div
    id="admin"
    :class="displayStatusStore.displaySize"
  >
    <SignInButton provider="google" />
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
  title: 'Admin',
  middleware: 'auth'
})
</script>

<style lang="scss" scoped>
#admin {

  &.pc {

  }

  &.lp {

  }

  &.sm {

  }
}
</style>
