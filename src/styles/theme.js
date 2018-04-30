export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const colors = {
  primary: '#2962ff',
  secondary: '#ffab91',
  blue: [
    '#e3f2fd',
    '#bbdefb',
    '#1e88e5',
    '#2962ff',
    '#0d47a1'
  ]
}

export const fonts = {
  family: {
    serif: `"Lora", "Georgia", "Palatino", serif`,
    sans: `"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  }
}

export const links = {
  color: {
    default: colors.primary,
    hover: colors.primary,
    active: colors.secondary,
    focus: colors.secondary,
  },
  decoration: 'underline'
}

export default {
  breakpoint: breakpoints,
  color: colors,
  font: fonts,
  link: links,
}
