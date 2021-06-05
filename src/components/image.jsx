import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import propTypes from 'prop-types';

/**
 * Bulma Image Render
 * https://bulma.io/documentation/elements/image/
 * @param {string} props.filename **REQUIRE** resource filename(`icon.jpg`, `icon.png`)
 * @param {string} props.alt **REQUIRE** image alt text
 *
 * @param {string} props.dimension image size dimension(`128x128`, `3by1`)
 */
const Image = (props) => {
  // fetching Image Resources
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // search Image from fetched result
  const searchedImage = allImageSharp.nodes.find((currentItem) =>
    currentItem.fluid.originalName === props.filename)
    .fluid;

  const dimension = props.dimension;

  return (
    <figure className={ dimension ? `image is-${dimension}` : 'image' }>
      <GatsbyImage image={ searchedImage } alt={ props.alt } />
    </figure>
  );
};

Image.propTypes = {
  // Required
  filename: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,

  // Optional
  dimension: propTypes.string
};

export default Image;
