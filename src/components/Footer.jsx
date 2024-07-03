import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='mb-4 md:mb-0'>
                    <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase'><img src="../newLogo.png" alt="" srcset=""/></span>
                </div>
                <div>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Services</h2>
                    <ul className='text-[16px] my-4'>
                        <li className='my-2'>Server Development</li>
                        <li className='my-2'>Web Development</li>
                        <li className='my-2'>Quality Assurance</li>
                        <li className='my-2'>Database Creation</li>
                    </ul>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contacts</h2>
                    <p className='text-[16px] my-4'>Email: <a href="mailto:Jonathanbz49@gmail.com" className='text-white hover:text-fuchsia-800 hover:underline'>Jonathanbz49@gmail.com</a></p>
                </div>
                <div>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me</h2>
                    <div className='flex space-x-4'>
                        <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://github.com/Ybz1234" target='blank'>
                            <FaGithub />
                        </a>
                        <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://www.linkedin.com/in/yehonatan-ben-zaken/" target='blank'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
