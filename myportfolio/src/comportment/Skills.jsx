import React from 'react'
import { BsActivity, BsGithub, BsGlobe } from "react-icons/bs";

const Skills = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex"> <BsActivity /> <span className=' italic pl-2 font-semibold'>Skills</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="" className='h-28 rounded'/>
            </div>
        </div>
    </div>
  )
}

export default Skills