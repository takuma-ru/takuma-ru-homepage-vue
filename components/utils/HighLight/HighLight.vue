<template>
  <div
    :id="id"
    class="highLight"
  >
    <Transition
      name="highlight-transition"
      appear
    >
      <span v-if="isShow">
        <slot />
      </span>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IHighLightProps {
  borderColor: string
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IHighLightProps>(), {
  borderColor: '#5498ff'
})

/* -- variable(ref, reactive, computed) -- */
const id = ref(Math.random().toString(32).substring(2))
const targetRef = ref<HTMLElement | null>(null)
const isShow = ref(false)

/* -- function -- */
const observer = new IntersectionObserver(
  ([ entry ]) => {
    if (entry.isIntersecting) {
      isShow.value = true
      observer.disconnect()
    }
  },
  {
    root: null,
    threshold: 0
  }
)

/* -- watch -- */

/* -- life cycle -- */
onMounted(() => {
  targetRef.value = document.getElementById(id.value)
  observer.observe(targetRef.value!)
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<style lang="scss" scoped>
.highLight {
  // 参考：https://codepen.io/equinusocio/pen/KNYOxJ

  display: inline-block;

  span {
    &,
    &::after {
      animation-delay: var(--animation-delay, 3s);
      animation-iteration-count: var(--iterations, 1);
      animation-duration: var(--duration, 800ms);
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    }

    --animation-delay: 500ms;
    --animation-duration: 1s;
    --animation-iterations: 1;

    position: relative;
    padding: 0rem 1rem;

    white-space: nowrap;
    animation-name: clip-text;

    &::before {
      content: "";
      z-index: 999;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 0.25rem;
      border: solid 2px v-bind("props.borderColor");
      box-sizing: border-box;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 998;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: v-bind("props.borderColor");
      border-radius: 0.25rem;
      overflow: hidden;
      transform: scaleX(0);
      transform-origin: 0 50%;
      pointer-events: none;
      animation-name: text-revealer;
    }

    @keyframes clip-text {
      from {
        clip-path: inset(0 100% 0 0);
      }
      to {
        clip-path: inset(0 0 0 0);
      }
    }

    @keyframes text-revealer {
      0%, 50% {
        transform-origin: 0 50%;
      }

      60%, 100% {
        transform-origin: 100% 50%;
      }

      60% {
        transform: scaleX(1);
      }

      100% {
        transform: scaleX(0);
      }
    }

    .highlight-transition {
      &-enter {
        &-from {
          opacity: 0;
        }

        &-active {
          transition: all 0.2s ease-out;
        }

        &-to {
          opacity: 1;
        }
      }

      &-leave {
        &-from {
          opacity: 1;
        }

        &-active {
          transition: all 0.2s ease-out;
        }

        &-to {
          opacity: 0;
        }
      }
    }
  }
}
</style>
