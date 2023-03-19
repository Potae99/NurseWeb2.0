import React from 'react'
import Addcoursebutton2 from '../../components/Button/Addcoursebutton2'
import Allcoursetable from '../../components/Table/Allcoursetable'

function AdminCourse() {
  return (
    <div className='border bg-gray-200 min-h-screen'>
        <h1 className=' text-center text-4xl'>COURSE</h1>
        
        <div className='flex flex-row-reverse'>
            <div className=' mr-3 '>
                <Addcoursebutton2/>
            </div>
        </div>
        <p className=' ml-3'>รายวิชา</p>
        <div className='mt-3'>
        <Allcoursetable></Allcoursetable>
        </div>

    </div>
  )
}

export default AdminCourse