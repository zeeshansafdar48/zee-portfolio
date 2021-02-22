import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Container from 'Atoms/Container';
import Post from 'Molecules/Post';
import SEO from 'Molecules/Seo';

// interface IProps {
//   data: {
//     allContentfulItem: {
//       edges: {
//         node: {
//           title: string;
//           slug: string;
//           image: {
//             fluid: any;
//           };
//           type: string;
//         };
//       }[];
//     };
//   };
// }

const Portfolio = ({ data }: any) => {
  // const posts = data.allContentfulItem.edges;
  const posts = data.portfolio.posts;

  return (
    <>
      <SEO title="Portfolio" />
      <Container>
        <h2 data-testid="headline">Portfolio</h2>
        <Grid>
          {posts.map((post) => {
            console.log('post', post);
            return (
              <Post
                data={{
                  title: post.title,
                  slug: post.slug,
                  image: post.image,
                  type: post.type,
                }}
                // key={post.slug}
              />
            );
          })}
        </Grid>
        <Centered>
          This is a small selection of projects I worked on.
          <br />
        </Centered>
      </Container>
    </>
  );
};

export default Portfolio;

const Centered = styled.p`
  margin-top: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
`;
