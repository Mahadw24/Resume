import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import data from '../data/data'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-around items-center pt-3 pb-3 text-white overflow-hidden'>
                <div className='flex gap-2 '>
                    <h1 className='font-bold text-xl text-black'>PORTFOLIO</h1>
                </div>
                <div className='flex gap-10 invisible sm:visible'>
                    {
                        data.navLinks.map((item) => {
                            return (
                                <>
                                    <a href={`#${item}`} className='text-black text-xl hover:text-grey'>{item}</a>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar