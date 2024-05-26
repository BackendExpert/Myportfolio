import React from 'react'
import MyImg from '../assets/MyImg.jpg'
import { BsGithub } from "react-icons/bs";

const HomePage = () => {
    const styles = {
        background: `linear-gradient(to right, #081B28, rgba(0,0,0,0.4)), url(${MyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const styles1 = {
        background: `linear-gradient(to right, #081B28, rgba(0,0,0,0.8)), url(${MyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div>
        <div className="md:grid grid-cols-2">
            <div className="hidden md:block bg-[#081B28] text-white pb-40 over-flow-hidden px-16">
                <div className="mx-16 my-64">
                    <h1 className="md:mt-40 md:text-[70px] font-semibold">Jehan Weerasuriya</h1>
                    <p className="text-4xl text-blue-500 font-semibold">Frontend && Backend Web Developer</p>
                    <p className="text-xl my-8">I am the Founder and CEO of the First CSS Framework in Sri Lanka and, the Founder and CEO of React-JKCSS, which is the First CSS Framework Developed in Sri Lanka that supports React js also the Founder and CEO of the JKReact-Icons Which supports React web development.</p>
                    <div className="my-4 flex">
                        <a href="">
                            <button className='flex text-xl bg-blue-500 text-black py-4 px-8 rounded-md '>
                                <BsGithub />
                                <p className="pl-2 font-semibold">On Gitub</p>
                            </button>
                        </a>
                        <a href="">
                            <button className='mx-2 flex text-xl text-blue-500 border-2 border-blue-500 py-4 px-8 rounded-md duration-500 hover:bg-blue-500 hover:text-black'>
                                <p className="pl-2 font-semibold">My Works</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:block hidden py-10 px-6 h-screen" style={styles}>
            </div>
            <div className='md:hidden block py-10 px-6 h-screen' style={styles1}>
                <div className="md:hidden block my-40">
                    <h1 className="text-3xl font-semibold text-white py-1">Jehan Weerasuriya</h1> 
                    <p className="text-md text-blue-500 font-semibold">Frontend && Backend Web Developer</p>                   
                    <p className="text-sm text-white my-4">I am the Founder and CEO of the First CSS Framework in Sri Lanka and, the Founder and CEO of React-JKCSS, which is the First CSS Framework Developed in Sri Lanka that supports React js also the Founder and CEO of the JKReact-Icons Which supports React web development.</p>
                    <div className="my-4 flex">
                        <a href="">
                            <button className='flex text-xl bg-blue-500 text-black py-4 px-8 rounded-md '>
                                <BsGithub />
                                <p className="pl-2 font-semibold">On Gitub</p>
                            </button>
                        </a>
                        <a href="">
                            <button className='mx-2 flex text-xl text-blue-500 border-2 border-blue-500 py-4 px-8 rounded-md duration-500 hover:bg-blue-500 hover:text-black'>
                                <p className="pl-2 font-semibold">My Works</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage