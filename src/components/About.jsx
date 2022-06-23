import React from 'react'
import image from '../data/Aboutme-removebg-preview.png'
import data from '../data/data'
const About = () => {
    return (
        <>
            <div className='flex justify-evenly content-center items-center flex-wrap' id='About'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-black font-bold text-4xl'>About Me</h1>
                        <p className='text-black'>{data.aboutMe}</p>
                    </div>
                    <div className='flex gap-4 flex-wrap w-[28rem]'>
                        {data.skills.map((item) => {
                            return (
                                <>
                                    <div className='text-black border-2 w-min p-1 rounded-md'>
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