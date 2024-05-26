import React from 'react'

const AboutMe = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-6xl text-2xl text-center text-[#00A0DF] font-semibold">About Me</h1>
        <div className="md:grid grid-cols-2 gap-4 md:my-8 my-2">
            <div className="my-12">
                <div className="">
                    <div className="">
                        <center>
                            <img src="https://avatars.githubusercontent.com/u/111488170?s=200&v=4" alt="" className='rounded md:h-80 h-40'/>
                            <p className="py-4 text-xl">First Utility-First Dynamic CSS Framework in Sri Lanka</p>
                            <p className="text-[#00A0DF] font-semibold text-3xl">JKCSS</p>
                        </center>
                    </div>
                </div>
            </div>
            <hr className='md:hidden block border border-[#00A0DF]'/>
            <div className="my-4"> 
                <h1 className="md:text-4xl text-xl">Hi, <span className='text-[#00A0DF] italic'>I am Jehan Weerasuriya</span></h1>
                <p className="md:text-xl my-8">
                    I am Frontend && Backend Developer, and also I am the Founder and CEO of the First CSS Framework in Sri Lanka and, the Founder and CEO of React-JKCSS, which is the First CSS Framework Developed in Sri Lanka that supports React js also the Founder and CEO of the JKReact-Icons Which supports React web development.
                </p>
                <p className="md:text-xl my-8">
                    I know about javascript, PHP, and also expert in HTML, and CSS. According to the Frontend CSS Frameworks, I am an expert in Bootstrap and Tailwind CSS, 
                </p>
                <p className="md:text-xl my-8">
                    Also, I am an expert in Reactjs as a Frontend development Framework and Node.js as Backend Development Framework, and also, I have intermediate-level development knowledge in vue.js
                </p>
                <p className="md:text-xl my-8">
                    According to NPM Package Development, I have intermediate-level development knowledge, because I already developed some npm packages for React.js and Node.js
                </p>
                <p className="md:text-xl my-8">
                    And also, developed my own Frontend Development CSS Framework called JKCSS, it is the First CSS Framework developed in Sri Lanka, and also, I also converted it to Reactjs and called as React-JKCSS.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe