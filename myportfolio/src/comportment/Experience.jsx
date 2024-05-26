import React from 'react'
import { BsBuilding, BsGithub, BsGlobe, BsPerson, BsPersonGear } from "react-icons/bs";

const Experience = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsPersonGear /><span className=' italic pl-2 font-semibold'>Experience </span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="">
                <div className="md:flex">
                    <img className='rounded h-40' src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4" alt="" />
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">The JKCSS - CSS Framework</p>
                        <p className="">First Utility-First Dynamic CSS Framework in Sri Lanka</p>
                        <p className="my-4">2023-May - Present</p>
                        <p className="">Skills : CSS, SCSS, Framework Development</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience