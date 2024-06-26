import React from 'react'
import { BsBoxSeam, BsBuilding, BsGithub, BsGlobe, BsLinkedin, BsPerson, BsPersonGear } from "react-icons/bs";

const Experience = () => {
  return (
    <div className='md:px-10 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex "><BsPersonGear /><span className=' italic pl-2 font-semibold'>Experience </span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="my-8 md:my-0">
                <div className="md:flex">
                    <img className='rounded h-40' src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4" alt="" />
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">The JKCSS - CSS Framework</p>
                        <p className="">First Utility-First Dynamic CSS Framework in Sri Lanka</p>
                        <p className="font-semibold text-[#00A0DF]">Founder and CEO</p>
                        <p className="my-4">2023-May - Present</p>
                        <p className="">Skills : CSS, SCSS, Framework Development</p>
                        <p className="flex my-4">
                            <a href="https://github.com/JKCSS-CSS-Framework" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsGithub />
                            </a>
                            <a href="https://jkcss-css-framework.github.io/JKCSS-Framework/site/content/docs/" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsGlobe />
                            </a>
                            <a href="https://www.linkedin.com/company/jkcss/posts/?feedView=all" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsLinkedin />
                            </a>
                            <a href="https://www.npmjs.com/package/@jehankandy/jkcss" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsBoxSeam />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr className='md:hidden block border border-[#00A0DF] w-3/4'/>

            <div className="my-8 md:my-0">
                <div className="md:flex">
                    <img className='rounded h-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrWK2Xy0aPb4uwGsCnwn-YJuTKpLX1ptdYwACjaCvSQ&s" alt="" />
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">National Institute of Fundamental Studies (NIFS)</p>
                        <p className="">Hanthana Rd, Kandy, Sri Lanka</p>
                        <p className="font-semibold text-[#00A0DF]">Volunteer Research Assistant, Software Development Intern</p>
                        <p className="my-4">2024-Feb - Present</p>
                        <p className="">Skills : Nodejs, Reactjs, Mysql, TailwindCSS</p>
                    </div>
                </div>
            </div>

            <hr className='md:hidden block border border-[#00A0DF] w-3/4'/>

            <div className="my-8 md:my-0">
                <div className="md:flex">
                    <img className='rounded h-40' src="https://avatars.githubusercontent.com/u/167443241?s=200&v=4" alt="" />
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">The React-JKCSS - CSS Framework</p>
                        <p className="">First React Support CSS Framework in Sri Lanka</p>
                        <p className="font-semibold text-[#00A0DF]">Founder and CEO</p>
                        <p className="my-4">2024-April - Present</p>
                        <p className="">Skills : CSS, SCSS, Framework Development</p>
                        <p className="flex my-4">
                            <a href="https://github.com/React-JKCSS" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsGithub />
                            </a>
                            <a href="https://www.linkedin.com/company/react-jkcss/" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsLinkedin />
                            </a>
                            <a href="https://www.npmjs.com/package/@jehankandy/react-jkcss" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsBoxSeam />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr className='md:hidden block border border-[#00A0DF] w-3/4'/>



            <div className="my-8 md:my-0">
                <div className="md:flex">
                    <img className='rounded h-40' src="https://avatars.githubusercontent.com/u/168010528?s=200&v=4" alt="" />
                    <div className="md:mx-8 md:my-0 my-2">
                        <p className="md:text-2xl text-xl text-[#00A0DF]">The JKReact Icons - Icons</p>
                        <p className="">First React Support Icons</p>
                        <p className="font-semibold text-[#00A0DF]">Founder and CEO</p>
                        <p className="my-4">2024-April - Present</p>
                        <p className="">Skills : CSS, SCSS, Framework Development, NPM</p>
                        <p className="flex my-4">
                            <a href="https://github.com/JKReact-Icons" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsGithub />
                            </a>
                            <a href="https://www.linkedin.com/company/jkreact-icons/" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsLinkedin />
                            </a>
                            <a href="https://www.npmjs.com/package/@jehankandy/jkreact-icons" className='px-2 text-xl text-[#00A0DF]' target='_blank'>
                                <BsBoxSeam />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr className='md:hidden block border border-[#00A0DF] w-3/4'/>









        </div>
    </div>
  )
}

export default Experience