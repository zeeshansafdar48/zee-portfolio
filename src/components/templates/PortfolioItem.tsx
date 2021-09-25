import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';
import Button from 'Atoms/Button';

interface IProps {
  data: {
    contentfulPost: {
      title: string;
      description: string;
      image: {
        fluid: any;
      };
      type: string;
      content: {
        json: any;
      };
      technologies: string[];
      url: string;
      isUrlExist: boolean;
    };
  };
  pageContext: {
    previous: {
      slug: string;
      title: string;
    } | null;
    next: {
      slug: string;
      title: string;
    } | null;
  };
}

const PortfolioItem = ({ data, pageContext }: IProps) => {
  const {
    title,
    description,
    image,
    type,
    content: { json: content },
    technologies,
    url,
    isUrlExist,
  } = data.contentfulPost;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO title={title} description={description} />
      <Image fluid={image.fluid} alt={title} style={{ maxWidth: '90%', margin: '0 auto' }} />
      <Container>
        <h2 data-testid="projectTitle">{title}</h2>
        <h3 data-testid="projectType">{type}</h3>
        <div data-testid="projectBody">{documentToReactComponents(content)}</div>
        <p data-testid="projectTechnologies">
          <strong>Technologies used:</strong> {technologies.join(', ')}
        </p>
        {isUrlExist && (
          <Button href={url} target="_blank" rel="noopener noreferrer" data-testid="projectLink">
            Visit project
          </Button>
        )}
        <Pagination>
          {previous && (
            <li data-testid="previous">
              <Link to={`/portfolio/${previous.slug}/`} rel="prev">
                &laquo; {previous.title}
              </Link>
            </li>
          )}
          {next && (
            <li data-testid="next">
              <Link to={`/portfolio/${next.slug}/`} rel="next">
                {next.title} &raquo;
              </Link>
            </li>
          )}
        </Pagination>
      </Container>
    </>
  );
};

export default PortfolioItem;

const Image = styled(Img)`
  margin-top: 2rem;
`;

const Pagination = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    a {
      text-decoration: none;
      transition: 0.2s;
      &::after {
        content: '';
        display: block;
        height: 5px;
        width: 0%;
        margin-top: -6px;
        background: #e94e1b;
        transition: all 0.2s ease 0s;
      }
      &:hover {
        border-bottom: none;
        &::after {
          width: 110%;
        }
      }
    }
  }
`;

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      client
      type
      technologies
      url
      isUrlExist
      description
      content {
        json
      }
      image {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
