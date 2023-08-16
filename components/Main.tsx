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
            Hi, I&apos;m <span className="text-[#2929ac]"> Jose </span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Full Stack Developer with a passion for building
            beautiful and user friendly websites. I have a strong understanding
            of both front-end and back-end development, and I am excited to put
            my skills to use in a professional setting. I am a quick learner and
            a team player, and I am confident that I can be a valueable asset to
            any web development team.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/jose-mazhuvanchery/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/josemazhuvanchery1">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="mailto:jose1998mathew@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href='/#contact'>
                    <BsFillPersonLinesFill />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
