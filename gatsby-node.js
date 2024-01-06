exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageTemplate = require.resolve(`./src/templates/markdownTemplate.jsx`)

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          body
          frontmatter {
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pages = result.data.allMdx.nodes

  pages.forEach((page) => {
    createPage({
      path: page.frontmatter.slug,
      component: `${pageTemplate}?__contentFilePath=${page.internal.contentFilePath}`
    })
  })
}
