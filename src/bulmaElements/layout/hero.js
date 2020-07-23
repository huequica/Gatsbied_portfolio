import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const contents = props.children;

  return (
    <section className={ `hero` }>
      <div className='hero-body'>
        <div className='container'>
          { contents }
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
};

export { Hero };
