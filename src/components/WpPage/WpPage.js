import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mix } from 'polished'

import GatsbyImage from 'gatsby-image'

import Content from 'components/Content'
import Testimonials from 'components/Testimonials'
import PageTitle from 'components/PageTitle'
import Meta from 'components/Meta'

import { media, boxShadow } from 'styles/style'
import { breakpoints } from 'styles/theme'

const propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  featuredImage: PropTypes.object,
  testimonials: PropTypes.array,
  siteMetadata: PropTypes.object,
}

const defaultProps = {
  testimonials: []
}

function WpPage (props) {

  const {
    slug,
    title,
    content,
    featuredImage,
    testimonials,
    siteMetadata,
  } = props

  const Image = featuredImage && (
    <FeaturedImage>
      <GatsbyImage sizes={featuredImage.localFile.childImageSharp.sizes} />
    </FeaturedImage>
  )

  const Title = slug !== 'home'
    ? <PageTitle>{title}</PageTitle>
    : null

  const parsedContent = content.replace(/(wright\.char@gmail.com|charliewrightgordonwright)/gi, '')

  const Endorsements = testimonials.length > 0
    ? <Testimonials>{testimonials}</Testimonials>
    : null

  return (
    <Content
      outerWidth={Image || Endorsements ? breakpoints.lg : undefined}
      isEmpty={content.trim() === ''}
    >
      <Meta
        title={title}
        slug={slug}
        siteMetadata={siteMetadata}
        featuredImage={featuredImage}
      />
      {Title}
      {Image}
      <div dangerouslySetInnerHTML={{__html: parsedContent}} />
      {Endorsements}
    </Content>
  )
}

WpPage.defaultProps = defaultProps

WpPage.propTypes = propTypes

export default WpPage

const FeaturedImage = styled.figure`
  max-width: 100%;
  margin: -9rem auto 1rem;
  width: 50vw;

  ${media.sm`
    width: 35vw;
    margin: -10rem 2rem 1.5rem 0;
    float: left;
  `}

  ${({theme}) => {
    if (theme.outerWidth && theme.innerWidth) {
      return `
        @media (min-width: ${theme.outerWidth}px) {
          width: ${Math.floor(theme.outerWidth * 2 / 5)}px;
          margin: 1.5rem 2rem 1.5rem ${theme.innerWidth - theme.outerWidth}px;
        }
      `
    }
  }}

  ${({theme}) => boxShadow(4, mix(0.25,theme.color.blue[3],'black'))}
`

const EntryContent = styled.div`
  padding: 2rem;

  &:empty {
    padding: 0;
  }
`
