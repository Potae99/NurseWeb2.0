import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import StudentDetail from './StudentDetail';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import LoadingPage from '../../LoadingPage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

function EditStudent() {

    const [houseadd_province, sethouseadd_province] = useState("");
    const [houseadd_subDistrict, sethouseadd_subDistrict] = useState("");
    const [houseadd_road, sethouseadd_road] = useState("");
    const [houseadd_houseNo, sethouseadd_houseNo] = useState("");
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
    const [studentID, setStudentID] = useState("");
    const [scholarship_name, setScholarship_name] = useState("");
    const [yearStartEnroll, setyearStartEnroll] = useState("");
    const [status, setStatus] = useState("");
    const [defaultBirthday, setDefaultBirthday] = useState(null);
    const [generation, setGeneration] = useState("");
    const [IDnumber_Path, setIDnumber_Path] = useState("");
    const [profile_Path, setProfile_Path] = useState("");
    const [transcript_Path, setTranscript_Path] = useState("");

    const [data, setData] = useState("");

    const { userID } = useParams();

    const [province, setProvince] = useState([]);
    const [amphures, setAmphures] = useState([]);
    const [tambons, setTambons] = useState([]);
    const [zipCode, setZipCode] = useState('');
    const [scholarship, setScholarship] = useState([]);

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);


    const editStudent = () => {
        Swal.fire({
            title: 'ข้อมูลมีการเปลี่ยนแปลง',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'บันทึก',
            denyButtonText: `ไม่บันทึก`,
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                const formattedBirthday = moment(Birthday).format('YYYY-MM-DD');

                axios.put(process.env.REACT_APP_API_URL + "/student", {
                    userID: userID,
                    houseadd_province: houseadd_province,
                    houseadd_subDistrict: houseadd_subDistrict,
                    houseadd_road: houseadd_road,
                    houseadd_houseNo: houseadd_houseNo,
                    Birthday: formattedBirthday,
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
                    phone: phone,
                    studentID: studentID,
                    scholarship_name: scholarship_name,
                    yearStartEnroll: yearStartEnroll,
                    status: status,
                    generation: generation,
                    profile_Path: profile_Path,
                    IDnumber_Path: IDnumber_Path,
                    transcript_Path: transcript_Path

                }).then(() => {
                    setData([
                        ...data,
                        {
                            userID: userID,
                            houseadd_province: province,
                            houseadd_subDistrict: tambons,
                            houseadd_road: houseadd_road,
                            houseadd_houseNo: houseadd_houseNo,
                            Birthday: formattedBirthday,
                            IDline: IDline,
                            IDnumber: IDnumber,
                            email: email,
                            ethnicity: ethnicity,
                            gender: gender,
                            houseadd_alley: houseadd_alley,
                            houseadd_district: amphures,
                            houseadd_postalCode: houseadd_postalCode,
                            houseadd_village: houseadd_village,
                            nameENG: nameENG,
                            nameTH: nameTH,
                            nationality: nationality,
                            presentAddress: presentAddress,
                            religion: religion,
                            phone: phone,
                            studentID: studentID,
                            scholarship_name: scholarship_name,
                            yearStartEnroll: yearStartEnroll,
                            status: status,
                            generation: generation,
                            profile_Path: profile_Path,
                            IDnumber_Path: IDnumber_Path,
                            transcript_Path: transcript_Path
                        }
                    ])
                    // Swal.fire('Saved!', '', 'success')
                    Swal.fire({
                        icon: "success",
                        title: "Saved!",
                        showConfirmButton: false,
                        timer: 1000,
                    })
                        .then(() => { window.location.href = "/admin/student/detail/" + userID; })

                })
                    .catch(error => {
                        // console.log(error.request)
                    })

            } else if (result.isDenied) {
                // Swal.fire('Changes are not saved', '', 'info')
                Swal.fire({
                    icon: "info",
                    title: "Changes are not saved",
                    showConfirmButton: false,
                    timer: 1000,
                })
                    .then(() => { window.location.href = "/admin/student/detail/" + userID; })

            }
        })
    }

    const fetchData = () => {
        axios.post(process.env.REACT_APP_API_URL + "/student/detail", { userID: userID })
            .then(res => {

                // console.log(res.data.data.Birthday);

                const defaultBirthday = moment(res.data.data.Birthday).toDate();
                // console.log(res.data);

                if (res.data.error === true) {
                    // console.log(res.data)
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setnameTH(res.data.data.nameTH);
                setnameENG(res.data.data.nameENG);
                sethouseadd_province(res.data.data.houseadd_province);
                sethouseadd_subDistrict(res.data.data.houseadd_subDistrict);
                sethouseadd_road(res.data.data.houseadd_road);
                sethouseadd_houseNo(res.data.data.houseadd_houseNo);
                // setBirthday((format(new Date(res.data.data.Birthday), 'yyyy-MM-dd')));
                // setDefaultBirthday(defaultBirthday);
                setBirthday(defaultBirthday);
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
                setStudentID(res.data.data.studentID);
                setScholarship_name(res.data.data.scholarship_name);
                setStatus(res.data.data.status);
                setyearStartEnroll(res.data.data.yearStartEnroll);
                setGeneration(res.data.data.generation);
                setProfile_Path(res.data.data.profile_Path);
                setIDnumber_Path(res.data.data.IDnumber_Path);
                setTranscript_Path(res.data.data.transcript_Path);
                setLoading(true);

                setTimeout(() => {
                    setCompleted(true);
                }, 1000);

            }).catch(error => {
                // console.log(error.res);
            });

        axios.get(process.env.REACT_APP_API_URL + "/location")
            .then(res => {
                // console.log(res.data)

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setProvince(res.data.data);
            })
            .catch(error => {
                console.log(error.res)
            });

        axios.get(process.env.REACT_APP_API_URL + "/student/scholarship")
            .then(res => {
                // console.log(res.data)

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                }
                setScholarship(res.data.data);
            })
            .catch(error => {
                // console.log(error.res);
            })
    }

    const backToStudentDetail = (userID) => {
        window.location.href = "/admin/student/detail/" + userID;
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);

    }, [])

    const onchangeProvince = (event) => {
        axios.get(process.env.REACT_APP_API_URL + "/location/amphures", { params: { province_id: event.target.value } })
            .then(res => {
                // console.log(res.data);

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setAmphures(res.data.data);
            })
            .catch(error => {
                // console.log(error.res);
            });
    }

    const onchangeAmphures = (event) => {
        axios.get(process.env.REACT_APP_API_URL + "/location/tambons", { params: { amphure_id: event.target.value } })
            .then(res => {
                // console.log(res.data)

                if (res.data.error === true) {
                    // console(res.data);
                    // console("ERROR FOUND WHEN GET DATA FROM API");
                }
                setTambons(res.data.data);
            })
            .catch(error => {
                // console.log(error.res);
            });
    }

    const onchangeTambons = (event) => {
        const filterTambons = tambons.filter(item => {
            return event.target.value == item.tambon_id
        })
        sethouseadd_postalCode(filterTambons[0].zip_code)
        setZipCode(filterTambons[0].zip_code)

        sethouseadd_subDistrict(filterTambons[0].name_th)
    }
    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div>
                    <Routes>
                        <Route path='/admin/student/detail/:userID' element={<StudentDetail />} />
                    </Routes>
                    <div className=' text-black bg-white slate-500 min-h-screen '>
                        <h1 className=' text-4xl text-center m-3'>แก้ไขข้อมูลนิสิต</h1>
                        <div className='container mx-auto'>
                            <div className=' grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                                <div ><p>ปีที่เริ่มศึกษา</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            // value={yearStartEnroll}
                                            defaultValue={yearStartEnroll}
                                            onChange={(event) => {
                                                setyearStartEnroll(event.target.value)
                                            }}
                                            type="text"
                                            name="yearStartEnroll"
                                            placeholder='ปีที่เริ่มศึกษา'
                                            className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>รุ่น</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            onChange={(event) => {
                                                setGeneration(event.target.value)
                                            }}
                                            type="text"
                                            defaultValue={generation}
                                            name="generation"
                                            placeholder="รุ่น"
                                            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>สถานะ</p>
                                    <div className="mb-5 flex justify-center ">
                                        <select
                                            onChange={(event) => {
                                                setStatus(event.target.value)
                                                // console.log(event.target.value)
                                            }}
                                            type="text"
                                            value={status}
                                            name="status"
                                            placeholder="สถานะ"
                                            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                        >
                                            <option value={""} ></option>
                                            <option value={1}>กำลังศึกษา</option>
                                            <option value={0}>จบการศึกษา</option>
                                        </select>
                                    </div>
                                </div>
                                <div ><p>ทุนการศึกษา</p>
                                    <div className="mb-5 flex justify-center ">
                                        <select
                                            onChange={(event) => {
                                                const filterScholarship = scholarship.filter(item => {
                                                    return event.target.value == item.scholarship_id
                                                })
                                                setScholarship_name(filterScholarship[0].scholarship_name)
                                            }}
                                            type="text"
                                            name='scholarship_name'
                                            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                        >
                                            <option value={""}>{scholarship_name}</option>
                                            {
                                                scholarship.map((_, index) => (<option key={index} value={_.scholarship_id}>{_.scholarship_name}</option>))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div ><p>รหัสนิสิต</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={studentID}
                                            onChange={(event) => {
                                                setStudentID(event.target.value)
                                            }}
                                            type="text"
                                            name="studentID"
                                            placeholder='รหัสนิสิต'
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>ชื่อไทย</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={nameTH}
                                            onChange={(event) => {
                                                setnameTH(event.target.value)
                                            }}
                                            type="text"
                                            name="nameTH"
                                            placeholder='ชื่อไทย'
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>ชื่ออังกฤษ</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={nameENG}
                                            onChange={(event) => {
                                                setnameENG(event.target.value)
                                            }}
                                            type="text"
                                            name="nameENG"
                                            placeholder="ชื่ออังกฤษ"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>รหัสประจำตัวประชาชน</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={IDnumber}
                                            onChange={(event) => {
                                                setIDnumber(event.target.value)
                                            }}
                                            type="text"
                                            name="IDnumber"
                                            placeholder="รหัสประจำตัวประชาชน"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>วันเกิด</p>
                                    <div className="mb-5 flex justify-center ">
                                        {/* <input
                                            defaultValue={Birthday}
                                            onChange={(event) => {
                                                setBirthday(event.target.value)
                                            }}
                                            type="date"
                                            name="Birthday"
                                            placeholder="วันเกิด"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        /> */}
                                        <DatePicker
                                            selected={Birthday ? Birthday : defaultBirthday}
                                            onChange={date => setBirthday(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="dd/MM/yyyy"
                                            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                            required
                                        />
                                    </div>
                                </div>
                                <div ><p>Email</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={email}
                                            onChange={(event) => {
                                                setemail(event.target.value)
                                            }}
                                            type="text"
                                            name="Email"
                                            placeholder="Email"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div><label>เพศ
                                    <select value={gender} onChange={(event => { setgender(event.target.value) })} name='เพศ' className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md">
                                        <option value={""}></option>
                                        <option value={"หญิง"}>หญิง</option>
                                        <option value={"ชาย"}>ชาย</option>
                                        <option value={"ไม่ระบุ"}>ไม่ระบุ</option>
                                    </select>
                                </label>
                                </div>
                                <div ><p>สัญชาติ</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={ethnicity}
                                            onChange={(event) => {
                                                setethnicity(event.target.value)
                                            }}
                                            type="text"
                                            name="ethnicity"
                                            placeholder="สัญชาติ"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>เชื้อชาติ</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={nationality}
                                            onChange={(event) => {
                                                setnationality(event.target.value)
                                            }}
                                            type="text"
                                            name="nationality"
                                            placeholder="เชื้อชาติ"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>ศาสนา</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={religion}
                                            onChange={(event) => {
                                                setreligion(event.target.value)
                                            }}
                                            type="text"
                                            name="religion"
                                            placeholder="ศาสนา"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>IDline</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={IDline}
                                            onChange={(event) => {
                                                setIDline(event.target.value)
                                            }}
                                            type="text"
                                            name="IDline"
                                            placeholder="IDline"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div ><p>มือถือ</p>
                                    <div className="mb-5 flex justify-center ">
                                        <input
                                            defaultValue={phone}
                                            onChange={(event) => {
                                                setPhone(event.target.value)
                                            }}
                                            type="text"
                                            name="phone"
                                            placeholder="มือถือ"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=' p-6'>
                                <p className=' mb-6'>ที่อยู่ตามทะเบียนบ้าน</p>
                                <div className=' grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2'>
                                    <div ><p>บ้านเลขที่</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={houseadd_houseNo}
                                                onChange={(event) => {
                                                    sethouseadd_houseNo(event.target.value)
                                                }}
                                                type="text"
                                                name="houseadd_houseNo"
                                                placeholder="บ้านเลขที่"
                                                className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>หมู่บ้าน</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={houseadd_village}
                                                onChange={(event) => {
                                                    sethouseadd_village(event.target.value)
                                                }}
                                                type="text"
                                                name="houseadd_village"
                                                placeholder="หมู่บ้าน"
                                                className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ถนน</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={houseadd_road}
                                                onChange={(event) => {
                                                    sethouseadd_road(event.target.value)
                                                }}
                                                type="text"
                                                name="houseadd_road"
                                                placeholder="ถนน"
                                                className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ซอย</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={houseadd_alley}
                                                onChange={(event) => {
                                                    sethouseadd_alley(event.target.value)
                                                }}
                                                type="text"
                                                name="houseadd_alley"
                                                placeholder="ซอย"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>จังหวัด</p>
                                        <div className="mb-5 flex justify-center ">
                                            <select
                                                onChange={(event) => {
                                                    const filterProvince = province.filter(item => {
                                                        return event.target.value == item.province_id
                                                    })
                                                    sethouseadd_province(filterProvince[0].name_th)
                                                    onchangeProvince(event)
                                                }}
                                                type="text"
                                                name='province'
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            >
                                                <option value={""}>{houseadd_province}</option>
                                                {
                                                    province.map((_, index) => (<option key={index} value={_.province_id}>{_.name_th}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div ><p>อำเภอ</p>
                                        <div className="mb-5 flex justify-center ">
                                            <select
                                                onChange={(event) => {
                                                    const filterAmphures = amphures.filter(item => {
                                                        return event.target.value == item.amphure_id
                                                    })
                                                    sethouseadd_district(filterAmphures[0].name_th)
                                                    onchangeAmphures(event)
                                                }}
                                                type="text"
                                                name='houseadd_district'
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            >
                                                <option value={""}>{houseadd_district}</option>
                                                {
                                                    amphures.map((_, index) => (<option key={index} value={_.amphure_id}>{_.name_th}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div ><p>ตำบล</p>
                                        <div className="mb-5 flex justify-center ">
                                            <select
                                                onChange={(event) => {
                                                    onchangeTambons(event)
                                                }}
                                                type="text"
                                                name='houseadd_subdistrict'
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            >
                                                <option value={""}>{houseadd_subDistrict}</option>
                                                {
                                                    tambons.map((_, index) => (<option key={index} value={_.tambon_id}>{_.name_th}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div ><p>รหัสไปรษณีย์</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={houseadd_postalCode}
                                                onChange={(event) => {
                                                    sethouseadd_postalCode(event.target.value)
                                                }}
                                                type="text"
                                                name="houseadd_postalCode"
                                                placeholder="รหัสไปรษณีย์"
                                                className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=''><p>ที่อยู่ปัจจุบัน</p>
                                    <div className="mb-5 flex justify-center ">
                                        <textarea
                                            defaultValue={presentAddress}
                                            onChange={(event) => {
                                                setpresentAddress(event.target.value)
                                            }}
                                            type="text"
                                            name="presentAddress"
                                            placeholder="ที่อยู่ปัจจุบัน"
                                            className="w-full rounded-md border border-black (condition) {
                    } bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='  grid grid-cols-2 '>
                            <div className=' ml-3'>
                                <button onClick={() => backToStudentDetail(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                            <div className=' absolute right-0 mr-7'>
                                <button onClick={() => editStudent(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
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
                </div>
            )}
        </>
    )

}

export default EditStudent