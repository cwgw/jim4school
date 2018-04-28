import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

require('styles/style.scss')
import 'styles/globalStyle'

import Wrap from 'components/Wrap'
import Header from 'components/Header'

const propTypes = {
  children: PropTypes.func,
}

function Template (props) {
  const { siteMetadata } = props.data.site
  const { src: image } = props.data.ogimg.childImageSharp.sizes
  const { location } = props

  return (
    <Wrap>
      <Header
        navItems={props.data.allWordpressPage.edges}
      />
      {props.children({
        history: props.history,
        location: props.location,
        siteMetadata: {
          image: image,
          ...siteMetadata,
        },
      })}
    </Wrap>
  )
}

Template.propTypes = propTypes

export default Template

export const pageQuery = graphql`
  query pageList {
    site {
      siteMetadata {
        title
        root
      }
    }
    ogimg: file(relativePath: {eq: "images/ogimg.jpg"}) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
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
