import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterButton = (props) => {
  return (
    <button>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default FooterButton;
