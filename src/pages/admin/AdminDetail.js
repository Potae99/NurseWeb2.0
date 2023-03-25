import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditAdmin from './EditAdmin';

function AdminDetail() {

    const [data, setData] = useState([]);
    const [adminlist, setAdminList] = useState([]);

    const { userID } = useParams();

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

    const deleteAdmin = (userID) => {
        axios.delete(process.env.REACT_APP_API_URL + "/admin", { data: { userID: userID } })
            .then((response) => {
                setAdminList(
                    adminlist.filter((_) => {
                        return _.userID !== userID;
                    })
                )
                window.location.href = "/admin/home";

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

    const fetchData = () => {


        axios.get(process.env.REACT_APP_API_URL + "/admin", { params: { userID: userID } })
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

    const goToEditAdmin = (userID) => {
        window.location.href = "/admin/edit/" + userID;
    }

    return (
        <div>
            <Routes>
                <Route path='/admin/edit/:userID' element={<EditAdmin />} />
            </Routes>

            <div className=" text-black min-h-screen  space-y-5">
                <div className=" font-bold text-4xl m-10 grid grid-cols-1 place-items-center">ข้อมูลผู้ดูแลระบบ</div>
                <div className=' flex flex-row-reverse  '>
                    <div className='   mr-3'>
                        <button onClick={() => goToEditAdmin(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">แก้ไข</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>

                    <div className='  mr-3'>
                        <button onClick={() => deleteAdmin(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
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
                    <div className=' text-3xl text-center mb-5'>ผู้ดูแลระบบ : {data.nameTH}</div>
                    <div className=" grid grid-cols-1 place-items-center">
                        <div className=" block bg-gray-200 w-2/3 p-auto rounded-2xl">
                            <div className=" flex justify-around">
                                <div className=" ml-7">
                                    {
                                        data.nameTH ?
                                            <>
                                                <div className=" m-3">ชื่อสกุล : {data.nameTH}</div></> :
                                            <></>
                                    }
                                    {
                                        data.adminID ?
                                            <>
                                                <div className=" m-3">รหัสประจำตัว : {data.adminID}</div></> :
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

export default AdminDetail