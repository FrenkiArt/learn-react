/* exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
} */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query queryPosts {
      allMarkdownRemark(filter: {}) {
        nodes {
          frontmatter {
            category
            url
          }
          id
        }
      }
    }
  `)

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  data.allMarkdownRemark.nodes.forEach(node => {
    const { url, category } = node.frontmatter
    const id = node.id

    createPage({
      path: `/${category}/${url}`,
      component: require.resolve("./src/templates/single-post.js"),
      context: { url, id },
      defer: true,
    })
  })
}
