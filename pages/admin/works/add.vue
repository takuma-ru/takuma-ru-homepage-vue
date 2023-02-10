<template>
  <div id="works-add">
    <h1>
      Add my work to works
    </h1>
    <div class="contents">
      <TextField
        v-model:model-value="title"
        icon="title"
        label-text="プロダクト名"
      />
      <TextField
        v-model:model-value="description"
        icon="description"
        label-text="詳細"
      />
      <div class="buttons">
        <Button
          icon="chevron_left"
          color="transparent"
          @click="navigateTo('/admin')"
        >
          取り消す
        </Button>
        <Button
          icon="send"
          @click="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const description = ref('')
const developmentPeriodStart = ref('')
const developmentPeriodEnd = ref('')
const developmentType = ref('')
const imgs = ref('')
const links = ref('')
const title = ref('')
const usedTechniques = ref('')

/* -- function -- */
const submit = () => {

}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#works-add {
  display: grid;
  align-items: center;

  .contents {
    display: flex;
    flex-flow: column;
    row-gap: 0.25rem;

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
