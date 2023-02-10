<template>
  <div id="datePicker">
    <VuepicDatepicker
      v-model="vModel"
      month-picker
      :dark="colorModeStore.colorMode === 'dark'"
    >
      <template #dp-input="{ value }">
        <div class="input">
          <Icon
            v-if="icon"
            :icon="icon"
          />
          <input type="text" :value="value">
          <label>{{ labelText }}</label>
        </div>
      </template>
    </VuepicDatepicker>
  </div>
</template>

<script lang="ts" setup>
import VuepicDatepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
export interface IDatePickerProps {
  icon?: IconNameType
  labelText: string
  modelValue: Date
  placeholder: string
}

export interface IDatePickerEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const colorStore = useColorStore()
const colorModeStore = useColorModeStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IDatePickerProps>(), {
  type: 'text',
  labelText: 'label',
  placeholder: 'プライスホルダー'
})
const emit = defineEmits<IDatePickerEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
$dp__border_radius: 8px !default;

#datePicker {
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  position: relative;
  width: 100%;
  margin: 2em 0px 1em;

  input {
    flex-grow: 1;

    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    min-height: 56px;
    padding: 0.75rem 1rem;

    transition: 0.2s;
    font: 15px/24px 'Noto Sans JP', sans-serif;
    box-sizing: border-box;
    border: 0px solid v-bind("colorStore.color.black.lighten[2]");
    color: v-bind("colorStore.color.theme.text");
    border-radius: 8px;
    background-color: #bec6cf50;
    resize: vertical;

    &::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;

      &::placeholder {
        color: v-bind("colorStore.color.theme.subText");
      }

      & ~ label {
        top: 0px;
        left: 0.5rem;

        line-height: 14px;
        font-size: 14px;
        transition: 0.2s;
        color: v-bind("colorStore.color.theme.complementaryDarken[1]");
      }
    }

    &:valid ~ label {
      top: -24px;
      left: 0.5rem;

      line-height: 14px;
      font-size: 14px;
      transition: 0.2s;
      color: v-bind("colorStore.color.black.lighten[1]");
    }

    /* & ~ label {
      position: absolute;
      z-index: 0;
      line-height: 56px;
      top: 24px;
      left: 1rem;

      transition: 0.2s;
      letter-spacing: 0.5px;
      color: v-bind("colorStore.color.theme.text");
    } */

    & ~ label {
      position: absolute;
      z-index: 0;
      top: -24px;
      left: 0.5rem;
      margin-left: v-bind("icon && 'calc(24px + 0.5rem)'");

      line-height: 14px;
      font-size: 14px;
      transition: 0.2s;
      color: v-bind("colorStore.color.black.lighten[1]");
    }
  }

  .input {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 0.5rem;

    width: 100%;
  }
}
</style>
