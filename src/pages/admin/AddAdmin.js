import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import LoadingPage from '../LoadingPage';

function AddAdmin() {
    const [password, setpassword] = useState("");
    const [nameENG, setnameENG] = useState("");
    const [nameTH, setnameTH] = useState("");
    const [adminID, setAdminID] = useState("");
    const [IDnumber, setIDnumber] = useState("");

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

    const addAdmin = () => {

        axios.post(process.env.REACT_APP_API_URL + "/admin", {
            password: password,
            nameENG: nameENG,
            nameTH: nameTH,
            adminID: adminID,
            IDnumber: IDnumber
        }).then(() => {
            setData([
                ...data,
                {
                    password: password,
                    nameENG: nameENG,
                    nameTH: nameTH,
                    adminID: adminID,
                    IDnumber: IDnumber
                }
            ])

            // Toast.fire({
            //     icon: 'success',
            //     title: 'Add admin success'
            // })
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Add admin success",
                showConfirmButton: false,
                timer: 1000,
              })
            .then(
                () => {
                    window.location.href = "/NA/admin/home";
                }
            )

        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "โปรดตรวจสอบข้อมูล",
                showConfirmButton: false,
                timer: 2000,
            })
        })
    }

    const BacktoHomeAdmin = () => {
        window.location.href = '/NA/admin/home';
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
                <div className=' bg-white slate-500 min-h-screen '>
                    <h1 className=' text-4xl text-center m-3 text-black'>เพิ่มผู้ใช้งาน</h1>
                    <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                        <div className=' flex flex-row'>
                            <p className=' text-2xl ml-3 text-black' >ผู้ใช้งาน :</p>
                            <p className=' text-2xl ml-3 text-black'>ผู้ดูแลระบบ</p>
                        </div>
                    </div>
                    <div className='container mx-auto text-black'>
                        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                            <div ><p>รหัสประจำตัว</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setAdminID(event.target.value)
                                        }}
                                        type="text"
                                        value={adminID}
                                        name="adminID"
                                        placeholder="รหัสประจำตัว"
                                        className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ชื่อไทย</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setnameTH(event.target.value)
                                        }}
                                        type="text"
                                        value={nameTH}
                                        name="nameTH"
                                        placeholder="ชื่อไทย"
                                        className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ชื่ออังกฤษ</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setnameENG(event.target.value)
                                        }}
                                        type="text"
                                        name="nameENG"
                                        placeholder="ชื่ออังกฤษ"
                                        className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>รหัสประจำตัวประชาชน</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setIDnumber(event.target.value)
                                        }}
                                        type="text"
                                        name="IDnumber"
                                        placeholder="รหัสประจำตัวประชาชน"
                                        className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        maxlength="13"
                                        minLength="13"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>Password</p>
                                <div className="mb-5 flex justify-center ">
                                    <input
                                        onChange={(event) => {
                                            setpassword(event.target.value)
                                        }}
                                        type="text"
                                        name="Password"
                                        placeholder="Password"
                                        className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  grid grid-cols-2 '>
                        <div className=' ml-3'>
                            <button onClick={BacktoHomeAdmin} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                        <div className=' absolute right-0 mr-7 '>
                            <button onClick={addAdmin} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group" type="submit" value="submit">
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

export default AddAdmin