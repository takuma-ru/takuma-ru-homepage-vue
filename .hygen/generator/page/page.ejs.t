---
to: pages/<%= h.changeCase.camel(pageName) %>.vue
---

<template>
  <div
    id="<%= pageName  %>"
    :class="displayStatusStore.displaySize"
  >
    <%= h.changeCase.camel(pageName)  %>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: '<%= title %>'
})
</script>

<style lang="scss" scoped>
#<%= pageName  %> {

  &.pc {

  }

  &.lp {

  }

  &.sm {

  }
}
</style>
