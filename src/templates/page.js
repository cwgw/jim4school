import React from 'react'

import WpPage from 'components/WpPage'

function Page ({ data: { page, testimonials: rawTestimonials }, ...props}) {

  const testimonials = rawTestimonials && rawTestimonials.edges.map(({node}) => ({...node}))

  return (
    <WpPage
      testimonials={testimonials}
      {...page}
      {...props}
    />
  )
}

export default Page

export const pageQuery = graphql`
  query page($slug: String!, $testimonials: Boolean!) {
    page: wordpressPage(slug: {eq: $slug}) {
      slug
      title
      content
      featuredImage: featured_media {
        localFile {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
      }
    }
    testimonials: allWordpressWpJetpackTestimonial @include(if: $testimonials) {
      edges {
        node {
          slug
          title
          content
        }
      }
    }
  }
`
