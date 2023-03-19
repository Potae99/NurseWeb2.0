import React from 'react'
import Addcoursebutton from '../../components/Button/Addcoursebutton';
import Coursetable from '../../components/Table/Coursetable';

function AdminAddCurriculum() {

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

        }

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
            <Coursetable></Coursetable>

            <div className=' mt-3 grid grid-cols-2 '>
                <div className=' ml-3'>
                    <a href="admin_syllabus" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                        <span class="relative invisible">Button Text</span>
                    </a>

                </div>
                <div className=' absolute right-0 mr-3'>
                    <button class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" stroke-width="3.18" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">บันทึก</span>
                        <span class="relative invisible">Button Text</span>
                    </button>
                </div>
            </div>




        </div>
    )
}

export default AdminAddCurriculum