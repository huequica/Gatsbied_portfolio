import React from 'react';
import PropTypes from 'prop-types';

/**
 * Column Layout( `div.columns`, `div.column` ) render
 * @param { bool } Parent If you use parent columns container, enable this props.
 * @param { node } children
 */
const Column = ({Parent, children}) => {
  return (
    <div className={ Parent ? 'columns' : 'column' }>
      { children }
    </div>
  );
};

Column.defaultProps = {
  Parent: false
};

Column.propTypes = {
  children: PropTypes.node,
  Parent: PropTypes.bool,
};
export default Column;
