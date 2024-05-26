import React from 'react'
import { BsActivity, BsGithub, BsGlobe, BsStarFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex"> <BsActivity /> <span className=' italic pl-2 font-semibold'>Skills</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="bg-gray-800 py-4 px-8 rounded md:my-0 my-4">
                <div className="flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">Javascript</p>
                        <p className="py-4">Level: <span className='text-green-600'>Expert</span> </p>
                    </div>
                </div>
                <div className="md:my-8 my-4">
                    <h1 className="md:text-2xl text-xl text-red-600">Proof of Skill</h1>
                    <table border={0} className='my-4'>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Gitub Repositories</td>
                            <td className='pl-4'>
                                <a href="https://github.com/BackendExpert?tab=repositories&q=&type=&language=javascript&sort" target='_blank'>
                                    <p className="text-[#00A0DF]">View Repositories</p>
                                </a>
                            </td>
                        </tr>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Industrial Experiences</td>
                            <td className='pl-4'>
                                <a href="https://www.linkedin.com/in/jehan-weerasuriya-23a3a4223/" target='_blank'>
                                    <p className="text-[#00A0DF]">Software Development Intern at NIFS</p>
                                </a>
                            </td>
                        </tr>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Projects</td>
                            <td className='pl-4'>
                                <a href="https://www.linkedin.com/in/jehan-weerasuriya-23a3a4223/details/projects/" target='_blank'>
                                    <p className="text-[#00A0DF]">ERP System at NIFS, </p>
                                </a>
                                <a href="https://www.linkedin.com/in/jehan-weerasuriya-23a3a4223/details/projects/" target='_blank'>
                                    <p className="text-[#00A0DF]">Library Management System at NIFS, </p>
                                </a>
                                <a href="https://www.linkedin.com/in/jehan-weerasuriya-23a3a4223/details/projects/" target='_blank'>
                                    <p className="text-[#00A0DF]">Advanced University Management System, </p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>





            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">HTML</p>
                        <p className="py-4">Level: <span className='text-green-600'>Expert</span> </p>
                    </div>
                </div>
                <div className="md:my-8 my-4">
                    <h1 className="md:text-2xl text-xl text-red-600">Proof of Skill</h1>
                    <table border={0} className='my-4'>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Gitub Repositories</td>
                            <td className='pl-4'>
                                <a href="https://github.com/BackendExpert?tab=repositories&q=&type=&language=html" target='_blank'>
                                    <p className="text-[#00A0DF]">View Repositories</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://e7.pngegg.com/pngimages/603/759/png-clipart-css3-cascading-style-sheets-logo-html-world-wide-web-blue-angle-thumbnail.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">CSS</p>
                        <p className="py-4">Level: <span className='text-green-600'>Expert</span> </p>
                    </div>
                </div>
                <div className="md:my-8 my-4">
                    <h1 className="md:text-2xl text-xl text-red-600">Proof of Skill</h1>
                    <table border={0} className='my-4'>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Projects</td>
                            <td className='pl-4'>
                                <a href="https://github.com/JKCSS-CSS-Framework" target='_blank'>
                                    <p className="text-[#00A0DF]">JKCSS</p>
                                </a>
                                <a href="https://github.com/React-JKCSS" target='_blank'>
                                    <p className="text-[#00A0DF]">React-JKCSS</p>
                                </a>
                            </td>
                        </tr>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Experiences</td>
                            <td className='pl-4'>
                                <a href="https://www.linkedin.com/company/jkcss/posts/?feedView=all" target='_blank'>
                                    <p className="text-[#00A0DF]">JKCSS</p>
                                </a>
                                <a href="https://www.linkedin.com/company/react-jkcss/" target='_blank'>
                                    <p className="text-[#00A0DF]">React-JKCSS</p>
                                </a>
                            </td>
                        </tr>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>NPM Packages</td>
                            <td className='pl-4'>
                                <a href="https://www.npmjs.com/package/@jehankandy/jkcss" target='_blank'>
                                    <p className="text-[#00A0DF]">JKCSS</p>
                                </a>
                                <a href="https://www.npmjs.com/package/@jehankandy/react-jkcss" target='_blank'>
                                    <p className="text-[#00A0DF]">React-JKCSS</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills