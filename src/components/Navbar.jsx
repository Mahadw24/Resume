import React from 'react'
import data from '../data/data'

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-around pt-3 pb-3 text-white overflow-hidden'>
                <div>
                    <a href='/' className='font-bold text-xl text-[#335cb6] FadeInLeft PlusJakartaSans'>PORTFOLIO</a>
                </div>
                <div className='flex gap-10'>
                    {
                        data.navLinks.map((item) => {   
                            return (
                                <>  
                                    <a href={`#${item}`} className='FadeInLeft text-black text-sm PlusJakartaSans hover:text-grey'>{item}</a>
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