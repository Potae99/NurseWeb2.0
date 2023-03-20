import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import AdminTeacherDetail from './AdminTeacherDetail';

function AdminTeacherEdit() {

    const [houseadd_province, sethouseadd_province] = useState("");
    const [houseadd_subDistrict, sethouseadd_subDistrict] = useState("");
    const [houseadd_road, sethouseadd_road] = useState("");
    const [houseadd_houseNo, sethouseadd_houseNo] = useState("");
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
    const [teacherID, setTeacherID] = useState('');

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
                setTeacherID(res.data.data.teacherID);
            }).catch(error => {
                console.log(error.res);
            });
    }

    const backToTeacherDetail = (userID) => {
        window.location.href = "/admin/teacher/" + userID;
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div>
            <Routes>
                <Route path='/admin/teacher/:userID' element={<AdminTeacherDetail/>}/>
            </Routes>
            <div className=' bg-gray-200 slate-500 min-h-screen border'>
                <h1 className=' text-4xl text-center m-3'>แก้ไขข้อมูลอาจารย์</h1>

                <div className='container mx-auto'>
                    <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                        <div >
                            <p>รหัสประจำตัว</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setTeacherID(event.target.value)
                                    }}
                                    type="text"
                                    value={teacherID}
                                    name="teacherID"
                                    placeholder='รหัสประจำตัว'
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>ชื่อไทย</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setnameTH(event.target.value)
                                    }}
                                    type="text"
                                    value={nameTH}
                                    name="nameTH"
                                    placeholder='ชื่อไทย'
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>ชื่ออังกฤษ</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setnameENG(event.target.value)
                                    }}
                                    type="text"
                                    value={nameENG}
                                    name="nameENG"
                                    placeholder="ชื่ออังกฤษ"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>รหัสประจำตัวประชาชน</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setIDnumber(event.target.value)
                                    }}
                                    type="text"
                                    value={IDnumber}
                                    name="IDnumber"
                                    placeholder="รหัสประจำตัวประชาชน"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        {/* <div >
                        <p>IDnumber_Path</p>
                        <div className="mb-5 flex justify-center ">
                            <input
                                onChange={(event) => {
                                    setIDnumber_Path(event.target.value)
                                }}
                                type="text"
                                name="IDnumber_Path"
                                placeholder="IDnumber_Path"
                                className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div> */}
                        <div >
                            <p>Password</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setpassword(event.target.value)
                                    }}
                                    type="text"
                                    value={password}
                                    name="Password"
                                    placeholder="Password"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>วันเกิด</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setBirthday(event.target.value)
                                    }}
                                    type="date"
                                    value={Birthday}
                                    name="Birthday"
                                    placeholder="วันเกิด"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>Email</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setemail(event.target.value)
                                    }}
                                    type="text"
                                    value={email}
                                    name="Email"
                                    placeholder="Email"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>เพศ</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setgender(event.target.value)
                                    }}
                                    type="text"
                                    value={gender}
                                    name="Gender"
                                    placeholder="เพศ"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>บ้านเลขที่</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_houseNo(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_houseNo}
                                    name="houseadd_houseNo"
                                    placeholder="บ้านเลขที่"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>หมู่บ้าน</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_village(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_village}
                                    name="houseadd_village"
                                    placeholder="หมู่บ้าน"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>ตำบล</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_subDistrict(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_subDistrict}
                                    name="houseadd_subDistrict"
                                    placeholder="ตำบล"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>อำเภอ</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_district(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_district}
                                    name="houseadd_district"
                                    placeholder="อำเภอ"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>จังหวัด</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_province(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_province}
                                    name="houseadd_province"
                                    placeholder="จังหวัด"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>รหัสไปรษณีย์</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_postalCode(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_postalCode}
                                    name="houseadd_postalCode"
                                    placeholder="รหัสไปรษณีย์"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>ถนน</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_road(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_road}
                                    name="houseadd_road"
                                    placeholder="ถนน"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>ซอย</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        sethouseadd_alley(event.target.value)
                                    }}
                                    type="text"
                                    value={houseadd_alley}
                                    name="houseadd_alley"
                                    placeholder="ซอย"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>สัญชาติ</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setethnicity(event.target.value)
                                    }}
                                    type="text"
                                    value={ethnicity}
                                    name="ethnicity"
                                    placeholder="สัญชาติ"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>เชื้อชาติ</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setnationality(event.target.value)
                                    }}
                                    type="text"
                                    value={nationality}
                                    name="nationality"
                                    placeholder="เชื้อชาติ"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>ศาสนา</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setreligion(event.target.value)
                                    }}
                                    type="text"
                                    value={religion}
                                    name="religion"
                                    placeholder="ศาสนา"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>ที่อยู่ปัจจุบัน</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setpresentAddress(event.target.value)
                                    }}
                                    type="text"
                                    value={presentAddress}
                                    name="presentAddress"
                                    placeholder="ที่อยู่ปัจจุบัน"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>IDline</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setIDline(event.target.value)
                                    }}
                                    type="text"
                                    value={IDline}
                                    name="IDline"
                                    placeholder="IDline"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div >
                            <p>มือถือ</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={(event) => {
                                        setPhone(event.target.value)
                                    }}
                                    type="text"
                                    value={phone}
                                    name="phone"
                                    placeholder="มือถือ"
                                    className="w-full rounded-md border border-while (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='  grid grid-cols-2 '>
                    <div className=' ml-3'>
                        <button onClick={() => backToTeacherDetail(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </div>
                    <div className=' absolute right-0 mr-3'>
                        <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
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
        </div>
    )

}

export default AdminTeacherEdit