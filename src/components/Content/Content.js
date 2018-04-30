import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import media, { breakpoints } from 'utils/media'
import { boxShadow } from 'utils/style'
import { mix } from 'polished'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  outerWidth: PropTypes.number,
  innerWidth: PropTypes.number,
  isEmpty: PropTypes.boolean,
} 

const defaultProps = {
  outerWidth: breakpoints.md,
  innerWidth: breakpoints.md,
  isEmpty: false,
} 

function Content (props) {

  const { children, innerWidth, outerWidth, isEmpty } = props

  return (
    <ThemeProvider theme={(theme) => ({
      outerWidth: outerWidth,
      innerWidth: innerWidth,
      ...theme
    })} >
      <Outer>
        <Inner isEmpty={isEmpty} >
          {children}
        </Inner>
      </Outer>
    </ThemeProvider>
  )
}

Content.propTypes = propTypes

Content.defaultProps = defaultProps

export default Content

const Outer = styled.div`
  position: relative;
  width: ${({theme}) => theme.outerWidth}px;
  max-width: 100%;
  margin: 0 auto 3rem;
`

const Inner = styled.div`
  max-width: 100%;
  margin-left: 0;
  padding: 2rem 1rem;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  ${media.lg`
    padding: 2rem;
  `}

  ${({theme: {outerWidth, innerWidth}}) => `
    @media (min-width: ${outerWidth}px) {
      width: ${innerWidth}px;
      margin-left: ${outerWidth - innerWidth}px;
    }
  `}

  ${({theme, isEmpty}) => {
    if (isEmpty) {
      return media.lg`
        ${boxShadow(1, mix(0.5,theme.color.blue[3],'black'))}
        background-color: ${mix(0.5,theme.color.blue[0],'white')};
      `
    } else {
      return media.lg`
        ${boxShadow(2, mix(0.5,theme.color.blue[3],'black'))}
        background-color: white;
      `      
    }
  }}
`
