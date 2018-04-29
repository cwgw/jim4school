import React from 'react'
import styled from 'styled-components'
import { mix } from 'polished'

import theme from 'utils/theme'
import { boxShadow } from 'utils/style'
import media, { breakpoints } from 'utils/media'

const NotFoundPage = () => (
  <Container>
    <Heading>404: NOT FOUND</Heading>
    <p>This route doesn&#39;t exist.</p>
  </Container>
)

export default NotFoundPage

const Container = styled.div`
  position: relative;
  margin: 0 auto 3rem;
  maxWidth: 100%;
  width: ${breakpoints.md}px;
  padding: 2rem;

  ${media.lg`
    background-color: white;
    ${({theme}) => boxShadow(2, mix(0.5,theme.color.blue[3],'black'))}
  `}
`

const Heading = styled.h1`
  fontFamily: ${({theme}) => theme.font.family.serif};
  fontWeight: 700;
`