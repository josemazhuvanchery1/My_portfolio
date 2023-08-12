import React from 'react'
import Image from 'next/image'
import ProjectItems from './ProjectItems'
import menteeDashboard from '../public/Assets/Projects/Mentee/dashboard.png'
import homeEaseLanding from '../public/Assets/Projects/HomeEase/landingpage.png'
import marcyMerchProducts from '../public/Assets/Projects/MarcyMerch/products.png'
const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#2929ac]'>Projects</p>
            <h2 className='py-4'>What I've build</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItems title='Mentee.' backgroundImg={menteeDashboard} projectUrl='/mentee' />
                <ProjectItems title='HomeEase' backgroundImg={homeEaseLanding} projectUrl='/homease' />
                <ProjectItems title='Marcy Merch' backgroundImg={marcyMerchProducts} projectUrl='/marcymerch' />

                {/* <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={menteeDashboard} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Mentee</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React TypeScript PostgreSQL</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default Projects