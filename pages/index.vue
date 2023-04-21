<template>
  <div id="index">
    <span class="my-name">
      <span class="outline">I'm</span>
      <span>takumaru</span>
      <span class="outline">.</span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.my-name {
  position: absolute;
  display: flex;
  gap: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 96px;
  font-weight: bold;

  .outline {
    color: transparent;
    text-stroke: 4px #000;
    -webkit-text-stroke: 4px #000;
  }
}
</style>
