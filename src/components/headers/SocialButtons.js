import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButtons = (props) => {
  const current = 'social_btn ' + props.classname;
  return (
    <button type="button" className={current} onClick={props.onclick}>
      <FontAwesomeIcon icon={props.icon} /> {props.name}
    </button>
  );
};

export default SocialButtons;
