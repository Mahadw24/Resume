import React from 'react'
import data from '../data/data'

const Projects = () => {
    return (
        <>
            <div className='pt-56 h-[100%] flex flex-col justify-center content-center items-center'>
                <h1 className=' text-6xl font-bold mt-24 mb-16 FadeInLeft text-[#335cb6] PlusJakartaSans'>Projects</h1>
                <div className='flex justify-around flex-wrap gap-x-40 gap-y-8 mr-16 ml-16'>
                    {data.projects.map((item) => {
                        return (
                            <>
                                <div className='FadeInLeft flex flex-col rounded-sm h-76 w-[450px] border-2 bg-[#335cb6] hover:drop-shadow-2xl'>
                                    <a href={item.link} target='_blank'>
                                        <img className='h-48 w-full object-cover rounded-sm' src={item.pic} alt="" />
                                    </a>
                                    <p className='text-white font-bold text-2xl ml-3 mt-3 h-min w-min PlusJakartaSans'>{item.title}</p>
                                    <p className='text-white flex-wrap ml-3 PlusJakartaSans'>{item.desc}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects