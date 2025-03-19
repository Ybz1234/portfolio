import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BackEnd() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <div id='BackEnd' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Server</h1>
      <div className='grid lg:grid-cols-4 mf:grid-cols-1 justify-around gap-20'>
        <img data-aos="fade-up" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" srcset="" />
        <img data-aos="fade-down" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" srcset="" />
        <img data-aos="fade-up" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt="Azure SQL Database" srcset="" />
        <img data-aos="fade-down" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="MongoDB" srcset="" />
      </div>
    </div>
  )
}
