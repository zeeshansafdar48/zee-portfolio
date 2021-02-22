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
  let titleTemplate = `Zeeshan Safdar | Web Developer ${
    title !== 'Home' ? ' » %s' : ''
  }`;

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
      titleTemplate =
        'Portfolio - Work samples of Zeeshan Safdar (Web Developer)';
      break;
    default:
      titleTemplate = `Zeeshan Safdar | Web Developer ${
        title !== 'Home' ? ' » %s' : ''
      }`;
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
          name: `og:image`,
          content: `https://res.cloudinary.com/jacobherper/image/upload/c_fill,g_north,h_1080,w_1920/v1587315694/herper-io.png`,
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
          name: `twitter:image`,
          content: `https://res.cloudinary.com/jacobherper/image/upload/c_fill,g_north,h_1080,w_1920/v1587315694/herper-io.png`,
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
      script={[
        {
          type: `application/ld+json`,
          innerHTML: `{"@context":"http://schema.org","@type":"WebSite","name":"herper.io","alternateName":"Zeeshan Safdar","url":"https://herper.io/","description":"Front-End Software Engineer with a focus on JavaScript and React.js. I have more than 10 years experience working in software engineering.","image":"https://res.cloudinary.com/jacobherper/image/upload/c_fill,g_north,h_1080,w_1920/v1587315694/herper-io.png"}`,
        },
        {
          type: `application/ld+json`,
          innerHTML: `{"@context":"http://schema.org","@type":"Person","image":"https://res.cloudinary.com/jacobherper/image/upload/v1587315576/jacob_herper.jpg","name":"Zeeshan Safdar","alternateName":"JakeHerp","url":"https://herper.io/","jobTitle":["Front-End Engineer","Web Developer","Frontend Engineer", "Front-End Developer"],"hasOccupation":{"@type":"Occupation","name":"Senior Front-End Engineer","occupationLocation":{"@type":"City","name":"London"},"estimatedSalary":[{"@type":"MonetaryAmountDistribution","name":"base","currency":"GBP","unitText":"HOUR","percentile10":"74","percentile25":"80","median":"90","percentile75":"100","percentile90":"106"}],"description":"Develops web applications and websites using JavaScript, React and HTML5.","skills":"HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce","alternateName":["Frontend Developer","Full Stack Developer","Frontend Engineer"],"responsibilities":["App Development","Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Frontend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/jacobherper","http://twitter.com/jakeherp","https://github.com/jakeherp","https://www.facebook.com/jakeherp","https://instagram.com/jakeherp"],"brand":[{"@type":"Brand","name":"Software Engineer","alternateName":"Front-End Engineer"},{"@type":"Brand","name":"JakeHerp","alternateName":"Zeeshan Safdar"}],"memberOf":[{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency"},{"@type":"Organization","url":"https://www.dennis.co.uk/","name":"Dennis Digital","alternateName":"Dennis"}],"homeLocation":{"@type":"City","name":"London"},"owns":{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency","sameAs":"https://www.linkedin.com/company/creativ.agency"},"alumniOf":{"@type":"Organization","url":"https://www.thespecialistworks.com/","name":"The Specialist Works"},"nationality":{"@type":"Country","name":"Germany"},"birthDate":"1990-11-06","birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Oelsnitz","postalCode":"08606","addressCountry":"Germany"}},"parent":[{"name":"Norbert Herper","jobTitle":"Chef","birthDate":"1967-08-22"},{"name":"Anne-Kristin Herper","birthDate":"1968-02-26"}],"spouse":{"name":"Cinthia Cid Paz","birthDate":"1990-09-19","nationality":{"@type":"Country","name":"Mexico"},"birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Toluca","addressCountry":"Mexico"}}}}`,
        },
      ]}
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
