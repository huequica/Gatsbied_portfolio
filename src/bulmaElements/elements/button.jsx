import React from 'react';
import PropTypes from 'prop-types';

/** Button Element
 * @param {string} props.color `is-primary`, `is-warning`, etc
 * @param {bool} props.isLight Enable Light color
 * @param {bool} props.isRounded Enable Rounded Style
 * @param {string} props.size `is-small`, `is-large`, etc
 */
const Button = (props) => {

  const color = props.Color || '';
  const size = props.size || '';
  const lightColor = props.isLight ? 'is-light' : '';
  const rounded = props.isRounded ? 'is-rounded' : '';

  return (
    <button className={ `button ${color} ${size} ${lightColor} ${rounded}` }>
      { props.children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isLight: PropTypes.bool,
  isRounded: PropTypes.bool
};


export {Button};