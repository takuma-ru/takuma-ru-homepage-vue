<template>
  <div
    v-if="navigationStore.isOpen"
    class="layouts-navigation-bar"
  >
    navigationBar
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const navigationStore = useNavigationStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.layouts-navigation-bar {
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: v-bind('colorStore.value.theme.text');
  color: v-bind('colorStore.value.theme.background');
}
</style>
