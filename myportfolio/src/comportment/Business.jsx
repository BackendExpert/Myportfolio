import React from 'react'
import { BsBuilding, BsGithub, BsGlobe, BsPerson } from "react-icons/bs";


const Business = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsBuilding /><span className=' italic pl-2 font-semibold'>Business Ownerships</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="my-4">
                <img src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4" alt="" className='rounded'/>
                <div className="my-4">
                    <h1 className="md:text-3xl">JKCSS</h1>
                    <h1 className="text-xl">First CSS Framework in Sri Lanka</h1>
                    <p className="">Founder and CEO</p>

                    <div className="flex">
                        <a href="https://github.com/JKCSS-CSS-Framework" className='px-4 my-4 text-xl' target='_blank'>
                            <BsGithub />
                        </a>
                        <a href="https://jkcss-css-framework.github.io/JKCSS-Framework/site/content/docs/" className='px-4 my-4 text-xl' target='_blank'>
                            <BsGlobe />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Business