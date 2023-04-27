<template>
  <div class="layouts-navigation-bar-button">
    <Button
      is-icon
      :icon="navigationStore.isOpen ? 'chevron_left' : 'menu'"
      :icon-props="{
        color: colorStore.value.theme.text,
        size: '32px',
        wght: 700,
      }"
      @click="switchOpen"
    />
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
const switchOpen = () => {
  navigationStore.isOpen = !navigationStore.isOpen
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.layouts-navigation-bar-button {
}
</style>
