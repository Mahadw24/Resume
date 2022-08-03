import React from 'react'
import image from '../data/Aboutme-removebg-preview.png'
import data from '../data/data'

const About = () => {
    return (
        <>
            <div className='pt-56 flex justify-evenly content-center items-center flex-wrap'>
                <div className='FadeInLeft'>
                    <img src={image} alt="" />
                </div>  
                <div>
                    <div>
                        <h1 className='text-[#335cb6] text-6xl PlusJakartaSans FadeInLeft'>About Me</h1>
                        <p className='text-black PlusJakartaSans FadeInLeft'>{data.aboutMe}</p>
                    </div>
                    <div className='flex gap-4 flex-wrap w-[28rem]'>
                        {data.skills.map((item) => {
                            return (
                                <>
                                    <div className='text-black border-2 border-[#335cb6] shadow-2xl PlusJakartaSans w-min p-1 rounded-md FadeInLeft'>
                                        {item.title}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About