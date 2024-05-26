import React from 'react'
import { BsActivity, BsGithub, BsGlobe, BsStarFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className='md:px-20 px-8 md:py-24 py-12 bg-[#081B28] text-white'>
        <h1 className="md:text-2xl text-2xl text-[#00A0DF] font-semibold flex"> <BsActivity /> <span className=' italic pl-2 font-semibold'>Skills</span></h1>
        <div className="my-12 md:grid grid-cols-3 gap-4 md:mx-16">
            <div className="bg-gray-800 py-4 px-8 rounded">
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
                        <tr>
                            <td>Gitub Repositories</td>
                            <td className='pl-4'>
                                <a href="" target='_blank'>
                                    <p className="text-[#00A0DF]">View Repositories</p>
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