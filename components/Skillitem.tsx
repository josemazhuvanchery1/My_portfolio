import React from 'react';
import Image from 'next/image'

const SkillItem = ({ iconSrc, altText, skillName }) => (
  <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <Image src={iconSrc} alt={altText} width="64" height="64" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>{skillName}</h3>
      </div>
    </div>
  </div>
);

export default SkillItem;
