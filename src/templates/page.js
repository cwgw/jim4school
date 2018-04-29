import React from 'react'
import Helmet from 'react-helmet'
import GatsbyImage from 'gatsby-image'
import styled, { ThemeProvider } from 'styled-components'

import { container, boxShadow } from 'utils/style'
import theme from 'utils/theme'
import media from 'utils/media'
import { mix } from 'polished'

import Meta from 'components/Meta'

// import 'styles/wp-page.scss'

const defaultProps = {
  containerWidth: 992,
  contentWidth: 768,
}

function Page (props) {

  const { content, title, slug, featured_media } = props.data.wordpressPage
  const { containerWidth, contentWidth, siteMetadata } = props

  /**
   * search and replace my user info because there doesn't appear to be away
   * to prevent default value insertion by jetpack (when using wpcom)
   * @see  https://github.com/Automattic/jetpack/blob/master/modules/contact-form/grunion-contact-form.php#L2591
   */
  const parsedContent = content.replace(/(wright\.char@gmail.com|charliewrightgordonwright)/gi, '')

  const Title = slug !== 'home' ? <PageTitle>{title}</PageTitle> : null

  let Image

  if (featured_media) {
    const sizes = featured_media.localFile.childImageSharp.sizes
    Image = (
      <FeaturedImage>
        <GatsbyImage sizes={sizes} />
      </FeaturedImage>
    )
  }

  return (
    <ThemeProvider theme={(theme) => ({
      outerWidth: containerWidth,
      innerWidth: contentWidth,
      ...theme
    })} >
      <Container offset={!!Image} >
        <Meta
          title={title}
          slug={slug}
          siteMetadata={siteMetadata}
          featuredImage={featured_media}
        />
        <Content offset={!!Image} >
          {Title}
          {Image}
          <EntryContent dangerouslySetInnerHTML={{__html: parsedContent}} />
        </Content>
      </Container>
    </ThemeProvider>
  )
}

Page.defaultProps = defaultProps

export default Page

export const pageQuery = graphql`
  query singlePage($slug: String!) {
    wordpressPage(slug: {eq: $slug}) {
      slug
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export const Container = styled.div`
  position: relative;
  margin: 0 auto 3rem;
  max-width: 100%;

  ${({theme, offset}) => {
    if (offset) {
      return `width: ${theme.outerWidth}px;`
    } else {
      return `width: ${theme.innerWidth}px;`
    }
  }}
`

const FeaturedImage = styled.figure`
  max-width: 100%;
  margin: -9rem auto 1rem;
  width: 50vw;

  ${media.sm`
    width: 35vw;
    margin: -10rem 2rem 1.5rem;
    float: left;
  `}

  ${({theme}) => `
    @media (min-width: ${theme.outerWidth}px) {
      width: ${Math.floor(theme.outerWidth * 2 / 5)}px;
      margin: 1.5rem 2rem 1.5rem ${theme.innerWidth - theme.outerWidth}px;
    }
  `}

  ${boxShadow(4, mix(0.25,theme.color.blue[3],'black'))}
`

export const Content = styled.article`
  max-width: 100%;
  margin-left: 0;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  ${({theme}) => media.lg`
    ${boxShadow(2, mix(0.5,theme.color.blue[3],'black'))}
    background-color: white;
  `}

  ${({theme, offset}) => offset && `
    @media (min-width: ${theme.outerWidth}px) {
      width: ${theme.innerWidth}px;
      margin-left: ${theme.outerWidth - theme.innerWidth}px;
    }
  `}
`

const PageTitle = styled.h1`
  font-family: ${theme.font.family.serif};
  font-weight: 700;
  padding: 0 2rem;
`

const EntryContent = styled.div`
  padding: 2rem;
`
