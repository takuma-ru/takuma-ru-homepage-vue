<template>
  <div class="layouts-color-mode-button">
    <Icon
      icon="light_mode"
      :color="colorStore.value.theme.background"
      :size="'20px'"
      :wght="700"
    />
    <div class="button">
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
    <Icon
      icon="dark_mode"
      :color="colorStore.value.theme.background"
      :size="'20px'"
      :wght="700"
    />
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;

  .button {
    display: flex;
    align-items: center;
    user-select: none;

    input {
      display: none;
      cursor: pointer;
      user-select: none;

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
      border: solid $border-width transparent;
      transition: 0.2s;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;

      &:after {
        content: '';
        position: absolute;
        width: $width;
        height: $height;
        border-radius: $border-radius;
        left: -$border-width;
        top: -$border-width;
        z-index: 2;
        background: v-bind('colorStore.value.theme.background');
        transition: 0.2s;
        cursor: pointer;
      }
    }
  }
}
</style>
