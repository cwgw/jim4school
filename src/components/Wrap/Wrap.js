import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { mix } from 'polished'

import theme from 'utils/theme'
import { media } from 'utils/media'

function Wrap (props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrap>
        {props.children}
      </StyledWrap>
    </ThemeProvider>
  )
}

const StyledWrap = styled.div`
  border-bottom: 1px solid transparent;
  min-height: 100vh;
  background: white;

  ${({theme}) => media.lg`
    background: ${mix(0.5,theme.color.blue[0],'white')};
  `}
`

export default Wrap