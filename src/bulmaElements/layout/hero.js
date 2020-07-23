import React from 'react';
import PropTypes from 'prop-types';

/**
 * hero Style decider
 *  @param {props} componentOrder component props
 *  @param {array<string>} baseHeroStyles heroStyle base definition
 *
 *  @return {array<string>} decided heroStyles
 */
const heroStyleDecide = (componentOrder, baseHeroStyles) => {
  const heroStyles = baseHeroStyles;

  // subtleGradient is enable?
  if(componentOrder.subtleGradient === true) heroStyles.push('is-bold');

  // color style definition(e.g. `is-primary`, `is-success`)
  if(componentOrder.colorStyle !== undefined) heroStyles.push(componentOrder.colorStyle);

  // hero size definition(e.g. `is-medium`, `is-fullheight`, `is-fullheight-with-navbar`)
  if(componentOrder.size !== undefined) heroStyles.push(componentOrder.size);

  return heroStyles;
};

const Hero = (props) => {
  const contents = props.children;
  const heroStyles = heroStyleDecide(props, ['hero']);

  return (
    <section className={ heroStyles.join(' ') }>
      <div className='hero-body'>
        <div className='container'>
          { contents }
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  subtleGradient: false
};

Hero.propTypes = {
  // Not Required
  children: PropTypes.node,
  subtleGradient: PropTypes.bool,
  colorStyle: PropTypes.string
};

export { Hero };
