const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const portfolioItem = path.resolve(
    `./src/components/templates/PortfolioItem.tsx`
  );
  return graphql(
    `
      {
        portfolio {
          posts {
            id
            title
            slug
            type
            image {
              id
              url
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.portfolio.posts;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `portfolio/${post.slug}`,
        component: portfolioItem,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      });
    });
  });
};
