import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import propTypes from 'prop-types';

/**
 * Bulma Image Render
 * https://bulma.io/documentation/elements/image/
 * @param {string} props.filename **REQUIRE** resource filename(`icon.jpg`, `icon.png`)
 * @param {string} props.alt **REQUIRE** image alt text
 *
 * @param {string} props.dimension image size dimension(`128x128`, `3by1`)
 * @param {boolean} props.isRounded if you want to create rounded image, enable this.
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
      <Img fluid={ searchedImage }
        alt={ props.alt }
        className={ props.isRounded ? 'is-rounded' : '' }
      />
    </figure>
  );
};

Image.defaultProps = {
  isRounded: false,
  dimension: '128x128'
};

Image.propTypes = {
  // Required
  filename: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,

  // Optional
  isRounded: propTypes.bool,
  dimension: propTypes.string
};

export default Image;
