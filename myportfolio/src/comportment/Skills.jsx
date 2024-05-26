import React from 'react'
import { BsActivity, BsGithub, BsGlobe, BsStarFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex"> <BsActivity /> <span className=' italic pl-2 font-semibold'>Skills</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="" className='md:h-28 h-16 rounded'/>
                <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                    <p className="">Javascript</p>
                    <p className="py-4">Level: <span className='text-green-600'>Expert</span> </p>
                    <p className="text-[#FFD700] flex tracking-widest	"><BsStarFill /><BsStarFill /><BsStarFill /></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills