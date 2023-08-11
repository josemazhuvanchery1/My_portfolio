import React from 'react';
import SkillItem from './Skillitem';

const FrontEndSkills = () => (
  <div>
    <h3 className="text-center py-4 shadow-sm">Front-End</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
      <SkillItem iconSrc="/../public/htm.png" altText="HTML" skillName="HTML" />
      <SkillItem iconSrc="/" altText="CSS" skillName="CSS" />
      <SkillItem iconSrc="/" altText="JavaScript" skillName="JavaScript" />
      <SkillItem iconSrc="/" altText="React" skillName="React" />
      <SkillItem iconSrc="/" altText="Redux" skillName="Redux" />
      <SkillItem iconSrc="/" altText="NextJs" skillName="NextJs" />
      <SkillItem iconSrc="/" altText="TailwindCSS" skillName="TailwindCSS" />
      <SkillItem iconSrc="/" altText="jQuery" skillName="jQuery" />
    </div>
  </div>
);

export default FrontEndSkills;
