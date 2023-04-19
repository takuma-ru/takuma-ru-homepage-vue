import { IColorStoreState } from '~/types/composables/style/colorStore'

export const useColorStore = defineStore('color', {
  state: (): IColorStoreState => ({
    value: []
  }),

  getters: {},

  actions: {}
})
