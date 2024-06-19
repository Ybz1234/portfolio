import React from 'react';
import img from "/public/adi-goldstein-EUsVwEOsblE-unsplash.jpg";
import Button from '@mui/material/Button';
import FileOpenTwoTone from '@mui/icons-material/FileOpenTwoTone';

export default function About() {
    const handleDownload = () => {
        const pdfUrl = '/YehonatanCvs2024.pdf';
        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.download = 'Yehonatan_Ben_Zaken_CV.pdf';
        anchor.click();
    };

    return (
        <div id='About' className=''>
            <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
                <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt="" />
                <div data-aos="fade-right" className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
                    <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 '>About Me</h1>
                    <p data-aos="fade-left">Full-stack developer and certified software tester seeking new opportunities.
                        Proficient in back-end and front-end development, as well as manual and automated testing methodologies.
                        Fast learner with strong problem-solving skills and leadership abilities, and a collaborative team player.</p>
                    <div className='flex mt-8 gap-2'>
                        <div className='flex items-center justify-center'>
                            <div className='flex space-x-2'>
                                <Button
                                    data-aos="fade-up"
                                    variant="outlined"
                                    endIcon={<FileOpenTwoTone />}
                                    size="large"
                                    sx={{
                                        color: 'white',
                                        borderColor: 'fuchsia',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            backgroundColor: 'fuchsia',
                                            borderColor: 'fuchsia',
                                            boxShadow: '0 10px 15px -3px rgba(225, 29, 72, 0.5), 0 4px 6px -2px rgba(225, 29, 72, 0.5)',
                                        },
                                        borderRadius: '8px',
                                        padding: '16px 32px',
                                        textTransform: 'uppercase',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                    }}
                                    onClick={handleDownload}
                                >
                                    Resume
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
