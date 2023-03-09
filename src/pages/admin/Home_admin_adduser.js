// import React from 'react';
// import Savebutton from '../../components/Button/Savebutton';
// import Backbutton from '../../components/Button/Backbutton';

//  function Home_admin_adduser() {
//     const Role = [
//         {
//             role: 'นิสิต',
//             value: 'นิสิต'
//         },
//         {
//             role: 'ผู้ดูแลระบบ',
//             value: 'ผู้ดูแลระบบ'
//         },
//         {
//             role: 'อาจารย์',
//             value: 'อาจารย์'
//         }
//     ]
//     const inputform_data = [
//         {
//             Head: 'วันเกิด',
//             placeholder: '',
//             type: "date",
//             name: "Birthday"

//         },
//         {

//             Head: 'line ID',
//             placeholder: 'ไอดีไลน์',
//             type: "text",
//             name: "IDline"
//         },
//         {

//             Head: 'รหัสบัตรประชาชน',
//             placeholder: 'รหัสบัตรประชาชน',
//             type: "text",
//             name: "IDnumber"
//         },
//         {

//             Head: 'อีเมล',
//             placeholder: 'ที่อยู่อีเมล',
//             type: "text",
//             name: "email"
//         },
//         {

//             Head: 'สัญชาติ',
//             placeholder: 'สัญชาติ',
//             type: "text",
//             name: "ethnicity"
//         },
//         {

//             Head: 'เพศสภาพ',
//             placeholder: 'เพศสภาพ',
//             type: "text",
//             name: "gender"
//         },
//         {

//             Head: 'ตรอก',
//             placeholder: 'ตรอก',
//             type: "text",
//             name: "houseadd_alley"
//         },
//         {

//             Head: 'ตำบล',
//             placeholder: 'ตำบล',
//             type: "text",
//             name: "houseadd_district"
//         },
//         {

//             Head: 'รหัสไปรษณีย์',
//             placeholder: 'รหัสไปรษณีย์',
//             type: "text",
//             name: "houseadd_postalCode"

//         },
//         {

//             Head: 'จังหวัด',
//             placeholder: 'จังหวัด',
//             type: "text",
//             name: "houseadd_province"

//         },
//         {

//             Head: 'ถนน',
//             placeholder: 'ถนน',
//             type: "text",
//             name: "houseadd_road"

//         },
//         {

//             Head: 'ตำบล',
//             placeholder: 'ตำบล',
//             type: "text",
//             name: "houseadd_subDistrict"

//         },
//         {

//             Head: 'หมู่บ้าน',
//             placeholder: 'หมู่บ้าน',
//             type: "text",
//             name: "houseadd_village"

//         },
//         {

//             Head: 'ชื่อ-สกุล(ภาษาอังกฤษ)',
//             placeholder: 'ชื่อ-สกุล(ภาษาอังกฤษ)',
//             type: "text",
//             name: "nameENG"

//         },
//         {

//             Head: 'ชื่อ-สกุล(ภาษาไทย)',
//             placeholder: 'ชื่อ-สกุล(ภาษาไทย)',
//             type: "text",
//             name: "nameTH"

//         },
//         {

//             Head: 'เชื้อชาติ',
//             placeholder: 'เชื้อชาติ',
//             type: "text",
//             name: "nationality"

//         },
//         {

//             Head: 'มือถือ',
//             placeholder: 'มือถือ',
//             type: "text",
//             name: "phone"

//         },
//         {

//             Head: 'ที่อยู่ปัจจุบัน',
//             placeholder: 'ที่อยู่ปัจจุบัน',
//             type: "text",
//             name: "presentAddress"

//         },
//         {

//             Head: 'ศาสนา',
//             placeholder: 'ศาสนา',
//             type: "text",
//             name: "religion"

//         },



//     ];
//     return (
//         <div className=' bg-gray-200 slate-500 min-h-screen border'>
//             <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
//             <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
//                 <div className=' flex flex-row'>
//                     <p className=' text-2xl ml-3' >ผู้ใช้งาน</p>
//                     <select className='block ml-3  w-1/4 p-2 mb-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' name="course_id" id="course_id">
//                         {Role.map((Role, index) => (
//                             <option value={Role.value}>{Role.role}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className='container mx-auto'>
//                 <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
//                     {inputform_data.map((inputform_data, index) => (
//                         <div >
//                             <p>{inputform_data.Head}</p>
//                             <div class="mb-5 flex justify-center ">
//                                 <input

//                                     type={inputform_data.type}
//                                     name={inputform_data.name}
//                                     placeholder={inputform_data.placeholder}
//                                     class="w-full rounded-md border border-while (condition) {
//                             } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/* <div className='  grid grid-cols-2 '>
//                     <div className=' ml-3'>
//                         <Backbutton></Backbutton>
//                     </div>
//                     <div className=' absolute right-0 mr-3'>
//                         <Savebutton ></Savebutton>
//                     </div>
//                 </div> */}
//             </div>




//         </div>

//     )
// } 
// export default Home_admin_adduser;

import React from 'react'
// import Savebutton from './components/Button/Savebutton';
import { useState } from 'react';
import axios from 'axios';



function Home_admin_adduser() {
    const [houseadd_province, sethouseadd_province] = useState("");
    const [houseadd_subDistrict, sethouseadd_subDistrict] = useState("");
    const [houseadd_road, sethouseadd_road] = useState("");
    const [houseadd_houseNo, sethouseadd_houseNo] = useState("");
    const [IDnumber_Path] = useState("");
    const [password, setpassword] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [IDline, setIDline] = useState("");
    const [IDnumber, setIDnumber] = useState("");
    const [email, setemail] = useState("");
    const [ethnicity, setethnicity] = useState("");
    const [gender, setgender] = useState("");
    const [houseadd_alley, sethouseadd_alley] = useState("");
    const [houseadd_district, sethouseadd_district] = useState("");
    const [houseadd_postalCode, sethouseadd_postalCode] = useState("");
    const [houseadd_village, sethouseadd_village] = useState("");
    const [nameENG, setnameENG] = useState("");
    const [nameTH, setnameTH] = useState("");
    const [nationality, setnationality] = useState("");
    const [presentAddress, setpresentAddress] = useState("");
    const [religion, setreligion] = useState("");
    const [phone, setPhone] = useState("");


    const [data, setData] = useState([]);
    // const getSutdent = () => {
    //     axios.get(process.env.REACT_APP_API_URL + "/student/list").then((response) => {
    //         setData(response.data.data);
    //     })
    // }





    const addStudent = () => {

        axios.post(process.env.REACT_APP_API_URL + "/student", {
            houseadd_province: houseadd_province,
            houseadd_subDistrict: houseadd_subDistrict,
            houseadd_road: houseadd_road,
            houseadd_houseNo: houseadd_houseNo,
            IDnumber_Path: IDnumber_Path,
            password: password,
            Birthday: Birthday,
            IDline: IDline,
            IDnumber: IDnumber,
            email: email,
            ethnicity: ethnicity,
            gender: gender,
            houseadd_alley: houseadd_alley,
            houseadd_district: houseadd_district,
            houseadd_postalCode: houseadd_postalCode,
            houseadd_village: houseadd_village,
            nameENG: nameENG,
            nameTH: nameTH,
            nationality: nationality,
            presentAddress: presentAddress,
            religion: religion,
            phone: phone
        }).then(() => {
            setData([
                ...data,
                {
                    houseadd_province: houseadd_province,
                    houseadd_subDistrict: houseadd_subDistrict,
                    houseadd_road: houseadd_road,
                    houseadd_houseNo: houseadd_houseNo,
                    IDnumber_Path: IDnumber_Path,
                    password: password,
                    Birthday: Birthday,
                    IDline: IDline,
                    IDnumber: IDnumber,
                    email: email,
                    ethnicity: ethnicity,
                    gender: gender,
                    houseadd_alley: houseadd_alley,
                    houseadd_district: houseadd_district,
                    houseadd_postalCode: houseadd_postalCode,
                    houseadd_village: houseadd_village,
                    nameENG: nameENG,
                    nameTH: nameTH,
                    nationality: nationality,
                    presentAddress: presentAddress,
                    religion: religion,
                    phone: phone
                }
            ])
            window.location.href = "home_admin";
        })
    }

    const BacktoHomeAdmin = () => {
        window.location.href = 'home_admin';
    }

    const Role = [
        {
            role: 'นิสิต',
            value: 'นิสิต'
        },
        {
            role: 'ผู้ดูแลระบบ',
            value: 'ผู้ดูแลระบบ'
        },
        {
            role: 'อาจารย์',
            value: 'อาจารย์'
        }
    ];

    return (
        <div className=' bg-gray-200 slate-500 min-h-screen border'>
            <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                <div className=' flex flex-row'>
                    <p className=' text-2xl ml-3' >ผู้ใช้งาน</p>
                    <select className='block ml-3  w-1/4 p-2 mb-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' name="course_id" id="course_id">
                        {Role.map((Role, index) => (
                            <option value={Role.value}>{Role.role}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='container mx-auto'>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                    <div >
                        <p>ชื่อไทย</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setnameTH(event.target.value)
                                }}
                                type="text"
                                name="nameTH"
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
                                    setnameENG(event.target.value)
                                }}
                                type="text"
                                name="nameENG"
                                placeholder="ชื่ออังกฤษ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>รหัสประจำตัวประชาชน</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setIDnumber(event.target.value)
                                }}
                                type="text"
                                name="IDnumber"
                                placeholder="รหัสประจำตัวประชาชน"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    {/* <div >
                        <p>IDnumber_Path</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setIDnumber_Path(event.target.value)
                                }}
                                type="text"
                                name="IDnumber_Path"
                                placeholder="IDnumber_Path"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div> */}
                    <div >
                        <p>Password</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setpassword(event.target.value)
                                }}
                                type="text"
                                name="Password"
                                placeholder="Password"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>วันเกิด</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setBirthday(event.target.value)
                                }}
                                type="date"
                                name="Birthday"
                                placeholder="วันเกิด"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>Email</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setemail(event.target.value)
                                }}
                                type="text"
                                name="Email"
                                placeholder="Email"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>เพศ</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setgender(event.target.value)
                                }}
                                type="text"
                                name="Gender"
                                placeholder="เพศ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>บ้านเลขที่</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_houseNo(event.target.value)
                                }}
                                type="text"
                                name="houseadd_houseNo"
                                placeholder="บ้านเลขที่"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>หมู่บ้าน</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_village(event.target.value)
                                }}
                                type="text"
                                name="houseadd_village"
                                placeholder="หมู่บ้าน"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ตำบล</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_subDistrict(event.target.value)
                                }}
                                type="text"
                                name="houseadd_subDistrict"
                                placeholder="ตำบล"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>อำเภอ</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_district(event.target.value)
                                }}
                                type="text"
                                name="houseadd_district"
                                placeholder="อำเภอ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>จังหวัด</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_province(event.target.value)
                                }}
                                type="text"
                                name="houseadd_province"
                                placeholder="จังหวัด"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>รหัสไปรษณีย์</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_postalCode(event.target.value)
                                }}
                                type="text"
                                name="houseadd_postalCode"
                                placeholder="รหัสไปรษณีย์"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ถนน</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_road(event.target.value)
                                }}
                                type="text"
                                name="houseadd_road"
                                placeholder="ถนน"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ซอย</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    sethouseadd_alley(event.target.value)
                                }}
                                type="text"
                                name="houseadd_alley"
                                placeholder="ซอย"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>สัญชาติ</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setethnicity(event.target.value)
                                }}
                                type="text"
                                name="ethnicity"
                                placeholder="สัญชาติ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>เชื้อชาติ</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setnationality(event.target.value)
                                }}
                                type="text"
                                name="nationality"
                                placeholder="เชื้อชาติ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ศาสนา</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setreligion(event.target.value)
                                }}
                                type="text"
                                name="religion"
                                placeholder="ศาสนา"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ที่อยู่ปัจจุบัน</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setpresentAddress(event.target.value)
                                }}
                                type="text"
                                name="presentAddress"
                                placeholder="ที่อยู่ปัจจุบัน"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>IDline</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setIDline(event.target.value)
                                }}
                                type="text"
                                name="IDline"
                                placeholder="IDline"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>มือถือ</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}
                                type="text"
                                name="phone"
                                placeholder="มือถือ"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='  grid grid-cols-2 '>
                <div className=' ml-3'>
                    <button onClick={BacktoHomeAdmin} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                        <span class="relative invisible">Button Text</span>
                    </button>
                </div>
                <div className=' absolute right-0 mr-3'>
                    <button onClick={addStudent} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
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