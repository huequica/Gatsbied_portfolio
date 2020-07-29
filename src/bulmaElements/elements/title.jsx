import React from 'react';
import PropTypes from 'prop-types';

/**
 * Title( `<h1>` ) element render
 * https://bulma.io/documentation/elements/title/
 * @param {node} props.children **Required**

 * @param {number} props.is Optional(default: 3)
 */
const Title = (props) => {
  // Required
  const contents = props.children;
  const elementSize = props.is;
  return (
    <h1 className={ `title is-${elementSize}` } >
      { contents }
    </h1>
  );
};

Title.defaultProps = {
  is: 3,
  subTitle: false
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  is: PropTypes.number,
  subTitle: PropTypes.bool
};

export { Title };
