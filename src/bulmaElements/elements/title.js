import React from 'react';
import PropTypes from 'prop-types';

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
  is: 3
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  is: PropTypes.number
};

export { Title };
