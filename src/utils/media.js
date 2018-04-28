import { css } from 'styled-components'

const breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const media = Object.keys(breakpoint).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoint[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media

export {
  breakpoint,
  media
}