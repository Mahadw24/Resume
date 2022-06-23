import React from 'react'
import data from '../data/data'
import { Link,NavLink } from 'react-router-dom'
import { Avatar } from 'antd';
import pic from '../data/pic.png'
import MailIcon from '@mui/icons-material/Mail';


const Mid = () => {
    return (
        <>
            <div className=' pt-32 pb-40 flex content-center justify-evenly flex-wrap-reverse sm:w-[100vw]' id='Home'>
                <div>
                    <div className='pt-2 pr-6 pl-6 pb-2 w-32 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-[#54bba1] text-lg font-bold text-white'>
                        Hello I'm
                    </div>
                    <div className='mt-5'>
                            <h1 className='font-semibold text-5xl text-black customfont'>{data.fname} {data.lname}</h1>
                            <p className='text-black text-2xl font-bold'>{data.field}</p>
                    </div>
                    <div className=' text-black'>
                        <div className='flex gap-2'>
                        <MailIcon/>
                        <address>
                            <a href="mailto:the.mahadwaseem@gmail.com" target='_blank' className='text-black'>the.mahadwaseem@gmail.com</a>
                        </address>
                        </div>
                        {data.info.map((item) => {
                            return (
                                <div className='flex'>
                                    {item.icon}
                                    <p className='ml-2'>
                                    {item.value}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-4 text-black '>
                        {data.socialIcon.map((item) => {
                            return (
                                <>
                                <a className='text-black mr-3' href={item.link} target='_blank'>{item.icon}</a>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Avatar className='drop-shadow-2xl' shape="circle" size={300} icon={data.avatarIcon} src={pic} />
                </div>
            </div>
        </>
    )
}

export default Mid