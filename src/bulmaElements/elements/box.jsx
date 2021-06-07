import React from 'react';
import PropTypes from 'prop-types';

/** Element Contain Box
 * @param props.children **REQUIRE** 
 */
const Box = ({children}) => {
  return (
    <div className='box'>
      { children }
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export {Box};