const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const portfolioItem = path.resolve(`./src/components/templates/PortfolioItem.tsx`);
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    console.log('result of post', result);

    const posts = result.data.allContentfulPost.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `portfolio/${post.node.slug}`,
        component: portfolioItem,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      });
    });
  });
};
