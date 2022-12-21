<template>
  <span id="highLight">
    <slot />
  </span>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IHighLightProps {
  color: string
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IHighLightProps>(), {
  color: '#5498ff'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#highLight {
  // 参考：https://codepen.io/equinusocio/pen/KNYOxJ
  &, &::after {
    animation-delay: var(--animation-delay, 2s);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 800ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
  }

  --animation-delay: var(--delay, 0);
  --animation-duration: var(--duration, 800ms);
  --animation-iterations: var(--iterations, 1);

  position: relative;
  padding: 0rem 1rem;
  /* margin: 0rem 0.5rem; */

  white-space: nowrap;
  border-radius: 0.5rem;
  border: solid 2px v-bind("props.color");
  box-sizing: border-box;
  animation-name: clip-text;

  &::after {
    content: "";
    position: absolute;
    z-index: 999;
    height: calc(100% + 4px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: v-bind("props.color");
    border-radius: 0.5rem;
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

}
</style>
