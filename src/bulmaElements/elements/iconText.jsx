import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

/** Render text with icon
 * @param {IconDefinition} icon **REQUIRE** svg icon
 * @param {string} text
 */
const IconText = ({icon, text}) => (
  <span className='icon-text'>
    <span className='icon'>
      <FontAwesomeIcon icon={ icon } />
    </span>

    <span>
      { text }
    </span>
  </span>
);

IconText.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object.isRequired
};

export {IconText};
