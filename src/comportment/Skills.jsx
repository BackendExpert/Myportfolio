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
                        <p className="py-4">Level: <span className='text-green-600'>Advanced</span> </p>
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
                        <p className="py-4">Level: <span className='text-green-600'>Advanced</span> </p>
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
                        <p className="py-4">Level: <span className='text-green-600'>Advanced</span> </p>
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




            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">React.js</p>
                        <p className="py-4">Level: <span className='text-green-600'>Advanced</span> </p>
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
                                <a href="https://github.com/TeamProjectsReact/Dating-App" target='_blank'>
                                    <p className="text-[#00A0DF]">Dating App, </p>
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
                                <a href="https://www.npmjs.com/package/@jehankandy/jkreact-icons" target='_blank'>
                                    <p className="text-[#00A0DF]">JKreact Icons</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">Node.js</p>
                        <p className="py-4">Level: <span className='text-green-600'>Advanced</span> </p>
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
                                <a href="https://github.com/TeamProjectsReact/Dating-App" target='_blank'>
                                    <p className="text-[#00A0DF]">Dating App, </p>
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
                                <a href="https://www.npmjs.com/package/@jehankandy/jkreact-icons" target='_blank'>
                                    <p className="text-[#00A0DF]">JKreact Icons</p>
                                </a>
                                <a href="https://www.npmjs.com/package/jkmysql-easy" target='_blank'>
                                    <p className="text-[#00A0DF]">JKmysql Easy</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">MySQL</p>
                        <p className="py-4">Level: <span className='text-green-600'>Advanced</span> </p>
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
                                <a href="https://github.com/TeamProjectsReact/Dating-App" target='_blank'>
                                    <p className="text-[#00A0DF]">Dating App, </p>
                                </a>
                            </td>                            
                        </tr>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>NPM Packages</td>
                            <td className='pl-4'>
                                <a href="https://www.npmjs.com/package/jkmysql-easy" target='_blank'>
                                    <p className="text-[#00A0DF]">JKmysql Easy</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>



            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">Tailwind CSS</p>
                        <p className="py-4">Level: <span className='text-green-600'>Advanced</span> </p>
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
                                <a href="https://github.com/TeamProjectsReact/Dating-App" target='_blank'>
                                    <p className="text-[#00A0DF]">Dating App, </p>
                                </a>
                            </td>                            
                        </tr>
                    </table>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://seeklogo.com/images/N/npm-logo-F0E1FE956F-seeklogo.com.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">NPM Development</p>
                        <p className="py-4">Level: <span className='text-yellow-600'>Intermediate</span> </p>
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
                            <td>NPM Packages</td>
                            <td className='pl-4'>
                                <a href="https://www.npmjs.com/package/@jehankandy/jkcss" target='_blank'>
                                    <p className="text-[#00A0DF]">JKCSS</p>
                                </a>
                                <a href="https://www.npmjs.com/package/@jehankandy/react-jkcss" target='_blank'>
                                    <p className="text-[#00A0DF]">React-JKCSS</p>
                                </a>
                                <a href="https://www.npmjs.com/package/@jehankandy/jkreact-icons" target='_blank'>
                                    <p className="text-[#00A0DF]">JKreact Icons</p>
                                </a>
                                <a href="https://www.npmjs.com/package/jkmysql-easy" target='_blank'>
                                    <p className="text-[#00A0DF]">JKmysql Easy</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">Bootstrap CSS</p>
                        <p className="py-4">Level: <span className='text-yellow-600'>Intermediate</span> </p>
                    </div>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://www.svgrepo.com/show/303656/php-logo.svg" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">PHP</p>
                        <p className="py-4">Level: <span className='text-yellow-600'>Intermediate</span> </p>
                    </div>
                </div>
                <div className="md:my-8 my-4">
                    <h1 className="md:text-2xl text-xl text-red-600">Proof of Skill</h1>
                    <table border={0} className='my-4'>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Gitub Repositories</td>
                            <td className='pl-4'>
                                <a href="https://github.com/BackendExpert?tab=repositories&q=&type=&language=php" target='_blank'>
                                    <p className="text-[#00A0DF]">View Repositories</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">Vue.js</p>
                        <p className="py-4">Level: <span className='text-yellow-600'>Basic</span> </p>
                    </div>
                </div>
                <div className="md:my-8 my-4">
                    <h1 className="md:text-2xl text-xl text-red-600">Proof of Skill</h1>
                    <table border={0} className='my-4'>
                        <tr className='border-b border-[#00A0DF]'>
                            <td>Gitub Repositories</td>
                            <td className='pl-4'>
                                <a href="https://github.com/BackendExpert?tab=repositories&q=&type=&language=vue" target='_blank'>
                                    <p className="text-[#00A0DF]">View Repositories</p>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">Laravel</p>
                        <p className="py-4">Level: <span className='text-yellow-600'>Basic</span> </p>
                    </div>
                </div>
            </div>


            <div className="bg-gray-800 py-4 px-8 rounded  md:my-0 my-4">
                <div className="flex">
                    <img src="https://cdn.icon-icons.com/icons2/2415/PNG/96/mongodb_plain_wordmark_logo_icon_146423.png" alt="" className='md:h-28 h-16 rounded'/>
                    <div className="mx-5 md:mx-10 md:text-2xl text-xl">
                        <p className="">MongoDB</p>
                        <p className="py-4">Level: <span className='text-yellow-600'>Basic</span> </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills