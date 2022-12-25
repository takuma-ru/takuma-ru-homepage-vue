<template>
  <div
    id="works"
    :class="displayStatusStore.displaySize"
  >
    <Button
      fit-content
      icon="chevron_left"
      color="transparent"
      :style="{
        marginBottom: '1rem'
      }"
      @click="navigateTo('/works')"
    >
      Back to works page
    </Button>
    <div class="imgs">
      <img
        :src="productData.imgSrc[0]"
        alt="Product feature graphics"
      >
    </div>
    <div class="detail">
      <span
        class="development-type"
        v-text="productData.developmentType"
      />
      <h1 class="product-name">
        This product is
        <HighLight>
          {{ productData.title }}
        </HighLight>
      </h1>
      <p
        class="description"
        v-text="productData.description"
      />
      <div class="other-data">
        <div class="techniques">
          <p class="title">
            Used techniques
          </p>
          <div class="techniques-logo">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg">
          </div>
        </div>
        <div class="period">
          <p class="title">
            Development period
          </p>
          <span>
            {{ startDate }} - {{ endDate }}
          </span>
        </div>
        <div class="links">
          <p class="title">
            Links
          </p>
          <div class="buttons">
            <Button
              v-for="linkData in productData.links"
              :key="linkData.name"
              icon="link"
              :color="colorStore.color.theme.text"
              :to="linkData.url"
            >
              {{ linkData.name }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const productDataStore = useProductDataStore()
const colorStore = useColorStore()

/* -- props, emit -- */
const route = useRoute()

/* -- variable(ref, reactive, computed) -- */
const productData = computed(() => {
  return productDataStore.searchProductData(route.params.id)
})

const startDate = computed(() => {
  const startDate = productData.value.developmentPeriod.start.toDate()

  return startDate.getFullYear() + '.' + (startDate.getMonth() + 1)
})

const endDate = computed(() => {
  const endDate = productData.value.developmentPeriod.end

  if (endDate === 'now') {
    return new Date().getFullYear() + '.' + (new Date().getMonth() + 1)
  } else {
    return endDate.toDate().getFullYear() + '.' + (endDate.toDate().getMonth() + 1)
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Works'
})
</script>

<style lang="scss" scoped>
#works {
  display: grid;
  grid-template-rows: auto 1fr 1fr;

  position: relative;
  min-height: 100%;

  .imgs {
    position: relative;
    width: 100%;

    border-radius: 1.25rem 1.25rem 0.5rem 0.5rem;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      height: auto;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
    }

  }

  .detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content auto;

    padding: 1rem 0px;

    .development-type {
      grid-column: 1/3;
      grid-row: 1;

      text-align: end;
      color: v-bind("colorStore.color.theme.subText");
    }

    .product-name {
      grid-column: 1/3;
      grid-row: 2;

      margin: 0px;
      margin-bottom: 1rem;

      font-size: 1.75rem;
      color: v-bind("colorStore.color.theme.subText");

      .highLight {
        font-size: 2.75rem;
        line-height: 4.5rem;

        color: v-bind("colorStore.color.theme.text");
      }
    }

    .description {
      grid-column: 1;
      grid-row: 3;

      margin-top: 0px;
      margin-right: 1rem;
    }

    .other-data{
      display: grid;
      grid-template-columns: 1fr 1fr;

      .techniques, .period, .links {
        display: flex;
        flex-flow: column;

        margin-bottom: 1rem;

        .title {
          margin-top: 0px;
          margin-bottom: 0.5rem;

          font-weight: 600;
          color: v-bind("colorStore.color.theme.subText");
        }
      }

      .techniques {
        .techniques-logo {
          display: flex;

          img {
            height: 32px;
          }
        }
      }

      .period {
        span {
          font-weight: 600;
        }
      }

      .links {
        grid-column: 1/3;

        .buttons {
          display: flex;
          flex-flow: column;

          #Button {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }

  &.pc {

  }

  &.lp {

  }

  &.sm {
    grid-template-rows: auto 0.5fr 1fr;

    .detail {
      grid-template-columns: 1fr;
      grid-template-rows: min-content min-content min-content min-content;

      .description {
        grid-column: 1;
        margin-right: 0px;
      }

      .other-data {
        grid-column: 1;
        grid-row: 4;
      }
    }
  }
}
</style>
