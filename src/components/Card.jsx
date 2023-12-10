import React from 'react'
import { FaFile } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[40px] bg-zinc-900/60 text-white px-5 py-10 overflow-hidden'>
        <FaFile/> 
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam?</p>
         <div className='footer absolute bottom-0 w-full py-3 px-8 left-0'>
            <div className='flex items-center justify-between mb-5' >
                <h5>.4mb</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    <FaDownload size=".7em" color="#fff" />
                </span>
            </div>
            </div>
          </div> 
      
    
  )
}

export default Card
