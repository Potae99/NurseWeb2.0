import React from 'react'
import Classtable from '../../../../components/Table/Classtable'
import { useState } from 'react'
import axios from 'axios';
import LoadingPage from '../../../LoadingPage';
import { useEffect } from 'react';

function Addclass() {
    const [data, setData] = useState([]);
    const [courseID, setcourseID] = useState("");
    const [studyRoom, setstudyRoom] = useState("");
    const [dateYear, setdateYear] = useState("");

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    const [courseList, setCourseList] = useState([]);

    const fetchData = () => {
        axios.get(process.env.REACT_APP_API_URL + '/course')
        .then( res => {
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
        .catch( error => {
            console.log(error.res)
        })
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
            window.location.href = "/admin/add/class";
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

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className=' text-black min-h-screen'>
                    <h1 className=' text-center text-4xl'>คาบเรียน</h1>
                    <div className='container mx-auto'>
                        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                            <div >
                                <p>รหัสวิชาเรียน</p>
                                <div className="mb-5 flex justify-center ">
                                    {/* <input
                                        onChange={(event) => {
                                            setcourseID(event.target.value)
                                        }}
                                        type="text"
                                        name="courseID"
                                        value={courseID}
                                        placeholder="รหัสวิชาเรียน"
                                        className="w-full rounded-md border border-while bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    /> */}
                                    <select
                                        onChange={(event) => {
                                            const filterCourse = courseList.filter( (item => {
                                                return event.target.value == item.courseID
                                            }))
                                            setcourseID(filterCourse[0].courseID)
                                        }}
                                        type="text"
                                        name='courseID'
                                        className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                    >
                                        <option value={""}>---โปรดระบุรหัสวิชา---</option>
                                        {
                                            courseList.map((_, index) => (<option key={index} value={_.courseID}>{_.courseID_number}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div >
                                <p>ห้องเรียน</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setstudyRoom(event.target.value)
                                        }}
                                        type="text"
                                        name="studyRoom"
                                        value={studyRoom}
                                        placeholder="ห้องเรียน"
                                        className="w-full rounded-md border border-while bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div >
                                <p>ปีที่สร้าง</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setdateYear(event.target.value)

                                        }}
                                        type="date"
                                        name="dateYear"
                                        value={dateYear}
                                        placeholder="ปีที่สร้าง"
                                        className="w-full rounded-md border border-while bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' flex flex-row-reverse'>
                        <button onClick={addclass} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มคาบเรียน</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>
                    <div className=' mt-3'>
                        <Classtable />
                    </div>
                    <div className=' mt-3 grid grid-cols-2 '>
                        <div className=' ml-3'>
                            <button onClick={backToAdminHome} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Addclass