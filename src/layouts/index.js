import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

injectGlobal`
  ${normalize()}
`

import Wrap from 'components/Wrap'
import Header from 'components/Header'

require('styles/style.scss')

const propTypes = {
  children: PropTypes.func,
}

function Template (props) {

  return (
    <Wrap>
      <Helmet>
        <title></title>
        <meta name="description" content="Sample" />
        <meta name="keywords" content="sample, something" />
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,600|Lora:700" rel="stylesheet" />
      </Helmet>
      <Header
        navItems={props.data.allWordpressPage.edges}
      />
      {props.children()}
    </Wrap>
  )
}

Template.propTypes = propTypes

export default Template

export const pageQuery = graphql`
  query pageList {
    allWordpressPage {
      edges {
        node {
          slug
          title
          menu_order
        }
      }
    }
  }
`
