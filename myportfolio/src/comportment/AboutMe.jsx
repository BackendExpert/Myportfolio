import React from 'react'

const AboutMe = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-6xl text-2xl text-center text-[#00A0DF] font-semibold">About Me</h1>
        <div className="md:grid grid-cols-2 gap-4 md:my-8 my-4">
            <div className="">
                <h1 className="text-4xl">Hi, <span className='text-[#00A0DF] italic'>I am Jehan Weerasuriya</span></h1>
            </div>
        </div>
    </div>
  )
}

export default AboutMe