import React from 'react';
import PropTypes from 'prop-types';

/** Button Element
 * @param {string} props.color `is-primary`, `is-warning`, etc
 * @param {bool} props.isLight Enable Light color
 * @param {bool} props.isRounded Enable Rounded Style
 * @param {string} props.size `is-small`, `is-large`, etc
 */
const Button = (props) => {
  const Options = [];

  if(typeof props.color === 'string') Options.push(props.color);
  if(typeof props.size === 'string') Options.push(props.size);
  if(props.isLight) Options.push('is-light');
  if(props.isRounded) Options.push('is-rounded');
  
  
  return (
    <button className={ `button ${Options.join(' ')}` }>
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