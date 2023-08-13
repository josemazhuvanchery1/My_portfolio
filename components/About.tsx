import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id ='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'> 
                <p className='uppercase text-xl tracking-widest text-[#2929ac]'>About</p>
                <h2 className ='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>// i am not your normal developer</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad placeat magnam ex eveniet aliquam delectus, doloremque quaerat perferendis ut soluta nemo exercitationem fugiat quisquam qui, dolore sint voluptate modi!</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio a quas, eaque quisquam et illum. Unde, ut. Aspernatur obcaecati veniam illum optio totam asperiores dolorem maxime hic? Iusto, et!</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl'
                    src='/../public/Assets/about_pic.jpg' 
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