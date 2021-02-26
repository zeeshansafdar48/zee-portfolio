import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

interface IProps {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: string[] | undefined;
  title: string;
}

const SeoHelmet = ({ description, lang, meta, title, keywords }: IProps) => {
  let titleTemplate = `Zeeshan Safdar | Web Developer ${title !== 'Home' ? ' » %s' : ''}`;

  switch (title) {
    case 'Home':
      titleTemplate = 'Zeeshan Safdar | Web Developer ';
      break;
    case 'About':
      titleTemplate = 'About Zeeshan Safdar | Web Developer';
      break;
    case 'Contact':
      titleTemplate = 'Reach out to Zeeshan Safdar | Web Developer';
      break;
    case 'Portfolio':
      titleTemplate = 'Portfolio - Work samples of Zeeshan Safdar (Web Developer)';
      break;
    default:
      titleTemplate = `Zeeshan Safdar | Web Developer ${title !== 'Home' ? ' » %s' : ''}`;
  }

  const metaDescription =
    description ||
    'Front-End Software Engineer with a focus on JavaScript and React.js. I have more than 10 years experience working in software engineering.';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: `Zeeshan Safdar`,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://herper.io/`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Zeeshan Safdar',
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

SeoHelmet.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

SeoHelmet.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SeoHelmet;
