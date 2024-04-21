import React from 'react'
import Image from 'next/image'

const LeftIcon = () => {
  return (
    <div className="fixed bottom-0 z-50 hidden flex-col md:flex">
        <ul className="menu rounded-r-md mb-5">
        <li>
            <a href='https://www.linkedin.com/in/badraa-bat-ulzii-5b5b98187/' target='_blank'>
            <Image src="/linkedin.png" alt='instagram' width={20} height={20} />
            </a>
        </li>
        <li>
            <a href='https://www.instagram.com/bdraa_/' target='_blank'>
            <Image src="/instagram.png" alt='instagram' width={20} height={20} />
            </a>
        </li>
        <li>
            <a href='https://github.com/bbadraa99' target='_blank'>
            <Image src="/github.png" alt='instagram' width={20} height={20} />
            </a>
        </li>
        </ul>
        <div className="border-r-2 h-[200px] w-[35px] center border-gray-300">.</div>
    </div>
  )
}

export default LeftIcon