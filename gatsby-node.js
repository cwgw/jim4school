/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const pageTemplate = path.resolve('src/templates/page.js')
  const additionalQuery = `allWordpressWpJetpackTestimonial {
    edges {
      node {
        title
        slug
        content
      }
    }
  }`

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`{
        pages: allWordpressPage {
          edges {
            node {
              slug
            }
          }
        }
      }`)
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          console.log(result)
          reject(result.errors)
        }

        result.data.pages.edges.forEach(({node}) => {
          const slug = node.slug === 'home' ? '/' : node.slug

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug: node.slug,
              testimonials: node.slug === 'endorsements',
            },
          })
        })

        return
      })
    )
  })
}
