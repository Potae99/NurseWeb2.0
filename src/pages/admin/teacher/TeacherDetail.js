import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import EditTeacher from './EditTeacher';
import Swal from 'sweetalert2';

function TeacherDetail() {

    const [data, setData] = useState([]);
    const [teacherlist, setTeacherList] = useState([]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const deleteTeacher = (userID) => {
        axios.delete(process.env.REACT_APP_API_URL + "/teacher", { data: { userID: userID } })
            .then((response) => {
                setTeacherList(
                    teacherlist.filter((_) => {
                        return _.userID !== userID;
                    })
                )
                window.location.href = "/";

                Toast.fire({
                    icon: 'success',
                    title: 'Delete data success'
                })


            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                }
            });
    }

    const { userID } = useParams();

    const fetchData = () => {

        axios.get(process.env.REACT_APP_API_URL + "/teacher", { params: { userID: userID } })
            .then(res => {
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setData(res.data.data);

            }).catch(error => {
                console.log(error.res);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    const GoToTeacherEdit = (userID) => {
        window.location.href = "/admin/teacher/edit/" + userID
    }

    return (
        <div className=''>
            <Routes>
                <Route path='/admin/teacher/edit/:userID' element={<EditTeacher />} />
            </Routes>
            <div className=" min-h-screen border space-y-5">
                <div className=" text-black font-bold text-4xl m-10 grid grid-cols-1 place-items-center">ข้อมูลอาจารย์</div>
                <div className=' flex flex-row-reverse  '>
                    <div className='   mr-3'>
                        <button onClick={() => GoToTeacherEdit(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">แก้ไข</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>

                    <div className='  mr-3'>
                        <button onClick={() => deleteTeacher(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ลบ</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>
                </div>

                <div>
                    <div className=' text-black text-3xl text-center mb-5'>อาจารย์ : {data.nameTH}</div>
                    <div className=" grid grid-cols-1 place-items-center">
                        <div className=" text-black block bg-gray-200 w-2/3 p-auto rounded-2xl">
                            <div className=" flex justify-around">
                                <div className=" ml-7">
                                    {
                                        data.nameTH ?
                                            <>
                                                <div className=" text-black m-3">ชื่อสกุล : {data.nameTH}</div></> :
                                            <></>
                                    }
                                    {
                                        data.teacherID ?
                                            <>
                                                <div className=" text-black m-3">รหัสประจำตัว : {data.teacherID}</div></> :
                                            <></>
                                    }
                                </div>
                                <div className=" mr-7">
                                    {
                                        data.nameENG ?
                                            <>
                                                <div className=" m-3">ชื่ออังกฤษ : {data.nameENG}</div></> :
                                            <></>
                                    }
                                    {
                                        data.IDnumber ?
                                            <>
                                                <div className=" m-3">เลขบัตรประจำตัวประชาชน : {data.IDnumber}</div></> :
                                            <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherDetail