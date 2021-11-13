import React from 'react';

const SocialButtons = (props) => {
  return (
    <button onClick={props.onclick} className="social_btn">
      <i className={props.icon}></i> {props.name}
    </button>
  );
};

export default SocialButtons;
