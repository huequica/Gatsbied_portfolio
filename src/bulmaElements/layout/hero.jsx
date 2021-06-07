import React from 'react';
import PropTypes from 'prop-types';

/**
 * hero Style decider
 *  @param {object} componentOrder component props
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

/**
 * Title( `<section class='hero'>` ) element render
 * https://bulma.io/documentation/layout/hero/
 *
 * @param {node} props.children inner HTML(optional)
 * @param {bool} props.subtleGradient if `true`, effected gradation to hero component
 * @param {string} props.colorStyle color definition(e.g. `is-primary`)
 * @param {string} props.size size definition(e.g. `is-medium`)
 */
const Hero = (props) => {
  const contents = props.children;
  const heroStyles = heroStyleDecide(props, ['hero']);

  return (
    <section className={ heroStyles.join(' ') }>
      <div className='hero-body'>
        { contents }
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
  colorStyle: PropTypes.string,
  size: PropTypes.string
};

export { Hero };
