'use client'
import React from 'react' 
import { useState } from 'react';
import Link from 'next/link';

const Experiences = () => {

  const [hoveredExperience, setHoveredExperience] = useState('empty');

  return (
    <div id="experiences" className=' w-full xl:w-3/4 2xl:w-[1200px] mx-auto py-20'>
      <h1 className="bold-32 center pb-20 text-white font-dmono">02. Experiences</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <hr className='bg-white'/>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-7 w-7"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <Link href="https://pal.unist.ac.kr/" target='_blank' className={`timeline-start md:text-end mb-10 p-2 cursor-pointer font-mono ${hoveredExperience !== '1' && hoveredExperience !== 'empty' ? 'opacity-50' : ''} ${hoveredExperience === '1'  ? 'bg-stone-200 bg-opacity-20 rounded-md' : ''}`}
            onMouseEnter={() => setHoveredExperience('1')}
            onMouseLeave={() => setHoveredExperience('empty')}>
            <time className="font-mono italic text-white">2024.03 - Present</time>
            <div className="bold-18 text-stone-200 font-dmono">Android Studio Developer</div>
            <h3 className='regular-16 text-stone-200 font-dmono pb-2'>~ Perception Learning Lab, UNIST</h3>
            <p className='text-justify'>Extend backend features with Kotlin, seamlessly integrating into the Eye Training app. Enhance data management by integrating MongoDB, ensuring efficiency. Conduct rigorous testing to ensure stability across various devices.</p>
            <div className='flex-row space-x-1'>
              <div className="badge badge-accent text-white">Android Studio</div>
              <div className="badge badge-accent text-white">Kotlin</div>
              <div className="badge badge-accent text-white">JavaScript</div>
            </div>
          </Link>
          
          <hr className='bg-white'/>
        </li>
        <li >
          <hr className='bg-white'/>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-7 w-7"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <Link href="https://www.carcare.mn/" target='_blank' className={`timeline-end mb-10 p-2 cursor-pointer font-mono ${hoveredExperience !== '2' && hoveredExperience !== 'empty' ? 'opacity-50' : ''} ${hoveredExperience === '2' ? 'bg-stone-200 bg-opacity-20 rounded-md' : ''}`}
            onMouseEnter={() => setHoveredExperience('2')}
            onMouseLeave={() => setHoveredExperience('empty')} >
            <time className="font-mono italic text-white">2024.01 - 2024.02</time>
            <div className="bold-18 text-stone-200 font-dmono">Software Engineer Intern</div>
            <h3 className='regular-16 text-stone-200 font-dmono pb-2'>~ Rubick AI</h3>
            <p className='text-justify'>Developed a landing page from scratch using Next.js, Tailwind CSS, and Typescript for the CarCare project. Incorporated fully responsive design for small to extra large devices. Integrated interactive features and optimized the user experience using React Framer Motion</p>
            <div className='flex-row space-x-1'>
              <div className="badge badge-accent text-white">Next.js</div>
              <div className="badge badge-accent text-white">TypeScript</div>
              <div className="badge badge-accent text-white">Tailwind CSS</div>
            </div>
          </Link>
          <hr className='bg-white'/>
        </li>
        <li>
          <hr className='bg-white'/>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-7 w-7"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <Link href="https://digitalsolutions.mn/#slide01" target='_blank' className={`timeline-start md:text-end mb-10 p-2 cursor-pointer font-mono ${hoveredExperience !== '3' && hoveredExperience !== 'empty' ? 'opacity-50' : ''} ${hoveredExperience === '3'  ? 'bg-stone-200 bg-opacity-20 rounded-md' : ''}`}
            onMouseEnter={() => setHoveredExperience('3')}
            onMouseLeave={() => setHoveredExperience('empty')}>
            <time className="font-mono italic text-white">2023.01 - 2023.02</time>
            <div className="bold-18 text-stone-200 font-dmono">Software Engineer Intern</div>
            <h3 className='regular-16 text-stone-200 font-dmono pb-2'>~ Digital Solutions</h3>
            <p className='text-justify'>Collaborated designing the “Guyuk” project website using HTML and CSS. Performed Metaverse market analysis and helped finding the niche that is suitable in Mongolia</p>
            <div className='flex-row space-x-1'>
              <div className="badge badge-accent text-white">HTML</div>
              <div className="badge badge-accent text-white">CSS</div>
              <div className="badge badge-accent text-white">JavaScript</div>
            </div>
          </Link>
          <hr className='bg-white'/>
        </li>
        
        
      </ul>
    </div>
    
  )
}

export default Experiences