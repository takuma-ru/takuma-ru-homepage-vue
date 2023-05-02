import {
  IColorGradation,
  IColorStoreState,
} from '~/types/composables/style/colorStore'

const PRIMARY_COLORS: IColorGradation = {
  100: '#CEFCEB',
  200: '#9EF9E0',
  300: '#6CEFD6',
  400: '#46E0D0',
  500: '#12CCC9',
  600: '#0DA3AF',
  700: '#097D92',
  800: '#055A76',
  900: '#034261',
}

const SUCCESS_COLORS: IColorGradation = {
  100: '#F3FBCD',
  200: '#E5F89D',
  300: '#CBEA69',
  400: '#AED543',
  500: '#87BA10',
  600: '#6E9F0B',
  700: '#588508',
  800: '#436B05',
  900: '#345903',
}

const ERROR_COLORS: IColorGradation = {
  100: '#FFE7D3',
  200: '#FFC9A9',
  300: '#FFA57E',
  400: '#FF825D',
  500: '#FF4828',
  600: '#DB2A1D',
  700: '#B71415',
  800: '#930C18',
  900: '#7A071A',
}

const WARN_COLORS: IColorGradation = {
  100: '#FEF8CB',
  200: '#FEEE98',
  300: '#FCE265',
  400: '#FAD53E',
  500: '#F7C100',
  600: '#D4A100',
  700: '#B18200',
  800: '#8F6600',
  900: '#765100',
}

const INFO_COLORS: IColorGradation = {
  100: '#CCFEFC',
  200: '#99FDFE',
  300: '#66F0FE',
  400: '#40DFFD',
  500: '#02C2FC',
  600: '#0197D8',
  700: '#0171B5',
  800: '#005092',
  900: '#003A78',
}

const NEUTRAL_COLORS: IColorGradation = {
  100: '#FAFCFC',
  200: '#EBEFF0',
  300: '#DCE2E3',
  400: '#CED6D6',
  500: '#CED6D6',
  600: '#97A1A0',
  700: '#6F7877',
  800: '#484F4E',
  900: '#222625',
}

const LIGHT_THEME_COLORS: IColorStoreState['value']['theme'] = {
  background: NEUTRAL_COLORS[900],
  text: NEUTRAL_COLORS[200],
  subText: NEUTRAL_COLORS[300],
  relativeNeutral: NEUTRAL_COLORS,
}

const DARK_THEME_COLORS: IColorStoreState['value']['theme'] = {
  background: NEUTRAL_COLORS[200],
  text: NEUTRAL_COLORS[900],
  subText: NEUTRAL_COLORS[800],
  relativeNeutral: {
    100: NEUTRAL_COLORS[900],
    200: NEUTRAL_COLORS[800],
    300: NEUTRAL_COLORS[700],
    400: NEUTRAL_COLORS[600],
    500: NEUTRAL_COLORS[500],
    600: NEUTRAL_COLORS[400],
    700: NEUTRAL_COLORS[300],
    800: NEUTRAL_COLORS[200],
    900: NEUTRAL_COLORS[100],
  },
}

export const useColorStore = defineStore('color', {
  state: (): IColorStoreState => ({
    value: {
      primary: PRIMARY_COLORS,
      err: ERROR_COLORS,
      warn: WARN_COLORS,
      info: INFO_COLORS,
      success: SUCCESS_COLORS,
      neutral: NEUTRAL_COLORS,
      linear: {
        light:
          'linear-gradient(252.44deg, #12CCC9 0%, #BC86F2 50.52%, #FF825D 100%)',
        dark: 'linear-gradient(252.44deg, #055A76 0%, #5B2591 50.52%, #930C18 100%)',
      },
      theme: LIGHT_THEME_COLORS,
    },
  }),

  getters: {},

  actions: {
    /**
     * テーマを切り替える
     * @param mode nuxtjs/color-mode の値
     */
    toggleTheme(mode: 'dark' | 'light') {
      if (mode === 'dark') {
        return this.setDarkTheme()
      }
      this.setLightTheme()
    },

    setThemeFromColorMode() {
      const colorMode = useColorMode()

      if (colorMode.preference === 'dark') {
        return this.setDarkTheme()
      }

      return this.setLightTheme()
    },

    /**
     * ライトテーマを設定する
     */
    setLightTheme() {
      this.value.theme = LIGHT_THEME_COLORS
    },

    /**
     * ダークテーマを設定する
     */
    setDarkTheme() {
      this.value.theme = DARK_THEME_COLORS
    },
  },
})
