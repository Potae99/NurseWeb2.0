import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddWorkHistory() {

    const [workAddressName, setWorkAddressName] = useState("");
    const [startWork, setStartWork] = useState("");
    const [endWork, setEndWork] = useState("");
    const [department, setDepartment] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [province, setProvince] = useState("");    
    const [district, setDistrict] = useState("");
    const [subDistrict, setSubDistrict] = useState("");   
    const [alley, setAlley] = useState("");    
    const [road, setRoad] = useState("");    
    const [village, setVillage] = useState("");

    const [data, setData] = useState([]);

    const [nameTH, setnameTH] = useState([]);

    const {userID} = useParams();

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

    const addWorkHistory = () => {

        axios.post(process.env.REACT_APP_API_URL + "/student/workHistory", {
            userID:userID,
            workAddressName: workAddressName,
            startWork: startWork,
            endWork: endWork,
            department: department,
            houseNo: houseNo,
            postalCode: postalCode,
            village: village,
            road: road,
            alley: alley,
            subDistrict: subDistrict,
            district: district,
            province: province

        }).then(() => {
            setData([
                ...data,
                {
                    userID:userID,
                    workAddressName: workAddressName,
                    startWork: startWork,
                    endWork: endWork,
                    department: department,
                    houseNo: houseNo,
                    postalCode: postalCode,
                    village: village,
                    road: road,
                    alley: alley,
                    subDistrict: subDistrict,
                    district: district,
                    province: province
                }
            ])
            
            Toast.fire({
                icon: 'success',
                title: 'เพิ่มประวัติการทำงาน สำเร็จ'
            })
            .then(() => {window.location.href = "/admin/student/work/list/" + userID;})
        })
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
                setnameTH(res.data.data.nameTH);

            }).catch(error => {
                console.log(error.res);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    const BacktoStudentDetail = (userID) => {
        window.location.href = '/admin/student/detail/' + userID;
    }

    return (
        <div className=' bg-white slate-500 min-h-screen'>
            <h1 className=' text-4xl text-center m-3 text-black'>เพิ่มประวัติการทำงาน</h1>
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                <div className=' flex flex-row'>
                    <p className=' text-2xl ml-3 text-black' >นิสิต : {nameTH}</p>
                </div>
            </div>

            <div className='container mx-auto text-black'>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                    <div >
                        <p>เริ่ม</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setStartWork(event.target.value)
                                }}
                                type="date"
                                name="startWork"
                                placeholder="เวลาเริ่มทำงาน"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>สิ้นสุด</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setEndWork(event.target.value)
                                }}
                                type="date"
                                value={endWork}
                                name="endWork"
                                placeholder="สิ้นสุดการทำงาน"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>แผนก</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setDepartment(event.target.value)
                                }}
                                type="text"
                                value={department}
                                name="แผนก"
                                placeholder="แผนก"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>ชื่อสถานที่ทำงาน</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setWorkAddressName(event.target.value)
                                }}
                                type="text"
                                name="ชื่อสถานที่ทำงาน"
                                placeholder="ชื่อสถานที่ทำงาน"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    
                    <div >
                        <p>บ้านเลขที่</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setHouseNo(event.target.value)
                                }}
                                type="text"
                                name="houseNo"
                                placeholder="บ้านเลขที่"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>หมู่บ้าน</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setVillage(event.target.value)
                                }}
                                type="text"
                                name="village"
                                placeholder="หมู่บ้าน"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>ถนน</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setRoad(event.target.value)
                                }}
                                type="text"
                                name="road"
                                placeholder="ถนน"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>ซอย</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setAlley(event.target.value)
                                }}
                                type="text"
                                name="alley"
                                placeholder="ซอย"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>จังหวัด</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setProvince(event.target.value)
                                }}
                                type="text"
                                name="province"
                                placeholder="จังหวัด"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>อำเภอ</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setDistrict(event.target.value)
                                }}
                                type="text"
                                name="district"
                                placeholder="อำเภอ"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>ตำบล</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setSubDistrict(event.target.value)
                                }}
                                type="text"
                                name="subDistrict"
                                placeholder="ตำบล"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div >
                        <p>รหัสไปรษณีย์</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setPostalCode(event.target.value)
                                }}
                                type="text"
                                name="postalCode"
                                placeholder="รหัสไปรษณีย์"
                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='  grid grid-cols-2 '>
                <div className=' ml-3'>
                    <button onClick={() => BacktoStudentDetail(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                        <span className="relative invisible">Button Text</span>
                    </button>
                </div>
                <div className=' absolute right-0 mr-7'>
                    <button onClick={() => addWorkHistory(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">บันทึก</span>
                        <span className="relative invisible">Button Text</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddWorkHistory