<template>
  <div
    v-if="navigationStore.isOpen"
    class="layouts-navigation-bar"
  >
    <div class="links">
      <Button
        :color="colorStore.value.theme.text"
        to="/"
      >
        Index
      </Button>
      <Button
        :color="colorStore.value.theme.text"
        to="/about"
      >
        About
      </Button>
      <Button
        :color="colorStore.value.theme.text"
        to="/works"
      >
        Works
      </Button>
      <Button
        :color="colorStore.value.theme.text"
        to="contact"
      >
        Contact
      </Button>
    </div>
    <div class="color-mode-button">
      <ColorModeButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const navigationStore = useNavigationStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.layouts-navigation-bar {
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: v-bind('colorStore.value.theme.text');
  color: v-bind('colorStore.value.theme.background');
  box-shadow: 0px 8px 40px rgba(34, 38, 37, 0.15);

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .color-mode-button {
  }
}
</style>
