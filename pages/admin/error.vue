<template>
  <div class="error">
    <div class="title">
      <h1>
        <span>
          Error Code
        </span>
        <HighLight :border-color="colorStore.color.red.default">
          403
        </HighLight>
      </h1>
      <p>Server could not verify authorization to view this page</p>
      <div class="signin-methods">
        <h3>SignIn method</h3>
        <SignInButton provider="github.com" style="margin-bottom: 0.5rem;" />
        <SignInButton provider="google.com" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.error {
  display: grid;
  align-items: center;

  .signin-methods {
    display: flex;
    flex-flow: column;
  }
}
</style>
