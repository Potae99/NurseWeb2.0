import React from 'react'
import Coursetable from '../../components/Table/Coursetable'
import Deletebutton from '../../components/Button/Deletebutton'


function Curriculum_detail() {
  return (
    
    <div className='border bg-gray-200 min-h-screen' >
        <h1 className=' mt-3 ml-3 text-left text-4xl'>ข้อมูลหลักสูตร</h1>
        <div className='flex flex-row-reverse '>
            <div className=' mr-3'>
                <Deletebutton></Deletebutton>
            </div>

        </div>
        <div className=' ml-3'>
          <p>ชื่อ</p>
          <p>ชื่ออังกฤษ</p>
          <p>ปีที่สร้าง</p>
          <p>เริ่มต้นหลักสูตร</p>
          <p>สิ้นสุดหลักสูตร</p>

        </div>
        <p  className='mt-3 ml-3 text-left text-2xl'>รายวิชา</p>
        <Coursetable></Coursetable>


    </div>
   
  )
}

export default Curriculum_detail