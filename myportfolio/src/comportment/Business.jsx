import React from 'react'
import { BsBuilding, BsGithub, BsGlobe, BsPerson } from "react-icons/bs";


const Business = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsBuilding /><span className=' italic pl-2 font-semibold'>Business Ownerships</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="">
                <img src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Business