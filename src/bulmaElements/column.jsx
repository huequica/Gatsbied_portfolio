import React from 'react';
import PropTypes from 'prop-types';

/**
 * Column Layout( `div.columns`, `div.column` ) render
 * @param { bool } Parent If you use parent columns container, enable this props.
 * @param { string } size Put column size specify if needed https://bulma.io/documentation/columns/sizes/
 * @param { node } children
 */
const Column = ({Parent, size, children}) => {
  let classNames = '';
  classNames += Parent ? 'columns' : 'column';
  
  return (
    <div className={ classNames }>
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
