<template>
  <div class="layouts-top-contents">
    <div class="current-path-name">
      <NuxtLink
        to="/"
        class="top-link"
      >
        takumaru.dev
      </NuxtLink>
      {{ route.fullPath === 'index' ? '' : route.fullPath }}
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const route = useRoute()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const path = computed(() => {
  if (route.fullPath === 'index') return ''

  if (route.query) {
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.layouts-top-contents {
  .current-path-name {
    .top-link {
      color: v-bind('colorStore.value.theme.text');
      text-decoration: none;
    }
  }
}
</style>
