import React from 'react'
import { BsBarChartLineFill, BsBuilding, BsClipboard, BsGithub, BsGlobe, BsPerson } from "react-icons/bs";

const Projects = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsClipboard /><span className=' italic pl-2 font-semibold'>Projects</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">


            <div className="md:my-0 my-4">
                <div className="flex">
                    <BsBarChartLineFill />
                    <div className="">
                        <h1 className="">ERP System</h1>
                    </div>
                </div>
            </div>
            <hr className='md:hidden block border border-[#00A0DF] w-3/4'/>


        </div>
    </div>
  )
}

export default Projects