/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators

//   if (/wordpressPage/.test(node.internal.type) && typeof node.slug !== 'undefined') {

//   }
// }

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const pageTemplate = path.resolve('src/templates/page.js')

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`{
        allWordpressPage {
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

        result.data.allWordpressPage.edges.forEach(({node}) => {
          const slug = node.slug === 'home' ? '/' : node.slug

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug: node.slug,
            },
          })
        })

        return
      })
    )
  })
}
