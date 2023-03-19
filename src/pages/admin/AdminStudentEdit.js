import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import AdminStudentDetail from './AdminStudentDetail';

function AdminStudentEdit() {

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

    const { userID } = useParams();

    const editStudent = () => {
        axios.put(process.env.REACT_APP_API_URL + "/student", {
            userID: userID,
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
                    userID: userID,
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
            window.location.href = "/admin/student/detail/" + userID;
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
                setData(res.data.data);
                setnameTH(res.data.data.nameTH);
                setnameENG(res.data.data.nameENG);
                sethouseadd_province(res.data.data.houseadd_province);
                sethouseadd_subDistrict(res.data.data.houseadd_subDistrict);
                sethouseadd_road(res.data.data.houseadd_road);
                sethouseadd_houseNo(res.data.data.houseadd_houseNo);
                setpassword(res.data.data.password);
                setBirthday(res.data.data.Birthday);
                setIDline(res.data.data.IDline);
                setIDnumber(res.data.data.IDnumber);
                setemail(res.data.data.email);
                setethnicity(res.data.data.ethnicity);
                setgender(res.data.data.gender);
                sethouseadd_alley(res.data.data.houseadd_alley);
                sethouseadd_district(res.data.data.houseadd_district);
                sethouseadd_postalCode(res.data.data.houseadd_postalCode);
                sethouseadd_village(res.data.data.houseadd_village);
                setnationality(res.data.data.nationality);
                setpresentAddress(res.data.data.presentAddress);
                setreligion(res.data.data.religion);
                setPhone(res.data.data.phone);
            }).catch(error => {
                console.log(error.res);
            });
    }

    const backToStudentDetail = (userID) => {
        window.location.href = "/admin/student/detail/" + userID;
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div>
            <Routes>
                <Route path='/admin/student/detail/:userID' element={<AdminStudentDetail/>}/>
            </Routes>
            
            <div className=' bg-gray-200 slate-500 min-h-screen border'>
                <h1 className=' text-4xl text-center m-3'>แก้ไขข้อมูลนิสิต</h1>

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
                                    value={nameTH}
                                    name="nameTH"
                                    placeholder='ชื่อไทย'
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
                                    value={nameENG}
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
                                    value={IDnumber}
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
                                    value={password}
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
                                    value={Birthday}
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
                                    value={email}
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
                                    value={gender}
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
                                    value={houseadd_houseNo}
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
                                    value={houseadd_village}
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
                                    value={houseadd_subDistrict}
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
                                    value={houseadd_district}
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
                                    value={houseadd_province}
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
                                    value={houseadd_postalCode}
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
                                    value={houseadd_road}
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
                                    value={houseadd_alley}
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
                                    value={ethnicity}
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
                                    value={nationality}
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
                                    value={religion}
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
                                    value={presentAddress}
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
                                    value={IDline}
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
                                    value={phone}
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
                        <button onClick={() => backToStudentDetail(userID)} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                            <span class="relative invisible">Button Text</span>
                        </button>
                    </div>
                    <div className=' absolute right-0 mr-3'>
                        <button onClick={() => editStudent(userID)} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
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
        </div>
    )

}

export default AdminStudentEdit