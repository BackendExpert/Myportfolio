import React from 'react'
import { BsGithub, BsGlobe, BsMortarboard, BsPerson } from "react-icons/bs";


const Education = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsMortarboard /><span className=' italic pl-2 font-semibold'>Education</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="">
                <div className="md:flex">
                    <img className='rounded h-40' src="https://media.licdn.com/dms/image/C510BAQF76saW0VxG6A/company-logo_200_200/0/1631333356072?e=2147483647&v=beta&t=oCkexIHpVd00uOjztCxh8j4E5l4G70SUbNRp4yBk3-k" alt="" />
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">St.Sylvester's College </p>
                        <p className="">Kandy, Sri Lanka</p>
                        <p className="my-4">2006 - 2020</p>
                        <p className="">Advanced Level : Tech - 2020</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="md:flex">
                    <BsMortarboard className='h-40 w-auto'/>
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">Bachelor of Science in Information Technology </p>
                        <p className="">Sri Lanka International Buddhist Academy, Kandy, Sri Lanka</p>
                        <p className="my-4">2021 Sep - 2024-April</p>
                        <p className="">Class : Pending...</p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="md:flex">
                    <BsMortarboard className='h-40 w-auto'/>
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">Foundation in Bekary and Pestry </p>
                        <p className="">Sri Lanka Institute of Tourism & Hotel Management</p>
                        <p className="my-4">2023 Sep - 2023-Dec</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education