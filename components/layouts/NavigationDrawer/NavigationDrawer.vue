<template>
  <div
    id="navigationDrawer"
  >
    <transition name="transition-nav">
      <nav
        v-if="vModel"
        class="navigationDrawer"
      >
        <img
          v-if="colorModeStore.colorMode === 'dark'"
          src="/icons/icon-darkmode.png"
          alt="icon-darkmode"
          @click="movePage('/')"
        >
        <img
          v-else
          src="/icons/icon-lightmode.png"
          alt="icon-lightmode"
          @click="movePage('/')"
        >
        <div class="buttons">
          <div
            v-for="pathData in pathList"
            :key="pathData.title"
            class="path-button"
            @click="movePage(pathData.path)"
          >
            <HighLight
              v-if="route.path.indexOf(pathData.path) !== -1"
              :border-color="colorStore.color.theme.text"
              delay="300ms"
            >
              <span>
                {{ pathData.title }}
              </span>
            </HighLight>
            <span v-else class="text">
              {{ pathData.title }}
            </span>
          </div>
        </div>
        <Icon
          v-if="vModel"
          icon="arrow_back_ios"
          :color="colorStore.color.white.default"
          class="close-icon"
          @click="vModel = false"
        />
      </nav>
    </transition>
    <div
      v-if="vModel"
      class="background"
      @click="vModel = false"
    />
  </div>
</template>

<script lang="ts" setup>

/* -- type, interface -- */
export interface INavigationDrawerProps {
  modelValue: any;
}

export interface INavigationDrawerEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const colorStore = useColorStore()
const colorModeStore = useColorModeStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<INavigationDrawerProps>(), {
  modelValue: false
})
const emit = defineEmits<INavigationDrawerEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)
const {
  pathList
} = usePath()
const route = useRoute()

/* -- function -- */
const movePage = (path: string) => {
  navigateTo(path)
  vModel.value = false
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationDrawer {

  .navigationDrawer {
    display: grid;
    grid-template-rows: auto 1fr;

    position: absolute;
    z-index: 9999;
    width: 80vw;
    height: calc(var(--svh, 1vh) * 100);
    top: 0px;
    left: 0px;

    border-radius: 0px 1rem 1rem 0px;

    background-color: v-bind("colorStore.color.theme.background");

    img {
      height: 20px;
      margin: 2rem;
    }

    .buttons {
      align-self: center;
      display: grid;

      width: 100%;

      .path-button {
        display: inline-flex;
        align-items: center;

        position: relative;
        height: 1.5rem;
        padding: 1rem 2rem 1rem 1rem;

        font-size: 1.5rem;

        .text {
          padding: 0px 1rem;
        }
      }
    }

    .close-icon{
      position: absolute;
      z-index: 9999;
      top: 50%;
      right: -10vw;
    }
  }

  .background {
    position: absolute;
    z-index: 9998;

    width: 100%;
    height: calc(var(--svh, 1vh) * 100);
    top: 0px;
    left: 0px;

    background-color: #0000007c;
  }

  .transition-nav {
    &-enter {
      &-from {
        left: -80vw;
      }
      &-active {
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      &-to {
        left: 0px;
      }
    }
    &-leave {
      &-from {
        left: 0px;
      }
      &-active {
        transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      &-to {
        left: -80vw;
      }
    }
  }
}
</style>
