import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import LoadingPage from '../../LoadingPage';
function AddCourse() {

    const [categoryID, setcategoryID] = useState("");
    const [courseNameTH, setcourseNameTH] = useState("");
    const [courseNameENG, setcourseNameENG] = useState("");
    const [detail, setdetail] = useState("");
    const [creditStudy, setcreditStudy] = useState("");
    const [studyTimeTheory, setstudyTimeTheory] = useState("");
    const [studyTimePractice, setstudyTimePractice] = useState("");
    const [studyTimeSelf, setstudyTimeSelf] = useState("");
    const [courseID_number, setCourseID_number] = useState("");

    const [data, setData] = useState([]);

    const [category, setCategory] = useState([]);

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

    const addCourse = () => {

        axios.post(process.env.REACT_APP_API_URL + "/course", {

            categoryID: categoryID,
            courseNameTH: courseNameTH,
            courseNameENG: courseNameENG,
            detail: detail,
            creditStudy: creditStudy,
            studyTimeTheory: studyTimeTheory,
            studyTimePractice: studyTimePractice,
            studyTimeSelf: studyTimeSelf,
            courseID_number: courseID_number

        }).then(() => {
            setData([
                ...data,
                {

                    categoryID: categoryID,
                    courseNameTH: courseNameTH,
                    courseNameENG: courseNameENG,
                    detail: detail,
                    creditStudy: creditStudy,
                    studyTimeTheory: studyTimeTheory,
                    studyTimePractice: studyTimePractice,
                    studyTimeSelf: studyTimeSelf,
                    courseID_number: courseID_number

                }
            ])
            // Toast.fire({
            //     icon: 'success',
            //     title: 'add course success'
            // })
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "add course success",
                showConfirmButton: false,
                timer: 1000,
              })
                .then(() => { window.location.href = "/admin/course/all"; })

        })
    }

    const BacktoCourse = () => {
        window.location.href = '/admin/course/all';
    }

    const fetchData = () => {
        axios.get(process.env.REACT_APP_API_URL + "/course/category")
            .then(res => {
                // console.log(res.data);

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setCategory(res.data.data);
                setLoading(true);

                setTimeout(() => {
                    setCompleted(true);
                }, 1000);
            })
            .catch(error => {
                // console.log(error.res)
            })
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);

    }, [])

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className=' text-black bg-white slate-500 min-h-screen '>
                    <h1 className=' text-4xl text-center m-3'>เพิ่มรายวิชา</h1>
                    <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                    </div>
                    <div className='container mx-auto'>
                        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                            <div ><p>หมวดหมู่วิชา</p>
                                <div className="mb-5 flex justify-center ">
                                    {/* <input
                                onChange={(event) => {
                                    setcategoryID(event.target.value)
                                }}
                                type="text"
                                name="categoryID"
                                placeholder="หมวดหมู่วิชา"
                                class="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                            /> */}
                                    <select
                                        className=' border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md'
                                        placeholder='หมวดหมู่วิชา'
                                        name='categoryID'
                                        type="text"
                                        onChange={(event) => {
                                            const filterCategory = category.filter(item => {
                                                return event.target.value == item.categoryID
                                            })
                                            setcategoryID(filterCategory[0].categoryID)
                                        }}
                                    >
                                        <option value={""}>---โปรดระบุหมวดวิชา---</option>
                                        {
                                            category.map((_, index) => (<option key={index} value={_.categoryID}>{_.categoryName}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div ><p>รหัสวิชา</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setCourseID_number(event.target.value)
                                        }}
                                        type="text"
                                        name="courseID_number"
                                        placeholder="รหัสวิชา"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div ><p>ชื่อไทย</p>
                                <div className="mb-5 flex justify-center ">
                                    <textarea
                                        onChange={(event) => {
                                            setcourseNameTH(event.target.value)
                                        }}
                                        type="text"
                                        name="courseNameTH"
                                        placeholder="ชื่อไทย"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div ><p>ชื่ออังกฤษ</p>
                                <div className="mb-5 flex justify-center ">
                                    <textarea
                                        onChange={(event) => {
                                            setcourseNameENG(event.target.value)
                                        }}
                                        type="text"
                                        name="courseNameENG"
                                        placeholder="ชื่ออังกฤษ"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div ><p>หน่วยกิต</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setcreditStudy(event.target.value)
                                        }}
                                        type="text"
                                        name="creditStudy"
                                        placeholder="หน่วยกิต"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div ><p>ชั่วโมงทฤษฎี</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setstudyTimeTheory(event.target.value)
                                        }}
                                        type="text"
                                        name="studyTimeTheory"
                                        placeholder="เวลา"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div ><p>ชั่วโมงปฏิบัติ</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setstudyTimePractice(event.target.value)
                                        }}
                                        type="text"
                                        name="studyTimePractice"
                                        placeholder="เวลาปฎิบัติ"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div ><p>ชั่วโมงศึกษาด้วยตนเอง</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setstudyTimeSelf(event.target.value)
                                        }}
                                        type="text"
                                        name="studyTimeSelf"
                                        placeholder="เวลาศึกษาด้วยตนเอง"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div ><p>รายละเอียดวิชา</p>
                                <div className="mb-5 flex justify-center ">
                                    <textarea
                                        onChange={(event) => {
                                            setdetail(event.target.value)
                                        }}
                                        type="text"
                                        name="detail"
                                        placeholder="รายละเอียดวิชา"
                                        className=" border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    />
                                </div>
                            </div>
                    </div>
                    <div className='  grid grid-cols-2 '>
                        <div className=' ml-3'>
                            <button onClick={BacktoCourse} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                        <div className=' absolute right-0 mr-3'>
                            <button onClick={addCourse} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">บันทึก</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddCourse