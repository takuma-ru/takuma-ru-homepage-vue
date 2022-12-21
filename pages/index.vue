<template>
  <div id="index">
    {{ displayStatusStore.sm }}
    {{ displayStatusStore.lp }}
    {{ displayStatusStore.pc }}
    {{ displayStatusStore.displaySize }}
    <Button icon="face">
      テストボタン
    </Button>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const displayStatusStore = useDisplayStatusStore()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Index'
})
</script>

<style lang="scss" scoped>
#index {
  color: v-bind("displayStatusStore.displaySizeMixin({ sm: 'red', lp: 'blue', pc: 'green' })");
}
</style>
