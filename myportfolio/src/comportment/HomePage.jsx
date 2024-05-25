import React from 'react'
import MyImg from '../assets/MyImg.jpg'

const HomePage = () => {
    const styles = {
        background: `linear-gradient(to right, #081B28, rgba(0,0,0,0.4)), url(${MyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div>
        <div className="md:grid grid-cols-2">
            <div className="hidden md:block bg-[#081B28] text-white pb-40 over-flow-hidden px-16">
                <div className="mx-16">
                    <h1 className="md:mt-40 md:text-[70px] font-semibold">Jehan Weerasuriya</h1>
                    <p className="text-4xl text-blue-500 font-semibold">Frontend && Backend Web Developer</p>
                    <p className="">I am the Founder and CEO of the First CSS Framework in Sri Lanka and, the Founder and CEO of React-JKCSS, which is the First CSS Framework Developed in Sri Lanka that supports React js also the Founder and CEO of the JKReact-Icons Which supports React web development.</p>
                </div>
            </div>
            <div className="py-10 px-6 h-screen" style={styles}>
                <div className="md:hidden block my-40">
                    <h1 className="text-3xl font-semibold text-white py-1">Jehan Weerasuriya</h1> 
                    <p className="text-md text-blue-500 font-semibold">Frontend && Backend Web Developer</p>                   
                    <p className="text-sm text-white">Founder and CEO at First Sri Lankan CSS Framework</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage