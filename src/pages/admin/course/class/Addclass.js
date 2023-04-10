import React from 'react'
import Classtable from '../../../../components/Table/Classtable'
import { useState } from 'react'
import axios from 'axios';
import LoadingPage from '../../../LoadingPage';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

function Addclass() {
    const [data, setData] = useState([]);
    const [courseID, setcourseID] = useState("");
    const [studyRoom, setstudyRoom] = useState("");
    const [dateYear, setdateYear] = useState("");

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [courseList, setCourseList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [teacherList, setTeacherList] = useState([]);
    const [userID, setuserID] = useState("");
    const [taughtType, settaughtType] = useState("");


    const fetchData = () => {
        axios.get(process.env.REACT_APP_API_URL + '/course')
            .then(res => {
                console.log(res.data)

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API")
                    return;
                }
                setCourseList(res.data.data);
                setLoading(true);

                setTimeout(() => {
                    setCompleted(true);
                }, 1000);
            })
            .catch(error => {
                console.log(error.res)
            })
        axios.get(process.env.REACT_APP_API_URL + "/teacher/list")
        .then( res => {
            console.log(res.data);

            if (res.data.error === true){
                console.log(res.data);
                console.log("ERROR FOUND WHEN GET DATA FROM API");
                return;
            }
            setTeacherList(res.data.data);
        })
        .catch( error => {
            console.log(error.res);
        });
        axios.get(process.env.REACT_APP_API_URL + "/student/list")
        .then( res => {
            console.log(res.data);

            if (res.data.error === true){
                console.log(res.data);
                console.log("ERROR FOUND WHEN GET DATA FROM API");
                return;
            }
            setStudentList(res.data.data);
        })
        .catch( error => {
            console.log(error.res);
        });
    }


    const addclass = () => {

        axios.post(process.env.REACT_APP_API_URL + "/class", {
            courseID: courseID,
            studyRoom: studyRoom,
            dateYear, dateYear

        }).then(() => {
            setData([
                ...data,
                {
                    courseID: courseID,
                    studyRoom: studyRoom,
                    dateYear, dateYear

                }
            ])
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Add Class success",
                showConfirmButton: false,
                timer: 1000,
            })
                .then(() => { window.location.href = "/admin/add/class"; })

        })
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [])

    const backToAdminHome = () => {
        window.location.href = "/admin/home"
    }

    const backToClassManageMent = () => {
        window.location.href = "/admin/class"
    }

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className=' text-black min-h-screen'>
                    <h1 className=' text-center text-4xl'>เพิ่มคาบเรียน</h1>
                    <div className='container mx-auto mt-7'>
                        <div className=' grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                            <div >
                                <p>รหัสวิชาเรียน</p>
                                <div className=" flex justify-center ">
                                    {/* <input
                                        onChange={(event) => {
                                            setcourseID(event.target.value)
                                        }}
                                        type="text"
                                        name="courseID"
                                        value={courseID}
                                        placeholder="รหัสวิชาเรียน"
                                        className="w-full rounded-md border border-black bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    /> */}
                                    <select
                                        onChange={(event) => {
                                            const filterCourse = courseList.filter((item => {
                                                return event.target.value == item.courseID
                                            }))
                                            setcourseID(filterCourse[0].courseID)
                                        }}
                                        type="text"
                                        name='courseID'
                                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                    >
                                        <option value={""}>---โปรดระบุรหัสวิชา---</option>
                                        {
                                            courseList.map((_, index) => (<option key={index} value={_.courseID}>{_.courseID_number} {_.courseNameTH}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div >
                                <p>ห้องเรียน</p>
                                <div className=" flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setstudyRoom(event.target.value)
                                        }}
                                        type="text"
                                        name="studyRoom"
                                        value={studyRoom}
                                        placeholder="ห้องเรียน"
                                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div >
                                <p>ปีที่สร้าง</p>
                                <div className=" flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setdateYear(event.target.value)

                                        }}
                                        type="date"
                                        name="dateYear"
                                        value={dateYear}
                                        placeholder="ปีที่สร้าง"
                                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-row-reverse'>
                            <div>
                                <div className="flex  items-center justify-center ml-5">
                                    <button type="button" onClick={() => setShowModal1(true)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-400 group-hover:h-full"></span>
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
                                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มนิสิต</span>
                                    </button>
                                </div>
                                {showModal1 ? (
                                    <>
                                        <div className="fixed inset-0 z-10 overflow-y-auto">
                                            <div
                                                className="fixed inset-0 w-full h-full bg-black opacity-40"
                                                onClick={() => setShowModal1(false)}
                                            ></div>
                                            <div className="flex items-center min-h-screen px-4 py-8">
                                                <div className="relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                                                    <div className="mt-3 sm:flex">
                                                        <div className=" text-center sm:ml-4   sm:text-left">
                                                            <h4 className="text-lg font-medium text-gray-800">
                                                                นิสิต
                                                            </h4>
                                                            {/* <input className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="รหัสนิสิต"
                              onChange={(event) => {
                                setuserID(event.target.value)
                              }}
                            >
                            </input> */}
                                                            <select
                                                                className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                                                type="text"
                                                                name='userID'
                                                                placeholder="รหัสนิสิต"
                                                                // onChange={(event) => {
                                                                //   setcourseID(event.target.value)
                                                                // }}
                                                                onChange={(event) => {
                                                                    const filterStudent = studentList.filter(item => {
                                                                        return event.target.value == item.userID
                                                                    })
                                                                    setuserID(event.target.value)
                                                                }}
                                                            >
                                                                <option value={""}>---โปรดระบุ---</option>
                                                                {
                                                                    studentList.map((_, index) => (<option key={index} value={_.userID}>{_.studentID} {_.nameTH}</option>))
                                                                }
                                                            </select>
                                                            <>
                                                                <p className=' text-red-500 text-center mt-3'>***เพิ่มอาจารย์ให้ครบทุกคนก่อนแล้วจึงเพิ่มนิสิต***</p>
                                                            </>
                                                            <div className="items-center gap-2 mt-3 sm:flex">
                                                                <button
                                                                    className="w-full mt-2 p-2.5 flex-1 text-white  bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                                    onClick={() => {
                                                                        // AddStudent();
                                                                        setShowModal1(false);
                                                                    }}
                                                                >
                                                                    บันทึก
                                                                </button>
                                                                <button
                                                                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                                                                    onClick={() =>
                                                                        setShowModal1(false)
                                                                    }
                                                                >
                                                                    ยกเลิก
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                            <div>
                                <div className="flex  items-center justify-center">
                                    <button type="button" onClick={() => setShowModal2(true)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-400 group-hover:h-full"></span>
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
                                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มอาจารย์</span>
                                    </button>
                                </div>
                                {showModal2 ? (
                                    <>
                                        <div className="fixed inset-0 z-10 overflow-y-auto">
                                            <div
                                                className="fixed inset-0 w-full h-full bg-black opacity-40"
                                                onClick={() => setShowModal2(false)}
                                            ></div>
                                            <div className="flex items-center min-h-screen px-4 py-8">
                                                <div className="relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                                                    <div className="mt-3 sm:flex">
                                                        <div className=" text-center sm:ml-4   sm:text-left">
                                                            <h4 className="text-lg font-medium text-gray-800">
                                                                อาจารย์
                                                            </h4>
                                                            {/* <input className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                              type="text"
                              placeholder="รหัสประจำตัวอาจารย์"
                              onChange={(event) => {
                                setuserID(event.target.value)
                              }}
                            ></input> */}
                                                            <select
                                                                className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                                                type="text"
                                                                name='userID'
                                                                placeholder="รหัสประจำตัวอาจารย์"
                                                                // onChange={(event) => {
                                                                //   setcourseID(event.target.value)
                                                                // }}
                                                                onChange={(event) => {
                                                                    const filterTeacher = teacherList.filter(item => {
                                                                        return event.target.value == item.userID
                                                                    })
                                                                    setuserID(event.target.value)
                                                                }}
                                                            >
                                                                <option value={""}>---โปรดระบุ---</option>
                                                                {
                                                                    teacherList.map((_, index) => (<option key={index} value={_.userID}>{_.nameTH}</option>))
                                                                }
                                                            </select>
                                                            {/* <input className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="ประเภทการสอน"
                          onChange={(event) => {
                            settaughtType(event.target.value)
                          }}
                        ></input> */}
                                                            <select
                                                                className='w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                                                                value={taughtType}
                                                                onChange={(event => {
                                                                    settaughtType(event.target.value)
                                                                    console.log(event.target.value)
                                                                })}
                                                                name="taughtType"
                                                            >
                                                                <option value={""}>---โปรดระบุประเภทการสอน---</option>
                                                                <option value={"ภาคทฤษฎี"}>ภาคทฤษฎี</option>
                                                                <option value={"ภาคปฏิบัติ"}>ภาคปฏิบัติ</option>
                                                            </select>
                                                            <>
                                                                <p className=' text-red-500 text-center mt-3'>***เพิ่มอาจารย์ให้ครบทุกคนก่อนแล้วจึงเพิ่มนิสิต***</p>
                                                            </>
                                                            <div className="items-center gap-2 mt-3 sm:flex">
                                                                <button
                                                                    className="w-full mt-2 p-2.5 flex-1 text-white  bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                                    onClick={() => {
                                                                        // addTeacher();
                                                                        setShowModal2(false);
                                                                    }}
                                                                >
                                                                    บันทึก
                                                                </button>
                                                                <button
                                                                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                                                                    onClick={() =>
                                                                        setShowModal2(false)
                                                                    }
                                                                >
                                                                    ยกเลิก
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null}

                            </div>
                        </div>
                    </div>
                    <div className=' mt-3 grid grid-cols-2 '>
                        <div className=' ml-3'>
                            <button onClick={backToClassManageMent} className=" relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                        <div className=' absolute right-0 mr-7'>
                            <button onClick={addclass} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มคาบเรียน</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                    {/* <div className=' mt-3'>
                        <Classtable />
                    </div> */}
                    <div className=' mt-3 grid grid-cols-2 '>
                        {/* <div className=' ml-3'>
                            <button onClick={backToAdminHome} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            )}

        </>
    )
}

export default Addclass