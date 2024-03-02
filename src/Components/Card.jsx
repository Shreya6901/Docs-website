import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";


function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>.5mb</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    <LuDownload size="0.7em" color='#fff'/>
                </span>
            </div>
            <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                <h3 className='text-sm'>Download Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
