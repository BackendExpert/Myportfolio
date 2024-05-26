import React from 'react'
import { BsEnvelope, BsGithub, BsLinkedin, BsMailbox, BsPersonLinesFill, BsWhatsapp } from 'react-icons/bs'

const ContactMe = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsPersonLinesFill /><span className=' italic pl-2 font-semibold'>Contact Me</span></h1>
        <div className="md:flex justify-between md:mx-16 my-4md:my-0 my-4">
            <div className="md:block flex">
                <a href="mailto:jehankandy@gmail.com">
                    <h1 className="md:my-0 my-8 text-[#00A0DF]"><BsEnvelope className='md:h-20 h-10 w-auto'/></h1>
                </a>
                <p className="md:mt-0 mt-10 md:ml-0 ml-4">jehankandy@gmail.com</p>
            </div>
            <div className="md:block flex">
                <a href="https://www.linkedin.com/in/jehan-weerasuriya-23a3a4223/" target='_blank'>
                    <h1 className="md:my-0 my-8 text-[#00A0DF]"><BsLinkedin className='md:h-20 h-10 w-auto'/></h1>
                </a>
                <p className="md:mt-0 mt-10 md:ml-0 ml-4">Jehan Weerasuriya</p>
            </div>
            <div className="md:block flex">
                <a href="https://github.com/BackendExpert" target='_blank'>
                <h1 className="md:my-0 my-8 text-[#00A0DF]"><BsGithub className='md:h-20 h-10 w-auto'/></h1>
                </a>                
                <p className="md:mt-0 mt-10 md:ml-0 ml-4">github.com/BackendExpert</p>
            </div>
            <div className="md:block flex">
                <a href="https://wa.me/+94711758851" target='_blank'>
                    <h1 className="md:my-0 my-8 text-[#00A0DF]"><BsWhatsapp className='md:h-20 h-10 w-auto'/></h1>
                </a>
                <p className="md:mt-0 mt-10 md:ml-0 ml-4">+94 711758851</p>
            </div>        
            
        </div>

    </div>
  )
}

export default ContactMe