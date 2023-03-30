import React from 'react'

function Addcuriculumbutton() {
  return (
    <a href="/admin/course/syllabus/Add" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-300 group-hover:h-full"></span>
      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มหลักสูตร</span>
    </a>
  )
}

export default Addcuriculumbutton