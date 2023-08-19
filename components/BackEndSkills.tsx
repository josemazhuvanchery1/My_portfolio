import React from "react";
import SkillItem from "./Skillitem";

const BackEndSkills = () => {
  return (
    <div>
      <h3 className="text-center py-4 shadow-sm">Back-End</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/node.png"
          altText="NodeJs"
          skillName="NodeJs"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/express.png"
          altText="Express"
          skillName="Express"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/python.png"
          altText="Python"
          skillName="Python"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/ts.png"
          altText="TypeScript"
          skillName="TypeScript"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/postgres.png"
          altText="PostgreSQL"
          skillName="PostgreSQL"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/mongodb.png"
          altText="MongoDB"
          skillName="MongoDB"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/java.png"
          altText="Java"
          skillName="Java"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/webSocket1.png"
          altText="RestApi"
          skillName="WebSocket"
        />
        <SkillItem
          iconSrc="/static/img/Assets/backEnd/api.png"
          altText="RestApi"
          skillName="RestApi"
        />
        
      </div>
    </div>
  );
};

export default BackEndSkills;
