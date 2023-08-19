import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id ='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'> 
                <p className='uppercase text-xl tracking-widest text-[#2929ac]'>About</p>
                <h2 className ='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600 font-extrabold'>Software Engineer | Web Developer | Lifelong Learner</p>
                <p className='py-2 text-gray-600 font-semibold'>Welcome to my digital space! I am a passionate software engineering enthusiast dedicated to crafting elegant and efficient solutions to real-world problems. With a strong foundation in web development and a commitment to continuous learning, I&apos;m on a journey to become a skilled professional in the tech industry.</p>
                <p className='py-2 text-gray-600 font-semibold'>I&apos;m not just a coder; I&apos;m an avid problem solver. I thrive on turning complex puzzles into streamlined, user-centered solutions. My passion for coding, combined with my eye for design, ensures that the projects I work on are not only functional but also aesthetically appealing.</p>
                <p className='py-2 text-gray-600 font-semibold'>When I&apos;m not immersed in lines of code, you&apos;ll find me exploring the outdoors, mountain biking, playing tennis or basketball, or devouring the latest tech blogs/videos.</p>
                <Link href="/#projects">
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 rounded-xl'>
                <Image className='rounded-full'
                    src={'/static/img/Assets/about_pic1.png'} 
                    alt="/" 
                    width= '300'
                    height ='75' 
                />
            </div>
        </div>
    </div>
  )
}

export default About