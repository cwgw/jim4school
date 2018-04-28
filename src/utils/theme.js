const colors = {
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

const spacers = {
  x: '1rem',
  y: '0.75rem',
  lg: {
    x: '1.5rem',
    y: '1.5rem'
  },
  xl: {
    x: '1.5rem',
    y: '3rem',
  },
  sm: {
    x: '0.5rem',
    y: '0.5rem',
  },
}

const font = {
  family: {
    serif: `"Lora", "Georgia", "Palatino", serif`,
    sans: `"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  }
}

const padding = {
  x: spacers.x,
  y: spacers.y,
  sm: {
    x: spacers.sm.x,
    y: spacers.sm.y,
  },
  lg: {
    x: spacers.xl.x,
    y: '3rem',
  }
}

const spacing = {
  x: spacers.x,
  y: spacers.lg.y,
  lg: {
    x: spacers.xl.x,
    y: '6rem',
  }
}

const containers = {
  sm: '768px',
  md: '992px',
  lg: '992px',
  xl: '1200px',
}

const links = {
  color: {
    default: colors.primary,
    hover: colors.primary,
    active: colors.secondary,
    focus: colors.secondary,
  },
  decoration: 'underline'
}

export default {
  color: colors,
  font: font,
  spacer: spacers,
  padding: padding,
  spacing: spacing,
  container: containers,
  link: links,
}
