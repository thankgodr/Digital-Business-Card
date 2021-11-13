import React from 'react';

const About = (props) => {
  const details =
    'I am aa Software Engineer with five years expereince working as Android Developer for FinTech Companies. I am currently learning react to develope Android and IOS app using React Native';
  return (
    <div>
      <h3 className="about_title">{props.title == undefined ? 'About' : props.title}</h3>
      <p className="abount_details">{props.details == undefined ? details : props.details}</p>
    </div>
  );
};

export default About;
