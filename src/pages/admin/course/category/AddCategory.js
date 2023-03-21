import React from 'react'
import axios from 'axios'
import { useState } from 'react';


function AddCategory() {
  const [categoryName, setcategoryName] = useState("");
  const [data, setData] = useState([]);

  const addcategory = () => {

    axios.post(process.env.REACT_APP_API_URL + "/course/category", {
      categoryName: categoryName

    }).then(() => {
      setData([
        ...data,
        {
          categoryName: categoryName
        }
      ])
      window.location.href = "/";
    })
  }




  return (
    <div className='border bg-gray-200 min-h-screen'>
      <h1 className=' text-center text-4xl'>เพิ่มหมวดหมู่วิชา</h1>
      <div className='container mx-auto'>
        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
          <div >
            <p>ชื่อหมวดหมู่</p>
            <div class="mb-5 flex justify-center ">
              <input
                onChange={(event) => {
                  setcategoryName(event.target.value)
                }}
                type="text"
                name="categoryName"
                placeholder="ชื่อหมวดหมู่"
                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
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
          <button onClick={addcategory} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
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

export default AddCategory