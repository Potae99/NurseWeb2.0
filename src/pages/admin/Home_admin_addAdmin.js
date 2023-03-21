import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Home_admin_addAdmin() {
  const [IDnumber, setIDnumber] = useState("");
  const [nameTH, setnameTH] = useState("");
  const [nameENG, setnameENG] = useState("");
  const [password, setpassword] = useState("");

  const [data, setData] = useState([]);
  const BacktoHomeAdmin = () => {
    window.location.href = '/';
  }
  const addAdmin = () => {
    axios.post(process.env.REACT_APP_API_URL + "/admin", {
      IDnumber: IDnumber,
      nameTH: nameTH,
      nameENG: nameENG,
      password: password,

    }).then(() => {
      setData([
        ...data, {
          IDnumber: IDnumber,
          nameTH: nameTH,
          nameENG: nameENG,
          password: password,

        }
      ])
    })


  }
  return (
    <div className=' bg-gray-200 slate-500 min-h-screen border'>
      <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
      <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
        {/* <div className=' flex flex-row'>
          <p className=' text-2xl ml-3' >ผู้ใช้งาน</p>
          <select className='block ml-3  w-1/4 p-2 mb-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' name="course_id" id="course_id">
              {Role.map((Role, index) => (
                  <option value={Role.value}>{Role.role}</option>
              ))}
          </select>
      </div> */}
      </div>
      <div className='container mx-auto'>
        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
          <div >
            <p>รหัสบัตรประชาชน</p>
            <div class="mb-5 flex justify-center ">
              <input
                onChange={(event) => {
                  setIDnumber(event.target.value)
                }}
                type="text"
                name="Idnumber"
                placeholder="รหัสบัตรประชาชน"
                class="w-full rounded-md border border-while (condition) {
          } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
              />
            </div>
          </div>
          <div >
            <p>ชื่อไทย</p>
            <div class="mb-5 flex justify-center ">
              <input
                onChange={(event) => {
                  setnameTH(event.target.value)
                }}
                type="text"
                name="nameTH"
                placeholder="ชื่อไทย"
                class="w-full rounded-md border border-while (condition) {
          } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
              />
            </div>
          </div>
          <div >
            <p>ชื่ออังกฤษ</p>
            <div class="mb-5 flex justify-center ">
              <input
                onChange={(event) => {
                  setnameENG(event.target.value)
                }}
                type="text"
                name="nameENG"
                placeholder="ชื่ออังกฤษ"
                class="w-full rounded-md border border-while (condition) {
          } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
              />
            </div>
          </div>
          <div >
            <p>รหัสผ่าน</p>
            <div class="mb-5 flex justify-center ">
              <input
                onChange={(event) => {
                  setpassword(event.target.value)
                }}
                type="text"
                name="password"
                placeholder="รหัสผ่าน"
                class="w-full rounded-md border border-while (condition) {
          } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
      <div className='  grid grid-cols-2 '>
        {/* <div className=' ml-3'>
          <Backbutton></Backbutton>
      </div> */}
        <div className=' ml-3'>
          <button onClick={BacktoHomeAdmin} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
            <span class="relative invisible">Button Text</span>
          </button>
        </div>
        <div className=' absolute right-0 mr-3'>
          <button onClick={addAdmin} href="home_admin" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
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


export default Home_admin_addAdmin