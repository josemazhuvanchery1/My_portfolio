import React from "react";
import SkillItem from "./Skillitem";

const ToolsSkills = () => {
  return (
    <div>
      <h3 className="text-center py-4 shadow-sm">Tools</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
        <SkillItem
          iconSrc="/../public/Assets/tools/github.png"
          altText="GitHub"
          skillName="GitHub"
        />
        
        <SkillItem
          iconSrc="/../public/Assets/tools/postman.png"
          altText="Postman"
          skillName="Postman"
        />
        <SkillItem
          iconSrc="/../public/Assets/tools/jest.png"
          altText="Jest"
          skillName="Jest"
        />
        <SkillItem
          iconSrc="/../public/Assets/tools/jira.png"
          altText="Jira"
          skillName="Jira"
        />
        <SkillItem
          iconSrc="/../public/Assets/tools/stripe.png"
          altText="Stripe"
          skillName="Stripe"
        />
        <SkillItem
          iconSrc="/../public/Assets/tools/hubspot.png"
          altText="Hubspot"
          skillName="Hubspot"
        />
        <SkillItem
          iconSrc="/../public/Assets/tools/Zapier.png"
          altText="Zapier"
          skillName="Zapier"
        />
        
      </div>
    </div>
  );
};

export default ToolsSkills;
