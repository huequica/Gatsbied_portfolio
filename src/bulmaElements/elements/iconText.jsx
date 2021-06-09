import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const BaseElements = ({icon, text}) => (
  <>
    <span className='icon'>
      <FontAwesomeIcon icon={ icon } />
    </span>

    <span>
      { text }
    </span>
  </>
);

/** Render text with icon
 * @param {IconDefinition} icon **REQUIRE** svg icon
 * @param {string} text LabelText
 * @param {bool} inButton Use in ButtonLabel, Enable this prop
 */
const IconText = ({icon, text, inButton}) => {
  const IconText = (
    <span className='icon-text'>
      <BaseElements icon={ icon } text={ text } />
    </span>
  );
  // contain `span.icon-text` if used for not button
  return inButton ? <BaseElements icon={ icon } text={ text } /> : IconText;
};

IconText.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object.isRequired
};

export {IconText};
