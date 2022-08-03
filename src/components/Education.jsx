import React from 'react'
import data from '../data/data'

const Education = () => {
    return (
        <>
            <div className='pt-56 pb-44 bg-white flex justify-center flex-col mt-24' id='Education'>
                <div className='flex justify-center '>
                    <h1 className='text-[#335cb6] font-bold text-6xl PlusJakartaSans'>Education</h1>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <div className='w-fit gap-3 flex flex-wrap justify-center items-center'>
                        {data.education.map((item) => {
                            return (
                                <>
                                    <div className='border-2 p-8 shadow-xl'>
                                        <div className='flex items-center gap-4'>
                                            <h1 className='text-[#335cb6] PlusJakartaSans text-xl'>{item.degree}</h1>
                                            <h1 className='text-black PlusJakartaSans'>{item.institute}</h1>
                                        </div>
                                        <h1 className='text-black PlusJakartaSans'>{item.year}</h1>
                                        <h1 className='text-black PlusJakartaSans'>{item.def} {item.marks}</h1>
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