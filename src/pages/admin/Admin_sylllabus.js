import React from 'react'
import Curriculumtable from '../../components/Table/Curriculumtable';
import Addcuriculumbutton from '../../components/Button/Addcuriculumbutton';



function Admin_sylllabus() {
  return (
    
    <div className=' border bg-gray-300 min-h-screen'>
      <h1 className=' text-center text-4xl mt-3'>SYLLABUS</h1>
      <div className=' flex flex-row-reverse'>
        <div className=' mr-3 mt-3'>
          <Addcuriculumbutton></Addcuriculumbutton>
        </div>
      </div>
      <p className=' ml-3'>หลักสูตร</p>
      <div className=' mt-3'>
        <Curriculumtable></Curriculumtable>
      </div>
      
    </div>
    
  )
}

export default Admin_sylllabus