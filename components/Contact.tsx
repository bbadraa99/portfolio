import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='h-screen py-10 px-10 center'>
        <div className='center flex-col'>
            <p className='regular-16 font-dmono text-stone-200 pb-6'>04. What is next?</p>
            <h1 className='bold-36 font-dmono text-white text-center'>Let's connect!</h1>
            <p className='regular-14 font-dmono w-full sm:w-3/4 md:w-2/3 text-center pb-10 text-black'>I'm actively seeking a software engineering position within an innovative team where I can contribute with the best of my abilities. You can count on me to handle any task with efficiency and adaptability.</p>
            <Link href="https://www.linkedin.com/in/badraa-bat-ulzii-5b5b98187/" target='_blank'>
              <button className="btn btn-md lg:btn-lg bg-transparent hover:bg-stone-100 hover:bg-opacity-40 hover:scale-125 hover:border-2 text-white regular-16 font-dmono border-white">Hire me</button>        
            </Link>
        </div>
    </div>
  )
}

export default Contact