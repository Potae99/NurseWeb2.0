import React from 'react'
import CourseStudenttable from '../../components/Table/CourseStudenttable'
import StudentPopup from '../../components/Button/StudentPopup'

function AdminCourseDetail() {
  return (
    
    <div className='border bg-gray-200 min-h-screen'>
        <h1 className=' mt-3 ml-3 text-4xl'>ข้อมูลรายวิชา</h1>
        <div className=' flex flex-row-reverse'>
            <div className='mr-3'>
                
            </div>
        </div>
        <div>
            {/* detail */}
        </div>
        <div className=' flex flex-row-reverse'>
            <div className='mr-3'>
                <StudentPopup></StudentPopup>
            </div>
        </div>
        <p className='ml-3'>รายชื่อนิสิต</p>
        <div>
            <CourseStudenttable/>
        </div>
    </div>
    
  )
}

export default AdminCourseDetail