import React from 'react'
import { BsEnvelope, BsGithub, BsLinkedin, BsMailbox, BsPersonLinesFill, BsWhatsapp } from 'react-icons/bs'

const ContactMe = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsPersonLinesFill /><span className=' italic pl-2 font-semibold'>Contact Me</span></h1>
        <div className="flex justify-between md:mx-16 my-4">
            <h1 className="text-[#00A0DF]"><BsEnvelope className='h-20 w-auto'/></h1>
            <h1 className="text-[#00A0DF]"><BsLinkedin className='h-20 w-auto'/></h1>
            <h1 className="text-[#00A0DF]"><BsGithub className='h-20 w-auto'/></h1>
            <h1 className="text-[#00A0DF]"><BsWhatsapp className='h-20 w-auto'/></h1>
        </div>

    </div>
  )
}

export default ContactMe