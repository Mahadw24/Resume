import React from 'react'
import data from '../data/data'

const Projects = () => {
    return (
        <>
            <div className='h-[100%] flex flex-col justify-center content-center items-center' id='Projects'>
                <h1 className='text-black text-4xl font-bold mt-24 mb-16'>Projects</h1>
                <div className='flex gap-x-24 gap-y-8 flex-wrap items-center justify-center mr-10 ml-10 '>
                    {data.projects.map((item) => {
                        return (
                            <>
                                <div className='flex flex-col rounded-sm h-76 w-[450px] border-2 bg-[#1e1e25] hover:drop-shadow-2xl'>
                                    <a href={item.link} target='_blank'>
                                        <img className='h-48 w-full object-cover rounded-sm' src={item.pic} alt="" />
                                    </a>
                                    <p className='text-white font-bold text-2xl ml-3 mt-3 h-min w-min'>{item.title}</p>
                                    <p className='text-white flex-wrap ml-3'>{item.desc}</p>
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