import React from 'react'
import MyImg from '../assets/MyImg.jpg'

const HomePage = () => {
    const styles = {
        background: `linear-gradient(to right, #011120, rgba(0,0,0,0.4)), url(${MyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div>
        <div className="md:grid grid-cols-2">
            <div className="bg-[#011120]">
                
            </div>
            <div className="py-10 px-12 h-screen" style={styles}>
            </div>
        </div>
    </div>
  )
}

export default HomePage