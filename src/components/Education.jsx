import React from 'react'
import data from '../data/data'

const Education = () => {
    return (
        <>
            <div className='bg-white flex justify-center flex-col mt-24 pb-20' id='Education'>
                <div className='flex justify-center '>
                    <h1 className='text-black font-bold text-3xl'>Education</h1>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <div className='w-fit gap-3 flex flex-wrap justify-center items-center'>
                        {data.education.map((item) => {
                            return (
                                <>
                                    <div className='border-2 p-8 shadow-xl'>
                                        <div className='flex gap-2 '>
                                            <h1 className='text-black font-bold'>{item.degree}</h1>
                                            <h1 className='text-black'>{item.institute}</h1>
                                        </div>
                                        <h1 className='text-black'>{item.year}</h1>
                                        <h1 className='text-black'>{item.def} {item.marks}</h1>
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

export default Education