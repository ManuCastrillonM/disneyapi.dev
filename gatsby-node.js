exports.createPages = async ({ actions, graphql, reporter }) => {
  console.log("ONCREATEPAGES");

  const { createPage } = actions

  const pageTemplate = require.resolve(`./src/templates/markdownTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    console.log("MARKDOWN PAGES ERROR: ", result.errors );
    return
  }

  console.log("MARKDOWN PAGES: ", result.data.allMarkdownRemark.edges );


  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: pageTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}