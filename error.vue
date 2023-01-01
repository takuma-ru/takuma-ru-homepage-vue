<template>
  <div id="app">
    <NuxtLayout name="top">
      <div class="error">
        <div class="title">
          <h1>
            <span>
              Error Code
            </span>
            <HighLight :border-color="colorStore.color.red.default">
              {{ error?.statusCode }}
            </HighLight>
          </h1>
          <p>{{ error.message }}</p>
          <Button
            fit-content
            color="transparent"
            icon="chevron_left"
            style="margin-top: 1rem"
            @click="navigateTo('/')"
          >
            Back to top
          </Button>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { registerSW } from 'virtual:pwa-register'
import 'devicon'

registerSW()
/* -- type, interface -- */
interface IError {
  url: string;
  statusCode: string;
  statusMessage: string;
  message: string;
  description: string;
  data?: any;
}

/* -- store -- */
const colorStore = useColorStore()
const colorModeStore = useColorModeStore()
const productDataStore = useProductDataStore()

/* -- props, emit -- */
defineProps<{
  error: IError
}>()

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
useSvh()
productDataStore.getProductData()
</script>

<style lang="scss" scoped>
:root {
  --svh: 1vh
}

html, body {
  margin: 0px;

  font-family: 'Noto Sans JP', sans-serif;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[1]");
    background-clip: content-box;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
}

#app {
  width: 100vw;
  height: 100vh;
  height: calc(var(--svh, 1vh) * 100);
  max-height: calc(var(--svh, 1vh) * 100);

  background-color: v-bind("colorStore.color.theme.background");
  color: v-bind("colorStore.color.theme.text");

}

.error {
  display: grid;
  align-items: center;

  height: 100%;
}
</style>
