import React from "react";
import SkillItem from "./Skillitem";

const ToolsSkills = () => {
  return (
    <div>
      <h3 className="text-center py-4 shadow-sm">Tools</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="GitHub"
          skillName="GitHub"
        />
        
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="Postman"
          skillName="Postman"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="Jest"
          skillName="Jest"
        />
        <SkillItem
          iconSrc="/../public/htm.png"
          altText="Jira"
          skillName="Jira"
        />
        
        
      </div>
    </div>
  );
};

export default ToolsSkills;
