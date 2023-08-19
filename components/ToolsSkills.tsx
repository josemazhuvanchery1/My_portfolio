import React from "react";
import SkillItem from "./Skillitem";

const ToolsSkills = () => {
  return (
    <div>
      <h3 className="text-center py-4 shadow-sm">Tools</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
        <SkillItem
          iconSrc="/static/img/Assets/tools/github.png"
          altText="GitHub"
          skillName="GitHub"
        />
        
        <SkillItem
          iconSrc="/static/img/Assets/tools/postman.png"
          altText="Postman"
          skillName="Postman"
        />
        <SkillItem
          iconSrc="/static/img/Assets/tools/jest.png"
          altText="Jest"
          skillName="Jest"
        />
        <SkillItem
          iconSrc="/static/img/Assets/tools/jira.png"
          altText="Jira"
          skillName="Jira"
        />
        <SkillItem
          iconSrc="/static/img/Assets/tools/stripe.png"
          altText="Stripe"
          skillName="Stripe"
        />
        <SkillItem
          iconSrc="/static/img/Assets/tools/hubspot.png"
          altText="Hubspot"
          skillName="Hubspot"
        />
        <SkillItem
          iconSrc="/static/img/Assets/tools/Zapier.png"
          altText="Zapier"
          skillName="Zapier"
        />
        
      </div>
    </div>
  );
};

export default ToolsSkills;
