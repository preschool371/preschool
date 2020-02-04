const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              cover
              album
              templateKey
              date(formatString: "DD MMMM YYYY", locale: "pl")
            }
          }
          }
        }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postsAndPages = result.data.allMarkdownRemark.edges

    // Post pages:
    let posts = []
    let albums = []
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`and all albums into `albums`
    postsAndPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { 'templateKey': 'article-page' })) {
        posts = posts.concat(edge)
      }
      if (_.isMatch(edge.node.frontmatter, { 'templateKey': 'album-page' })) {
        albums = albums.concat(edge)
      }
    })

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/posts-page.js',
      pageLength: 8, // This is optional and defaults to 10 if not used
      pathPrefix: 'aktualnosci', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    createPaginatedPages({
      edges: albums,
      createPage: createPage,
      pageTemplate: 'src/templates/gallery-page.js',
      pageLength: 15, // This is optional and defaults to 10 if not used
      pathPrefix: 'galeria', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    postsAndPages.forEach(edge => {
      const id = edge.node.id
      // remove / from slug to get the value comparable to relativedirectory's value
      createPage({
        path: `${edge.node.fields.slug}`,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

