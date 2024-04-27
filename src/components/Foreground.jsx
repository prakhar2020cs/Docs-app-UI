import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function Foreground() {
     const ref = useRef(null);

    const data=[
        {
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam?",
            filesize: ".9mb",
            close:true,
            tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green"}
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam?",
            filesize: ".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download!!",tagColor:"blue"}
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam?",
            filesize: ".5mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
    ];
    
  return (
    
        <div ref={ref} className='fixed top-0 flex left-0 z-[3] w-full gap-4 h-full flex-wrap'>
         {data.map((item,index)=>(
            <Card data={item} reference={ref} />
         ))}
        </div>
    
  )
}

export default Foreground
