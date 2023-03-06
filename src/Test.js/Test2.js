import React from 'react'
// import Savebutton from './components/Button/Savebutton';
// import Backbutton from './components/Button/Backbutton';
import { useState } from 'react';
import axios from 'axios';

function Test2() {
    // const [houseadd_province, sethouseadd_province] = useState("");
    // const [houseadd_subDistrict, sethouseadd_subDistrict] = useState("");
    // const [houseadd_road, sethouseadd_road] = useState("");
    // const [houseadd_houseNo, sethouseadd_houseNo] = useState("");
    // const [IDnumber_Path, setIDnumber_Path] = useState("");
    // const [password, setpassword] = useState("");
    // const [Birthday, setBirthday] = useState("");
    // const [IDline, setIDline] = useState("");
    // const [IDnumber, setIDnumber] = useState("");
    // const [email, setemail] = useState("");
    // const [ethnicity, setethnicity] = useState("");
    // const [gender, setgender] = useState("");
    // const [houseadd_alley, sethouseadd_alley] = useState("");
    // const [houseadd_district, sethouseadd_district] = useState("");
    // const [houseadd_postalCode, sethouseadd_postalCode] = useState("");
    // const [houseadd_village, sethouseadd_village] = useState("");
    // const [nameENG, setnameENG] = useState("");
    // const [nameTH, setnameTH] = useState("");
    // const [nationality, setnationality] = useState("");
    // const [presentAddress, setpresentAddress] = useState("");
    // const [religion, setreligion] = useState("");

    const [IDnumber, setIDnumber] = useState("");
    const [nameTH, setnameTH] = useState("");
    const [nameENG, setnameENG] = useState("");
    const [password, setpassword] = useState("");

    const [data, setData] = useState([]);
    const getTeacher = () => {
        axios.get(process.env.REACT_APP_API_URL + "/teacher/list").then((response) => {
            setData(response.data.data);
        })
    }

    const addteacher = () =>{
      axios.post(process.env.REACT_APP_API_URL + "/teacher",{
        IDnumber: IDnumber,
        nameTH: nameTH,
        nameENG: nameENG,
        password: password,

      }).then(() =>{
        setData([
          ...data,{
        IDnumber: IDnumber,
        nameTH: nameTH,
        nameENG: nameENG,
        password: password,

          }
        ])
      })
    } 

  //   const addStudent = () => {
  //     axios.post(process.env.REACT_APP_API_URL + "/student", {
  //         houseadd_province: houseadd_province,
  //         houseadd_subDistrict: houseadd_subDistrict,
  //         houseadd_road: houseadd_road,
  //         houseadd_houseNo: houseadd_houseNo,
  //         IDnumber_Path: IDnumber_Path,
  //         password: password,
  //         Birthday: Birthday,
  //         IDline: IDline,
  //         IDnumber: IDnumber,
  //         email: email,
  //         ethnicity: ethnicity,
  //         gender: gender,
  //         houseadd_alley: houseadd_alley,
  //         houseadd_district: houseadd_district,
  //         houseadd_postalCode: houseadd_postalCode,
  //         houseadd_village: houseadd_village,
  //         nameENG: nameENG,
  //         nameTH: nameTH,
  //         nationality: nationality,
  //         presentAddress: presentAddress,
  //         religion: religion
  //     }).then(() => {
  //         setData([
  //             ...data,
  //             {
  //                 houseadd_province: houseadd_province,
  //                 houseadd_subDistrict: houseadd_subDistrict,
  //                 houseadd_road: houseadd_road,
  //                 houseadd_houseNo: houseadd_houseNo,
  //                 IDnumber_Path: IDnumber_Path,
  //                 password: password,
  //                 Birthday: Birthday,
  //                 IDline: IDline,
  //                 IDnumber: IDnumber,
  //                 email: email,
  //                 ethnicity: ethnicity,
  //                 gender: gender,
  //                 houseadd_alley: houseadd_alley,
  //                 houseadd_district: houseadd_district,
  //                 houseadd_postalCode: houseadd_postalCode,
  //                 houseadd_village: houseadd_village,
  //                 nameENG: nameENG,
  //                 nameTH: nameTH,
  //                 nationality: nationality,
  //                 presentAddress: presentAddress,
  //                 religion: religion
  //             }
  //         ])
  //     })
  // }






    // const Role = [
    //     {
    //         role: 'นิสิต',
    //         value: 'นิสิต'
    //     },
    //     {
    //         role: 'ผู้ดูแลระบบ',
    //         value: 'ผู้ดูแลระบบ'
    //     },
    //     {
    //         role: 'อาจารย์',
    //         value: 'อาจารย์'
    //     }
    // ];



    // const inputform_data = [
    //     {
    //         Head: '1_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "nameTH"

    //     },
    //     {
    //         Head: '2_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "nameENG"

    //     },
    //     {
    //         Head: '3_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "password"

    //     },
    //     {
    //         Head: '4_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "gender"

    //     },
    //     {
    //         Head: '5_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "IDnumber"

    //     },
    //     {
    //         Head: '6_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "Birthday"

    //     },
    //     {
    //         Head: '7_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "IDnumber_Path"

    //     },
    //     {
    //         Head: '8_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "ethnicity"

    //     },
    //     {
    //         Head: '9_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "nationality"

    //     },
    //     {
    //         Head: '10_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "religion"

    //     },
    //     {
    //         Head: '11_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "houseadd_houseNo"

    //     },
    //     {
    //         Head: '12_วันเกิด',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "houseadd_village"

    //     },
    //     {
    //         Head: '13',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "houseadd_road"

    //     },
    //     {
    //         Head: '14',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "houseadd_alley"

    //     },
    //     {
    //         Head: '15',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "houseadd_subDistrict"

    //     },
    //     {
    //         Head: '16',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "houseadd_district"

    //     },
    //     {
    //         Head: '17',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "houseadd_province"

    //     },
    //     {
    //         Head: '18',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "presentAddress"

    //     },
    //     {
    //         Head: '19',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "phone"

    //     },
    //     {
    //         Head: '20',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "IDline"

    //     },
    //     {
    //         Head: '21',
    //         placeholder: 'วันเกิด',
    //         type: "text",
    //         name: "email"

    //     },




    // ];

    return (
        <div className=' bg-gray-200 slate-500 min-h-screen border'>
            <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                {/* <div className=' flex flex-row'>
                    <p className=' text-2xl ml-3' >ผู้ใช้งาน</p>
                    <select className='block ml-3  w-1/4 p-2 mb-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' name="course_id" id="course_id">
                        {Role.map((Role, index) => (
                            <option value={Role.value}>{Role.role}</option>
                        ))}
                    </select>
                </div> */}
            </div>
            <div className='container mx-auto'>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                    <div >
                        <p>ชื่อไทย</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setIDnumber(event.target.value)
                                }}
                                type="text"
                                name="Idnumber"
                                placeholder="ชื่อไทย"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
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
                    } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
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
                    } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div >
                        <p>ชื่อไทย</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setpassword(event.target.value)
                                }}
                                type="text"
                                name="password"
                                placeholder="ชื่อไทย"
                                class="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='  grid grid-cols-2 '>
                {/* <div className=' ml-3'>
                    <Backbutton></Backbutton>
                </div> */}
                <div className=' absolute right-0 mr-3'>
                    <button onClick={addteacher} href="home_admin" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
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

export default Test2