import React from 'react';
import SkillItem from './Skillitem';

const FrontEndSkills = () => (
  <div>
    <h3 className="text-center py-4 shadow-sm">Front-End</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
      <SkillItem iconSrc="/../public/Assets/frontEnd/htm.png" altText="HTML" skillName="HTML" />
      <SkillItem iconSrc="/../public/Assets/frontEnd/css.png" altText="CSS" skillName="CSS" />
      <SkillItem iconSrc="/../public/Assets/frontEnd/js.png" altText="JavaScript" skillName="JavaScript" />
      <SkillItem iconSrc="/../public/Assets/frontEnd/react.png" altText="React" skillName="React" />
      <SkillItem iconSrc="/../public/Assets/frontEnd/redux1.png" altText="Redux" skillName="Redux" />
      <SkillItem iconSrc="/../public/Assets/frontEnd/NextJs.png" altText="NextJs" skillName="NextJs" />
      <SkillItem iconSrc="/../public/Assets/frontEnd/TailwindCss.png" altText="TailwindCSS" skillName="TailwindCSS" />
      <SkillItem iconSrc="/../public/Assets/frontEnd/jQuery.png" altText="jQuery" skillName="jQuery" />
    </div>
  </div>
);

export default FrontEndSkills;
