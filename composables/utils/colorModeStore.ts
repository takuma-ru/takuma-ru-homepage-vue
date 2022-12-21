type ColorModeType = 'light' | 'dark'

export const useColorModeStore = defineStore('colorMode', () => {
  const colorstore = useColorStore()

  /* -- state -- */
  const colorMode = useState<ColorModeType>('colorMode', () => 'dark')

  /* -- actions -- */
  const setLight = () => {
    colorMode.value = 'light'
    localStorage.setItem('colorMode', colorMode.value)
  }

  const setDark = () => {
    colorMode.value = 'dark'
    localStorage.setItem('colorMode', colorMode.value)
  }

  const switchMode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('colorMode', colorMode.value)
  }

  const setSytemMode = () => {
    const isDarkMode = usePreferredDark()

    if (isDarkMode.value) {
      colorMode.value = 'dark'
      colorstore.setDarkTheme()
    } else {
      colorMode.value = 'light'
      colorstore.setLightTheme()
    }
  }

  watch(colorMode, (newVal) => {
    if (newVal === 'dark') {
      colorstore.setDarkTheme()
    } else {
      colorstore.setLightTheme()
    }
  })

  return {
    colorMode: readonly(colorMode),
    setLight,
    setDark,
    switchMode,
    setSytemMode
  }
})
