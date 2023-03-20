import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Home_admin_adduser() {
    
    const [categoryID, setcategoryID] = useState("");
    const [courseNameTH, setcourseNameTH] = useState("");
    const [courseNameENG, setcourseNameENG] = useState("");
    const [detail, setdetail] = useState("");
    const [creditStudy, setcreditStudy] = useState("");
    const [studyTimeTheory, setstudyTimeTheory] = useState("");
    const [studyTimePractice, setstudyTimePractice] = useState("");
    const [studyTimeSelf, setstudyTimeSelf] = useState("");
   
    const [data, setData] = useState([]);

    const addCourse = () => {

        axios.post(process.env.REACT_APP_API_URL + "/course", {
            
            categoryID:categoryID,
            courseNameTH:courseNameTH,
            courseNameENG:courseNameENG,
            detail:detail,
            creditStudy:creditStudy,
            studyTimeTheory:studyTimeTheory,
            studyTimePractice:studyTimePractice,
            studyTimeSelf:studyTimeSelf,
            
        }).then(() => {
            setData([
                ...data,
                {

                    categoryID:categoryID,
                    courseNameTH:courseNameTH,
                    courseNameENG:courseNameENG,
                    detail:detail,
                    creditStudy:creditStudy,
                    studyTimeTheory:studyTimeTheory,
                    studyTimePractice:studyTimePractice,
                    studyTimeSelf:studyTimeSelf,
                   
                }
            ])
            window.location.href = "/";
        })
    }

    const BacktoCourse = () => {
        window.location.href = '/';
    }

    return (
        
        <div className=' bg-gray-200 slate-500 min-h-screen border'>
            <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
            </div>
            <div className='container mx-auto'>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                    <div >
                        <p>หมวดหมู่วิชา</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setcategoryID(event.target.value)
                                }}
                                type="text"
                                name="categoryID"
                                placeholder="หมวดหมู่วิชา"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ชื่อไทย</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setcourseNameTH(event.target.value)
                                }}
                                type="text"
                                name="courseNameTH"
                                placeholder="ชื่อไทย"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ชื่ออังกฤษ</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setcourseNameENG(event.target.value)
                                }}
                                type="text"
                                name="courseNameENG"
                                placeholder="ชื่ออังกฤษ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>รายละเอียดวิชา</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setdetail(event.target.value)
                                }}
                                type="text"
                                name="detail"
                                placeholder="รายละเอียดวิชา"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>หน่วยกิต</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setcreditStudy(event.target.value)
                                }}
                                type="text"
                                name="creditStudy"
                                placeholder="หน่วยกิต"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>เวลา</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setstudyTimeTheory(event.target.value)
                                }}
                                type="text"
                                name="studyTimeTheory"
                                placeholder="เวลา"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>เวลาปฎิบัติ</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setstudyTimePractice(event.target.value)
                                }}
                                type="text"
                                name="studyTimePractice"
                                placeholder="เวลาปฎิบัติ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>เวลาศึกษาด้วยตนเอง</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setstudyTimeSelf(event.target.value)
                                }}
                                type="text"
                                name="studyTimeSelf"
                                placeholder="เวลาศึกษาด้วยตนเอง"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='  grid grid-cols-2 '>
                <div className=' ml-3'>
                    <button onClick={BacktoCourse} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                        <span class="relative invisible">Button Text</span>
                    </button>
                </div>
                <div className=' absolute right-0 mr-3'>
                    <button onClick={addCourse} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
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

export default Home_admin_adduser