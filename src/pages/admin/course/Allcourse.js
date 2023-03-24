import React from 'react'
import Addcoursebutton2 from '../../../components/Button/Addcoursebutton2'
import Allcoursetable from '../../../components/Table/Allcoursetable'
import Addcategorybuton from '../../../components/Button/Addcategorybuton'

function Allcourse() {
  return (
   
    <div className=' bg-white min-h-screen'>
        <h1 className=' text-center text-4xl'>COURSE</h1>
        
        <div className='flex flex-row-reverse'>
            <div className=' mr-3 '>
                <Addcoursebutton2/>
            </div>
            <div className=' mr-3 '>
                <Addcategorybuton/>
            </div>
        </div>
        <p className=' ml-3'>รายวิชา</p>
        <div className='mt-3'>
        <Allcoursetable></Allcoursetable>
        </div>

    </div>
    
  )
}

export default Allcourse