import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const contents = props.children;
  const [heroStyle, setHeroStyle] = React.useState('hero');

  return (
    <section className={ heroStyle }>
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
