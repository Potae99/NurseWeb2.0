import React from 'react'
import Curriculumtable from '../../../../components/Table/Curriculumtable';
import Addcuriculumbutton from '../../../../components/Button/Addcuriculumbutton';


function AdminSyllabus() {
  return (
    
    <div className='  bg-white min-h-screen'>
      <h1 className=' text-black text-center text-4xl mt-3'>จัดการหลักสูตร</h1>
      <div className=' flex flex-row-reverse'>
        <div className=' mr-3 mt-3'>
          <Addcuriculumbutton></Addcuriculumbutton>
        </div>
      </div>
      <p className=' text-black ml-3'>หลักสูตร</p>
      <div className=' mt-3'>
        <Curriculumtable></Curriculumtable>
      </div>
      
    </div>
    
  )
}

export default AdminSyllabus