import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mix } from 'polished'

import { boxShadow } from 'styles/style'

const propTypes = {
  children: PropTypes.array.isRequired
}

const defaultProps = {}

function Testimonials (props) {

  const Children = props.children.map(({slug, title, content}) => (
    <Testimonial key={slug} >
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </Testimonial>
  ))

  return (
    <div>
      {Children}
    </div>
  )
}

Testimonials.defaultProps = defaultProps

Testimonials.propTypes = propTypes

export default Testimonials

const Testimonial = styled.section`
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  background: white;

  ${({theme}) => {
    if (theme.outerWidth && theme.innerWidth) {
      return `
        @media (min-width: ${theme.outerWidth}px) {
          width: calc(${theme.outerWidth}px - 4rem);
          max-width: none;
          margin: 0 0 1.5rem ${theme.innerWidth - theme.outerWidth}px;
        }
      `
    }
  }}

  ${({theme}) => boxShadow(4, mix(0.25,theme.color.blue[3],'black'))}
`