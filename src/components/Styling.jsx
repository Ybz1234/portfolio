import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Styling() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <div>
      <div id='Styling' className='p-20 flex flex-col items-center justify-center'>
        <h1 data-aos="fade-left" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Styling frameworks</h1>
        <div className='grid lg:grid-cols-3 mf:grid-cols-1 justify-around gap-20'>
        <img data-aos="fade-up" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 p-1 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind" srcset="" />
          <img data-aos="fade-down" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 p-1 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" srcset="" />
          <img data-aos="fade-up" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 p-1 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="MUI" srcset="" />
        </div>
      </div>
    </div>
  )
}
