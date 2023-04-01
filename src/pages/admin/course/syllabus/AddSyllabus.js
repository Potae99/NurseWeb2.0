import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import LoadingPage from '../../../LoadingPage';

function AddSyllabus() {
    const [syllabusName, setsyllabusName] = useState("");
    const [syllabusDate, setsyllabusDate] = useState("");
    const [startUse, setstartUse] = useState("");
    const [endUse, setendUse] = useState("");
    const [detail, setdetail] = useState("");

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 700,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const addSyllabus = () => {

        axios.post(process.env.REACT_APP_API_URL + "/course/syllabus", {
            syllabusName: syllabusName,
            syllabusDate: syllabusDate,
            startUse: startUse,
            endUse: endUse,
            detail: detail

        }).then(() => {
            setData([
                ...data,
                {
                    syllabusName: syllabusName,
                    syllabusDate: syllabusDate,
                    startUse: startUse,
                    endUse: endUse,
                    detail: detail
                }
            ])
            Toast.fire({
                icon: 'success',
                title: 'Add Syllabus success'
            })
                .then(() => { window.location.href = "/admin/course/syllabus/adminsyllabus"; })

        })
    }

    const backToAdminSyllabus = () => {
        window.location.href = "/admin/course/syllabus/adminsyllabus"
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);

            setTimeout(() => {
                setCompleted(true);
            }, 1000);
        }, 2000);
    }, [])


    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className=' text-black min-h-screen'>
                    <h1 className=' text-center text-4xl'>เพิ่มหลักสูตร</h1>
                    <div className='container mx-auto'>
                        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                            <div ><p>ชื่อไทย</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setsyllabusName(event.target.value)
                                        }}
                                        type="text"
                                        name="syllabusName"
                                        placeholder="ชื่อหลักสูตร"
                                        className="w-full rounded-md border border-while bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ปีที่สร้าง</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setsyllabusDate(event.target.value)
                                        }}
                                        type="date"
                                        name="syllabusDate"
                                        placeholder="ระยะเวลาหลักสูตร"
                                        className="w-full rounded-md border border-while bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ระยะเวลาเริ่มหลักสูตร</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setstartUse(event.target.value)
                                        }}
                                        type="date"
                                        name="startUse"
                                        placeholder="ระยะเวลาเริ่มหลักสูตร"
                                        className="w-full rounded-md border border-while bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ระยะเวลาสิ้นสุดหลักสูตร</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setendUse(event.target.value)
                                        }}
                                        type="date"
                                        name="endUse"
                                        placeholder="ระยะเวลาสิ้นสุดหลักสูตร"
                                        className="w-full rounded-md border border-while bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>รายละเอียด</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setdetail(event.target.value)
                                        }}
                                        type="text"
                                        name="detail"
                                        placeholder="รายละเอียด"
                                        className="w-full rounded-md border border-while  bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-3 grid grid-cols-2 '>
                        <div className=' ml-3'>
                            <button onClick={backToAdminSyllabus} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>

                        </div>
                        <div className=' absolute right-0 mr-3'>
                            <button onClick={addSyllabus} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                    <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">บันทึก</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default AddSyllabus