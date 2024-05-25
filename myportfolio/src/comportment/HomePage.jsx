import React from 'react'
import MyImg from '../assets/MyImg.jpg'

const HomePage = () => {
  return (
    <div>
        <div className="md:grid grid-cols-2 gap-4">
            <div className="">
                <img src={MyImg} alt="" className='w-full h-full' />
            </div>
        </div>
    </div>
  )
}

export default HomePage