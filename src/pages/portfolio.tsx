import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PostFilter from 'Atoms/PostFilter';

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
  const [filter, setFilter] = useState('all');
  const [posts, setPosts] = useState(data.allContentfulPost.edges);

  useEffect(() => {
    if (filter === 'all') {
      setPosts(data.allContentfulPost.edges);
    } else {
      setPosts(
        data.allContentfulPost.edges.filter(
          (post: any) => post.node.type.toLowerCase() === filter.toLowerCase()
        )
      );
    }
  }, [filter])

  return (
    <>
      <SEO title="Portfolio" />
      <Container setHeight={'70vh'}>
        <ScreenOnly>
          <Filters>
            <div data-testid="filters">
              {['all', 'web development', 'web design'].map((skill) => (
                <PostFilter key={skill} name={skill} setFilter={setFilter} currentFilter={filter} />
              ))}
            </div>
          </Filters>
        </ScreenOnly>
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

const ScreenOnly = styled.div`
  @media print {
    display: none;
  }
`;

const Filters = styled.div`
  text-align: center;
  margin: 1rem 0;
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
