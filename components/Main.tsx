import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <p className=''>Let's build</p> */}
          <h1 className="pb-4 text-gray-700">
            <span className="text-[#2929ac]"> Jose Mazhuvanchery</span>
          </h1>
          <h1 className="py-4 text-gray-700">Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            A Full Stack Developer with a passion for building beautiful and
            user friendly websites. I have a strong understanding of both
            front-end and back-end development, and I am excited to put my
            skills to use in a professional setting. I am a quick learner and a
            team player, and I am confident that I can be a valueable asset to
            any web development team.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/jose-mazhuvanchery/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/josemazhuvanchery1">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:jose1998mathew@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
