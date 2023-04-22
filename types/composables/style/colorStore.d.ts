export interface IColorStoreState {
  value: {
    primary: ColorGradationType
    err: ColorGradationType
    warn: ColorGradationType
    info: ColorGradationType
    success: ColorGradationType
    neutral: ColorGradationType
    linear: {
      [key: string]: string
    }
    theme: {
      background: string
      text: string
      subText: string
      relativeNeutral: ColorGradationType
    }
  }
}

export interface IColorGradation {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}