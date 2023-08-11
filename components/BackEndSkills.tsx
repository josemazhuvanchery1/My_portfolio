import React from "react";
import SkillItem from "./Skillitem";

const BackEndSkills = () => {
  return (
    <div>
      <h3 className="text-center py-4 shadow-sm">Back-End</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="NodeJs"
          skillName="NodeJs"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="Express"
          skillName="Express"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="Python"
          skillName="Python"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="TypeScript"
          skillName="TypeScript"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="PostgreSQL"
          skillName="PostgreSQL"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="MongoDB"
          skillName="MongoDB"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="Java"
          skillName="Java"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="RestApi"
          skillName="RestApi"
        />
        
      </div>
    </div>
  );
};

export default BackEndSkills;
