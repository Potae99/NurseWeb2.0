import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import EditStudent from './EditStudent';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

function StudentDetail() {

    const [data, setData] = useState([]);
    const [studentlist, setStudentList] = useState([]);

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

    const deleteStudent = (userID) => {
        axios.delete(process.env.REACT_APP_API_URL + "/student", { data: { userID: userID } })
            .then((response) => {
                setStudentList(
                    studentlist.filter((_) => {
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


        axios.post(process.env.REACT_APP_API_URL + "/student/detail", { userID: userID })
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

    const gotoStudentEdit = (userID) => {
        window.location.href = "/admin/student/edit/" + userID;
    }

    useEffect(() => {
        fetchData();
    }, [])



    return (
        <div>
            <Routes>
                <Route path='/admin/student/edit/:userID' element={<EditStudent />} />
            </Routes>
            <div className=" text-black min-h-screen border space-y-5 mb-10">
                <div className=" font-bold text-4xl m-10 grid grid-cols-1 place-items-center">ข้อมูลนิสิต</div>
                <div className=' flex flex-row-reverse  '>
                    <div className='   mr-3'>
                        <button onClick={() => gotoStudentEdit(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">แก้ไข</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>

                    <div className='  mr-3'>
                        <button onClick={() => deleteStudent(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">ลบ</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>
                </div>

                <div>
                    <div className=' text-3xl text-center mb-5'>นิสิต : {data.nameTH}</div>
                    <div className=" grid grid-cols-1 place-items-center">
                        <div className=" block bg-gray-200 w-2/3 p-auto rounded-2xl">
                            <div className=" flex justify-around">
                                <div className=" ml-7">
                                    {
                                        data.nameTH ?
                                            <>
                                                <div className=" m-3">ชื่อสกุล : {data.nameTH}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.studentID ?
                                            <>
                                                <div className=" m-3">รหัสประจำตัว : {data.studentID}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.gender ?
                                            <>
                                                <div className=" m-3">เพศ : {data.gender}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.nationality ?
                                            <>
                                                <div className=" m-3">สัญชาติ : {data.nationality}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.phone ?
                                            <>
                                                <div className=" m-3">มือถือ : {data.phone}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.email ?
                                            <>
                                                <div className=" m-3">Email : {data.email}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.houseadd_houseNo ?
                                            <>
                                                <div className=" m-3">บ้านเลขที่ : {data.houseadd_houseNo}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.houseadd_road ?
                                            <>
                                                <div className=" m-3">ถนน : {data.houseadd_road}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.houseadd_subDistrict ?
                                            <>
                                                <div className=" m-3">ตำบล : {data.houseadd_subDistrict}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.houseadd_province ?
                                            <>
                                                <div className=" m-3">จังหวัด : {data.houseadd_province}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.presentAddress ?
                                            <>
                                                <div className=" m-3">จังหวัด : {data.presentAddress}</div>
                                            </> :
                                            <>
                                            </>
                                    }

                                    


                                </div>
                                <div className=" mr-7">
                                    {
                                        data.nameENG ?
                                            <>
                                                <div className=" m-3">ชื่ออังกฤษ : {data.nameENG}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.IDnumber ?
                                            <>
                                                <div className=" m-3">เลขประจำตัวประชาชน : {data.IDnumber}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.ethnicity ?
                                            <>
                                                <div className=" m-3">เชื้อชาติ : {data.ethnicity}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.religion ?
                                            <>
                                                <div className=" m-3">ศาสนา : {data.religion}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.IDline ?
                                            <>
                                                <div className=" m-3">IDline : {data.IDline}</div>
                                            </> :
                                            <>
                                            </>
                                    }

                                    {
                                        data.Birthday ?
                                            <>
                                                <div className=" m-3">วันเกิด : {format(new Date(data.Birthday), 'yyyy-MM-dd')}</div>
                                            </> :
                                            <>
                                            </>
                                    }

                                    {
                                        data.houseadd_village ?
                                            <>
                                                <div className=" m-3">หมู่บ้าน : {data.houseadd_village}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.houseadd_alley ?
                                            <>
                                                <div className=" m-3">ซอย : {data.houseadd_alley}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.houseadd_district ?
                                            <>
                                                <div className=" m-3">อำเภอ : {data.houseadd_district}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.houseadd_postalCode ?
                                            <>
                                                <div className=" m-3">รหัสไปรษณีย์ : {data.houseadd_postalCode}</div>
                                            </> :
                                            <>
                                            </>
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

export default StudentDetail