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
        <title>Jim Swaim for Brookline School Cmmittee</title>
        <meta name="description" content="Jim Swaim taught at Devotion School in Brookline and went on to become Vice Principal at Pierce School, Principal of Lawrence School, and Principal of Cabot School in Newton." />
        <meta name="keywords" content="Jim, Swaim, Brookline, School, Committee" />
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
