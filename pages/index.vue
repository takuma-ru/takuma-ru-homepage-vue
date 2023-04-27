<template>
  <div id="index">
    <span class="my-name">
      <span class="outline">I'm</span>
      <span>takumaru</span>
      <span class="outline">.</span>
    </span>
    <Button
      icon="start"
      fit-content
      to="/about"
      class="next-page-button"
    >
      Next... How is Me ?
    </Button>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#index {
  display: grid;
  grid-template-rows: 1fr auto;

  .my-name {
    align-self: center;
    justify-self: center;

    display: flex;
    flex-flow: row wrap;
    gap: 24px;

    font-size: 96px;
    font-weight: bold;

    @include mq-mixin(sp) {

      font-size: 48px;
      gap: 12px;
    }
  }

  .next-page-button {
    justify-self: end;
  }
}
</style>
