import React from "react";
import Image from "next/image";
import FrontEndSkills from "./FrontEndSkills";
import ToolsSkills from "./ToolsSkills";
import BackEndSkills from "./BackEndSkills";
const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#2929ac]">
          Skills
        </p>
        <h2 className="py-3.5">What I can Do</h2>
        {/* <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/htm.png"
                    alt="/"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>Redux</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>TailwindCSS</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>jQuery</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>OAuth2</p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto flex flex-row items-center justify-between">
                  <Image src="/" alt="/" width="64" height="64" />
                  <p>APIs</p>
                </div>
                </div>
            </div>

            <div>
              <h3 className="text-center">Back-end</h3>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="/" alt="/" width="64" height="64" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-center">Tools</h3>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="/" alt="/" width="64" height="64" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <FrontEndSkills />
        <BackEndSkills />
        <ToolsSkills />
      </div>
    </div>
  );
};

export default Skills;
