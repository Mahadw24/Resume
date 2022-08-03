import React from 'react'
import data from '../data/data'
import { Link, NavLink } from 'react-router-dom'
import { Avatar } from 'antd';
import pic from '../data/pic.png'
import MailIcon from '@mui/icons-material/Mail';


const Mid = () => {
    return (
        <>
            <div className='pt-56 pb-56 flex content-center justify-evenly flex-wrap-reverse sm:w-[100vw]'>
                <div>   
                    <div className='pt-2 pr-6 pl-6 pb-2 w-32 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-[#4c72c6] PlusJakartaSans text-lg text-white FadeInLeft'>
                        Hello I'm
                    </div>
                    <div className='mt-5'>
                        <h1 className='font-semibold text-6xl text-[#335cb6] PlusJakartaSans FadeInLeft'>{data.fname} {data.lname}</h1>
                        <p className='text-3xl PlusJakartaSans FadeInLeft text-black'>{data.field}</p>
                    </div>
                    <div className=' text-black'>
                        <div className='flex gap-2 FadeInLeft'>
                            <MailIcon className='text-[#335cb6]' />
                            <address>
                                <a href="mailto:the.mahadwaseem@gmail.com" target='_blank' className='text-black font-bold'>the.mahadwaseem@gmail.com</a>
                            </address>
                        </div>
                        {data.info.map((item) => {
                            return (
                                <div className='flex text-[#335cb6] FadeInLeft'>
                                    {item.icon}
                                    <p className='ml-2 font-bold text-black'>
                                        {item.value}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-4 text-black FadeInLeft'>
                        {data.socialIcon.map((item) => {
                            return (
                                <>
                                    <a className=' mr-3 text-[#335cb6]' href={item.link} target='_blank'>{item.icon}</a>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Avatar className='drop-shadow-2xl FadeInLeft' shape="circle" size={300} icon={data.avatarIcon} src={pic} />
                </div>
            </div>
        </>
    )
}

export default Mid