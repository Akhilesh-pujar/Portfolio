import Link from 'next/link';
import React from 'react';
import { Cursor,useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import hero_banner from '../assets/hero_banner.jpeg';



import BackgroundCircle from './BackgroundCircle';
type Props = {}

export default function Hero({}: Props) {
    const [text , count] =useTypewriter({
        words:[
            "Hi I'm Akhilesh ",
            "Guy who-Loves-coffe.tsx",
            "<ButLovesToCode/>",
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='flex flex-col h-screen items-center justify-center
    text-center  overflow-hidden'>
       <BackgroundCircle/>
       <Image
       priority
       src={hero_banner}
       className='relative rounded-full h-32 w-32 mx-auto object-cover '
        
       alt="banner"/>
        
       <div className='z-10'>
       <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'
       >Software Engineer</h2>
        <h1 className='text-2xl lg:text-2xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
        </h1>
        <div className='pt-4'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
            <Link href="#achivement">
            <button className='heroButton'>Achievements</button>
            </Link>
      
        </div>
        {/* <About/> */}
       
       </div>
 
    </div>
  );
}

