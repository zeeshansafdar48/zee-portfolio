import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Container from 'Atoms/Container';
import Post from 'Molecules/Post';
import SEO from 'Molecules/Seo';

interface IProps {
  data: {
    allContentfulPost: {
      edges: {
        node: {
          title: string;
          slug: string;
          image: {
            fluid: any;
          };
          type: string;
        };
      }[];
    };
  };
}

const Portfolio = ({ data }: IProps) => {
  const posts = data.allContentfulPost.edges;

  return (
    <>
      <SEO title="Portfolio" />
      <Container>
        <Grid>
          {posts.map((post) => {
            const { node } = post;
            return (
              <Post
                data={{
                  title: node.title,
                  slug: node.slug,
                  image: node.image,
                  type: node.type,
                }}
                key={node.slug}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Portfolio;

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
    allContentfulPost {
      edges {
        node {
          title
          slug
          client
          type
          image: featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
