import React from 'react'
import Addcoursebutton from '../../components/Button/Addcoursebutton';

function Admin_addcuriculum() {

    const inputform_data = [
        {
            Head: 'ชื่อหลักสูตร',
            type: 'Cname',
            id: 'Cname',
            placeholder: 'ชื่อหลักสูตร'
        },
        {
            Head: 'ปีที่สร้าง',
            type: 'Byear',
            id: 'Byear',
            placeholder: 'ปีที่สร้างหลักสูตร'
        },
        {

            Head: 'ระยะเวลาเริ่ม',
            type: 'Start_year',
            id: 'Start_year',
            placeholder: 'ระยะเวลาเริ่มหลักสูตร'
        },
        {
            Head: 'ระยะเวลาสิ้นสุด',
            type: 'End_year',
            id: 'End_year',
            placeholder: 'ระยะเวลาสิ้นสุดหลักสูตร'
        },
        {
            Head: 'คำอธิบาย',
            type: 'course_description',
            id: 'course_description',
            placeholder: 'คำอธิบายหลักสูตร'
        },
    ];
    const course_id = [
        {
            course_id: 31051,
            value: '31051'

        },
        {
            course_id: 31052,
            value: '31052'

        },
        {
            course_id: 31053,
            value: '31053'

        },
        {
            course_id: 31054,
            value: '31054'

        },

    ]


    return (
        <div className='border bg-gray-200 min-h-screen'>
            <h1 className=' text-center text-4xl'>เพิ่มหลักสูตร</h1>
            <div className='container mx-auto'>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                    {inputform_data.map((inputform_data, index) => (
                        <div >
                            <p>{inputform_data.Head}</p>
                            <div class="mb-5 flex justify-center ">
                                <input
                                    type={inputform_data.type}
                                    name={inputform_data.name}
                                    id={inputform_data.id}
                                    placeholder={inputform_data.placeholder}
                                    class="w-full rounded-md border border-while (condition) {
                            } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                <div className=' flex flex-row'>
                <p className=' text-2xl ml-3' >รายวิชา</p>
                <select className='block ml-3  w-1/4 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="course_id" id="course_id">
                    {course_id.map((course_id, index) => (
                        <option value={course_id.value}>{course_id.course_id}</option>
                    ))}
                </select>
                </div>
                <div className=' absolute right-0 mr-3'>
                <Addcoursebutton></Addcoursebutton>
                </div>
            </div>
            


        </div>
    )
}

export default Admin_addcuriculum