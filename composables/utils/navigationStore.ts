import { INavigationStoreState } from '~/types/composables/utils/navigationStore'

export const useNavigationStore = defineStore('navigation', {
  state: (): INavigationStoreState => ({
    isOpen: false,
  }),

  getters: {},

  actions: {},
})
