import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import landingPage from "public/Assets/Projects/HomeEase/landingpage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 h-[30vh] w-full lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={landingPage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">HomeEase</h2>
          <h3>React Js / Tailwind / Express / PostgreSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            The mission of this application is to revolutionize the way people
            buy and sell houses by creating a platform that connects buyers and
            sellers directly, eliminating the need for realtors. The goal is to
            make the process of buying and selling a house more efficient,
            cost-effective and user-friendly.
          </p>
          <p className="py-2">
            The application is an online marketplace for buying and selling houses.
            Sellers can list their houses on the platform, including details
            about the property and available showing times. Buyers can browse
            through listings and contact the seller directly via messages. The
            platform also includes a calendar feature for sellers to schedule
            and manage showings. Buyers can also filter their search based on
            different criteria such as location, price, size and number of
            bedrooms, making it easy for them to find the houses they are
            looking for.
          </p>
          <p className="py-2">
            The platform offers a solution to this problem by connecting buyers
            and sellers directly, eliminating the need for realtors. This allows
            for a faster, more efficient, and cost-effective process for both
            parties.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <a href='https://github.com/orgs/Home-Ease/repositories'>
                <button className='px-8 py-2 mt-4' >Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Calendly Api
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Real Estate Api
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JWT
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
