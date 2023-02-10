<template>
  <div class="combobox">
    <div class="select">
      <Icon
        v-if="icon"
        :icon="icon"
      />
      <div class="select-wrap">
        <select v-model="vModel">
          <option disabled value="">
            {{ title }}
          </option>
          <option
            v-for="( item, i ) in items"
            :key="i"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
        <label>{{ title }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
export interface IComboboxProps {
  icon?: IconNameType
  modelValue: string
  items: Array<string>
  title: string
}

export interface IComboboxEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IComboboxProps>(), {
  modelValue: ''
})
const emit = defineEmits<IComboboxEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.combobox {
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  position: relative;
  width: 100%;
  margin: 2em 0px 1em;

  .select-wrap {
    position: relative;
    width: 100%;
  }

  .select-wrap:after {
    content: "";
    position: absolute;
    right: 0px;
    top: 50%;
    width: 8px;
    height: 8px;
    border-top: 2px solid v-bind("colorStore.color.theme.subText");
    border-left: 2px solid v-bind("colorStore.color.theme.subText");
    transform: translateY(-50%) translateX(-200%) rotate(-135deg);
    font-size: 20px;
    pointer-events: none;
  }

  select {
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

    -webkit-appearance: none;
    appearance: none;

    background-image: url(画像のパス);
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 13px 13px;

    &::-ms-expand {
      display: none; /* デフォルトの矢印を非表示(IE用) */
    }

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

      line-height: 14px;
      font-size: 14px;
      transition: 0.2s;
      color: v-bind("colorStore.color.black.lighten[1]");
    }
  }

  .select {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 0.5rem;

    width: 100%;
  }
}
</style>
