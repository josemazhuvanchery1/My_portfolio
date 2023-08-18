import React from 'react'
import Image from 'next/image'
import menteeDashboard from "public/Assets/Projects/Mentee/dashboard.png";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
const page = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative' >
            <div className='absolute top-0 left-0 h-[30vh] w-full lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={menteeDashboard} alt ='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Mentee.</h2>
              <h3>React Js / Tailwind / Express / PostgreSQL</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p className='py-2'>Mentee is an application for high-school graduates or GED holders from underprivileged communities and nontraditional backgrounds looking to build career skills through mentorship and community. Mentees can practice technical code, learn what a career in tech looks like, and receive support from mentors and Mentee friends via live communication throughout their career journey.</p>
            <p className='py-2'>The application enables Mentees to find a community of mentors and other mentees in a similar trajectory and filter to find users with the same goals. Users log on to the application and are instantly greeted with a table populated with other users, they can filter through to find Mentees or Mentors. Mentors can teach and lead, and mentees can learn, collaborate, and create a network of their choosing. Users can also utilize the inhouse technologies to video-call, text, and even screenshare, for the ease of communication.</p>
            <button className='px-8 py-2 mt-4 mr-8' >Demo</button>
            <a href='https://github.com/orgs/mentee-marcy/repositories'>
                <button className='px-8 py-2 mt-4' >Code</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2' >
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TypeScript</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Express</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> PostgreSQL</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Socket.IO</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JWT</p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
    </div>
  )
}

export default page