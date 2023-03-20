import React from 'react'
import Deletecourse from '../../components/Button/Deletecourse'
import CourseStudenttable from '../../components/Table/CourseStudenttable'
import Student_popup from '../../components/Button/Student_popup'
function Admin_course_detail() {
  return (
    
    <div className='border bg-gray-200 min-h-screen'>
        <h1 className=' mt-3 ml-3 text-4xl'>ข้อมูลรายวิชา</h1>
        <div className=' flex flex-row-reverse'>
            <div className='mr-3'>
                <Deletecourse/>
            </div>
        </div>
        <div>
            {/* detail */}
        </div>
        <div className=' flex flex-row-reverse'>
            <div className='mr-3'>
                <Student_popup></Student_popup>
            </div>
        </div>
        <p className='ml-3'>รายชื่อนิสิต</p>
        <div>
            <CourseStudenttable/>
        </div>
    </div>
    
  )
}

export default Admin_course_detail