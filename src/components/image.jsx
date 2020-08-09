import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = (props) => {

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
  const searchedImage = allImageSharp.nodes.find((currentItem) =>
    currentItem.fluid.originalName === props.filename)
    .fluid;

  return (
    <figure className={ props.className } style={ props.style }>
      <Img fluid={ searchedImage }
        alt={ props.alt }
      />
    </figure>
  );
};

export default Image;
