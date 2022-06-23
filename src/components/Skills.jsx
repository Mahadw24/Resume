import React from 'react'
import { Progress } from 'antd';
import data from '../data/data'

const Skills = () => {
    return (
        <>
            <div className='h-fit pt-24 flex items-center justify-evenly flex-wrap' id='Skills'>
                <div className='text-black w-96'>
                    <h2 className='text-black flex justify-center font-bold text-2xl'>Technical Skills</h2>
                    {data.skills.map((item) => {
                        return (
                            <>
                                <div className='mb-2'>
                                    <h2 className='text-black m-0 p-0'>
                                        {item.title}
                                    </h2>
                                    <Progress format={() => <div style={{ color: 'black' }}>{item.percent}</div>} percent={item.number} strokeColor='gray' />
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className='text-black w-96'>
                    <h2 className='text-black flex justify-center font-bold text-2xl'>Professional Skills</h2>
                    <div className='flex flex-wrap gap-4 items-center justify-center'>
                        {data.profskills.map((item) => {
                            return (
                                <>
                                    <div className='mb-2 flex flex-col items-center pt-10'>
                                        <Progress format={() => <div style={{ color: 'black' }}>{item.percent}</div>} percent={item.number} type='circle' strokeColor='gray' />
                                        <h2 className='text-black m-0 p-0 pt-3 font-bold'>
                                            {item.title}
                                        </h2>
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

export default Skills