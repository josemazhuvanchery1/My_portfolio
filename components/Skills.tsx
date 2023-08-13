import React from "react";
import Image from "next/image";
import FrontEndSkills from "./FrontEndSkills";
import ToolsSkills from "./ToolsSkills";
import BackEndSkills from "./BackEndSkills";
const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#2929ac]">
          Skills
        </p>
        <h2 className="py-3.5">What I can Do</h2>
        <FrontEndSkills />
        <BackEndSkills />
        <ToolsSkills />
      </div>
    </div>
  );
};

export default Skills;
