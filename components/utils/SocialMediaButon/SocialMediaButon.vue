<template>
  <Button
    color="transparent"
    class="socialMediaButon"
    :style="{
      width: 'fit-content'
    }"
  >
    <Twitter v-if="mediaName === 'twitter'" />
    <Instagram v-if="mediaName === 'instagram'" />
    <GitHub v-if="mediaName === 'github'" />
    <hr>
    <p>
      @{{ uid }}
    </p>
  </Button>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ISocialMediaButonProps {
  mediaName: 'twitter' | 'github' | 'instagram' | 'wantedly' | 'bitbucket';
  uid: string
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
withDefaults(defineProps<ISocialMediaButonProps>(), {
  mediaName: 'twitter'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.socialMediaButon {

  hr {
    display: inline-block;

    margin: 0px 0.5rem;

    border: none;
    border-left: solid 1px v-bind("colorStore.color.theme.subText");
    height: 100%;
  }

  p {
    line-height: 24px;
  }
}
</style>
