<template>
  <Button
    is-icon
    :icon="colorModeStore.colorMode === 'dark' ? 'dark_mode' : 'light_mode'"
    @click="colorModeStore.switchMode()"
  />
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorModeStore = useColorModeStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>
