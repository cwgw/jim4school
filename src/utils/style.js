import { css } from 'styled-components'
import { parseToRgb } from 'polished'

import theme from 'utils/theme'

const container = (size = 'sm') => (`
  width: ${theme.container[size]};
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${theme.padding.x};
`)

const boxShadow = (level = 3, color = '#000') => {
  const parsedColor = parseToRgb(color)
  const c = parsedColor.red+','+parsedColor.green+','+parsedColor.blue
  const shadows = [
    `0 0px 0px rgba(${c},0), 0 1px 2px rgba(${c},0)`,
    `0 1px 3px rgba(${c},0.12), 0 1px 2px rgba(${c},0.24)`,
    `0 3px 6px rgba(${c},0.16), 0 3px 6px rgba(${c},0.23)`,
    `0 10px 20px rgba(${c},0.19), 0 6px 6px rgba(${c},0.23)`,
    `0 14px 28px rgba(${c},0.25), 0 10px 10px rgba(${c},0.22)`,
    `0 19px 38px rgba(${c},0.30), 0 15px 12px rgba(${c},0.22)`
  ]

  return `box-shadow: ${shadows[level]};`
}

export {
  container,
  boxShadow,
}