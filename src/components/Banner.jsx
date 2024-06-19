import React, { useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import img from "../assets/laptop.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-quart',
            delay: 0,
            duration: 750
        })
    }, [])
    return (
        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
                <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal '>Welcome To <span className='text-fuchsia-500'>My Website</span></h1>
                <p data-aos="fade-left">Welcome to my professional portfolio! Here, you'll find detailed information about my skills and experience as a full-stack developer and certified software tester. Explore my CV, learn about my expertise in back-end and front-end development, and discover the projects that showcase my proficiency in various programming languages and testing methodologies. Dive into my portfolio to see how I can bring value to your team.</p>
                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div data-aos="fade-right" className='flex space-x-2'>
                            <a href="https://github.com/Ybz1234" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2' target='blank'>
                                <AiFillGithub className='text-[28px]' />
                            </a>
                            <a href="https://www.linkedin.com/in/yehonatan-ben-zaken/" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2' target='blank'>
                                <AiFillLinkedin className='text-[28px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt="" srcset="" />
        </div>
    )
}
