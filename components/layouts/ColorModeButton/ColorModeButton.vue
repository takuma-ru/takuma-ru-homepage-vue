<template>
  <div class="layouts-color-mode-button">
    <input
      id="toggle"
      class="toggle-input"
      type="checkbox"
      v-model="isCheck"
      v-on:change="handleOnChange"
    />
    <label
      for="toggle"
      class="toggle-label"
    />
    <span></span>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const colorMode = useColorMode()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const isCheck = ref(false)

/* -- function -- */
const handleOnChange = () => {
  if (isCheck.value) {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }

  colorStore.setThemeFromColorMode()
}

/* -- watch -- */

/* -- life cycle -- */
onMounted(() => {
  isCheck.value = colorMode.value === 'dark'
})
</script>

<style lang="scss" scoped>
$width: 32px;
$height: 24px;
$border-radius: 12px;
$border-width: 4px;

.layouts-color-mode-button {
  input {
    display: none;
    cursor: pointer;

    &:checked {
      + label {
        background-color: transparent;

        &:after {
          left: calc((2 * $width) - $width - $border-width);
        }
      }
    }
  }

  label {
    width: calc(2 * $width);
    height: $height;
    background: transparent;
    position: relative;
    display: inline-block;
    border-radius: $border-radius;
    border: solid $border-width v-bind('colorStore.value.theme.text');
    transition: 0.2s;
    box-sizing: border-box;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      width: $width;
      height: $height;
      border-radius: $border-radius;
      left: -$border-width;
      top: -$border-width;
      z-index: 2;
      background: v-bind('colorStore.value.theme.text');
      transition: 0.2s;
      cursor: pointer;
    }
  }
}
</style>
