<template>
  <div class="utils-button">button</div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IButtonProps {
  modelValue: any
}

export interface IButtonEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IButtonProps>(), {
  modelValue: false
})

const emit = defineEmits<IButtonEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.utils-button {}
</style>
