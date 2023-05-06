import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import EditStudent from './EditStudent';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import LoadingPage from '../../LoadingPage';

function StudentDetail() {

    const [data, setData] = useState([]);
    const [studentlist, setStudentList] = useState([]);

    const [scholarship, setScholarship] = useState([]);

    const { userID } = useParams();

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    const [fileProfile, setFileProfile] = useState(null);
    const [fileTranscript, setFileTranscript] = useState(null);
    const [fileIDnumber, setFileIDnumber] = useState(null);

    const [newProfile_Path, setNewProfile_Path] = useState(null);
    const [newIDnumber_Path, setNewIDnumber_Path] = useState(null);
    const [newTranscript_Path, setNewTranscript_Path] = useState(null);

    const [pathForProfile, setPathForProfile] = useState("");
    const [pathForIDnumber, setPathForIDnumber] = useState("");
    const [pathForTranscript, setPathForTranscript] = useState("");

    const [showModalProfile, setShowModalProfile] = useState(false);
    const [modalIDnumber, setModalIDnumber] = useState(false);
    const [modalTranscript, setModalTranscript] = useState(false);

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

    const deleteStudent = (userID) => {
        Swal.fire({
            title: 'ต้องการลบนิสิตหรือไม่?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'ใช่',
            denyButtonText: `ไม่ใช่`,
            cancelButtonText: 'ยกเลิก'
        })
            .then((results) => {
                if (results.isConfirmed) {

                    const fileProfileName = data.profile_Path.split("\\").pop();
                    const fileIDnumberName = data.IDnumber_Path.split("\\").pop();
                    const fileTranscriptName = data.transcript_Path.split("\\").pop();

                    axios.delete(`//localhost:8000/delete/profile/${fileProfileName}`)
                        .then(response => {
                            console.log("success");
                        })
                        .catch(error => {
                            console.log(error.response);
                        })
                    axios.delete(`//localhost:8000/delete/IDnumber/${fileIDnumberName}`)
                        .then(response => {
                            console.log("success");
                        })
                        .catch(error => {
                            console.log(error.response);
                        })
                    axios.delete(`//localhost:8000/delete/transcript/${fileTranscriptName}`)
                        .then(response => {
                            console.log("success");
                        })
                        .catch(error => {
                            console.log(error.response);
                        })

                    axios.delete(process.env.REACT_APP_API_URL + "/student", { data: { userID: userID } })
                        .then((response) => {
                            setStudentList(
                                studentlist.filter((_) => {
                                    return _.userID !== userID;
                                })
                            )

                            // Toast.fire({
                            //     icon: 'success',
                            //     title: 'Delete data success'
                            // })
                            Swal.fire({
                                // position: "top-end",
                                icon: "success",
                                title: "Delete data success",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { window.location.href = "/admin/home"; })


                        }).catch(function (error) {
                            if (error.response) {
                                // console.log(error.response);
                            }
                        });
                }
                else if (results.isDenied) {
                    window.location.href = "/admin/student/detail/" + userID;
                }
            })
    }



    const gotoStudentEdit = (userID) => {
        window.location.href = "/admin/student/edit/" + userID;
    }

    const goToAddWorkHistoryList = (userID) => {
        window.location.href = "/admin/student/work/add/" + userID;
    }

    const goToWorkHistoryList = (userID) => {
        window.location.href = "/admin/student/work/list/" + userID
    }

    useEffect(() => {

        const fetchData = () => {

            axios.post(process.env.REACT_APP_API_URL + "/student/detail", { userID: userID })
                .then(res => {
                    // console.log(res.data);

                    if (res.data.error === true) {
                        // console.log(res.data)
                        // console.log("ERROR FOUND WHEN GET DATA FROM API");
                        return;
                    }
                    setData(res.data.data);
                    setLoading(true);

                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);

                }).catch(error => {
                    // console.log(error.res);
                });

            axios.get(process.env.REACT_APP_API_URL + "/student/scholarship")
                .then(res => {
                    // console.log(res.data);

                    if (res.data.error === true) {
                        // console.log(res.data)
                        // console.log("ERROR FOUND WHEN GET DATA FROM API");
                        return;
                    }
                    setScholarship(res.data.data);

                }).catch(error => {
                    // console.log(error.res);
                });
        }
        fetchData();

    }, [pathForProfile, pathForIDnumber, pathForTranscript])

    const handleTranscriptDownload = () => {
        if (data.transcript_Path === null) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบไฟล์",
                showConfirmButton: false,
                timer: 1000,
            })
        }
        else {
            const filename = data.transcript_Path.split("\\").pop();
            axios({
                url: `//localhost:8000/download/transcript/${filename}`,
                method: "GET",
                responseType: "blob"
            })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", filename);
                    document.body.appendChild(link);
                    link.click();
                });
        }
    };

    const handleIDnumberDownload = () => {
        if (data.IDnumber_Path === null) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบไฟล์",
                showConfirmButton: false,
                timer: 1000,
            })
        }
        else {
            const filename = data.IDnumber_Path.split("\\").pop();
            axios({
                url: `//localhost:8000/download/IDnumber/${filename}`,
                method: "GET",
                responseType: "blob"
            })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", filename);
                    document.body.appendChild(link);
                    link.click();
                });
        }
    };

    const handleProfileDownload = () => {
        if (data.profile_Path === null) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบไฟล์",
                showConfirmButton: false,
                timer: 1000,
            })
        }
        else {
            const filename = data.profile_Path.split("\\").pop();
            axios({
                url: `//localhost:8000/download/profile/${filename}`,
                method: "GET",
                responseType: "blob"
            })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", filename);
                    document.body.appendChild(link);
                    link.click();
                });
        }
    };

    const handleProfileChange = (event) => {
        setFileProfile(event.target.files[0]);
    };

    const handleIDnumberChange = (event) => {
        setFileIDnumber(event.target.files[0]);
    };

    const handleTranscriptChange = (event) => {
        setFileTranscript(event.target.files[0]);
    };

    const handleProfileSubmit = (event) => {
        event.preventDefault();

        if (data.profile_Path === null) {
            const form = new FormData();
            form.append("file", fileProfile);

            const filename = null;

            axios.post(`//localhost:8000/edit/profile/${filename}`, form)
                .then((response) => {
                    console.log("Success");
                    setNewProfile_Path(response.data.path);

                    axios.put(process.env.REACT_APP_API_URL + "/student/profile/path", {
                        userID: userID,
                        profile_Path: response.data.path
                    })
                        .then(() => {
                            setPathForProfile([
                                ...pathForProfile,
                                {
                                    userID: userID,
                                    profile_Path: response.data.path
                                }
                            ])
                            setShowModalProfile(false);
                            Swal.fire({
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { })
                        })
                        .catch((error) => {
                            console.error("Error", error);
                        })
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }
        else {
            const form = new FormData();
            form.append("file", fileProfile);

            const filename = data.profile_Path.split("\\").pop();

            axios.post(`//localhost:8000/edit/profile/${filename}`, form)
                .then((response) => {
                    console.log("Success");
                    setNewProfile_Path(response.data.path);

                    axios.put(process.env.REACT_APP_API_URL + "/student/profile/path", {
                        userID: userID,
                        profile_Path: response.data.path
                    })
                        .then(() => {
                            setPathForProfile([
                                ...pathForProfile,
                                {
                                    userID: userID,
                                    profile_Path: response.data.path
                                }
                            ])
                            setShowModalProfile(false);
                            Swal.fire({
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { })
                        })
                        .catch((error) => {
                            console.error("Error", error);
                        })
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }
    };

    const handleIDnumberSubmit = (event) => {
        event.preventDefault();

        if (data.IDnumber_Path === null) {
            const form = new FormData();
            form.append("file", fileIDnumber);

            const filename = null;

            axios.post(`//localhost:8000/edit/IDnumber/${filename}`, form)
                .then((response) => {
                    console.log("Success");
                    setNewIDnumber_Path(response.data.path);

                    axios.put(process.env.REACT_APP_API_URL + "/student/IDnumber/path", {
                        userID: userID,
                        IDnumber_Path: response.data.path
                    })
                        .then(() => {
                            setPathForIDnumber([
                                ...pathForIDnumber,
                                {
                                    userID: userID,
                                    IDnumber_Path: response.data.path
                                }
                            ])
                            setModalIDnumber(false);
                            Swal.fire({
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { })
                        })
                        .catch((error) => {
                            console.error("Error", error);
                        })
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }
        else {
            const form = new FormData();
            form.append("file", fileIDnumber);

            const filename = data.IDnumber_Path.split("\\").pop();

            axios.post(`//localhost:8000/edit/IDnumber/${filename}`, form)
                .then((response) => {
                    console.log("Success");
                    setNewIDnumber_Path(response.data.path);

                    axios.put(process.env.REACT_APP_API_URL + "/student/IDnumber/path", {
                        userID: userID,
                        IDnumber_Path: response.data.path
                    })
                        .then(() => {
                            setPathForIDnumber([
                                ...pathForIDnumber,
                                {
                                    userID: userID,
                                    IDnumber_Path: response.data.path
                                }
                            ])
                            setModalIDnumber(false);
                            Swal.fire({
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { })
                        })
                        .catch((error) => {
                            console.error("Error", error);
                        })
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }
    };

    const handleTranscriptSubmit = (event) => {
        event.preventDefault();

        if (data.transcript_Path === null) {
            const form = new FormData();
            form.append("file", fileTranscript);

            const filename = null;

            axios.post(`//localhost:8000/edit/transcript/${filename}`, form)
                .then((response) => {
                    console.log("Success");
                    setNewTranscript_Path(response.data.path);

                    axios.put(process.env.REACT_APP_API_URL + "/student/transcript/path", {
                        userID: userID,
                        transcript_Path: response.data.path
                    })
                        .then(() => {
                            setPathForTranscript([
                                ...pathForTranscript,
                                {
                                    userID: userID,
                                    transcript_Path: response.data.path
                                }
                            ])
                            setModalTranscript(false);
                            Swal.fire({
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { })
                        })
                        .catch((error) => {
                            console.error("Error", error);
                        })
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }
        else {
            const form = new FormData();
            form.append("file", fileTranscript);

            const filename = data.transcript_Path.split("\\").pop();

            axios.post(`//localhost:8000/edit/transcript/${filename}`, form)
                .then((response) => {
                    console.log("Success");
                    setNewTranscript_Path(response.data.path);

                    axios.put(process.env.REACT_APP_API_URL + "/student/transcript/path", {
                        userID: userID,
                        transcript_Path: response.data.path
                    })
                        .then(() => {
                            setPathForTranscript([
                                ...pathForTranscript,
                                {
                                    userID: userID,
                                    transcript_Path: response.data.path
                                }
                            ])
                            setModalTranscript(false);
                            Swal.fire({
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { })
                        })
                        .catch((error) => {
                            console.error("Error", error);
                        })
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }
    };

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div>
                    <Routes>
                        <Route path='/admin/student/edit/:userID' element={<EditStudent />} />
                    </Routes>
                    <div className=" text-black min-h-screen space-y-5 mb-10">
                        <div className=" font-bold text-4xl m-10 grid grid-cols-1 place-items-center">ข้อมูลนิสิต</div>
                        <div className=' flex flex-row-reverse  '>
                            <div className='   mr-3'>
                                <button onClick={() => gotoStudentEdit(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center rotate-180 w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">แก้ไข</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                            <div className='  mr-3 place-items-end grid'>
                                <button onClick={() => goToWorkHistoryList(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease rotate-180">
                                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ประวัติการทำงาน</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                            {/* <div className='  mr-3'>
                                <button onClick={() => goToAddWorkHistoryList(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                        <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มประวัติการทำงาน</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div> */}
                            <div className='  mr-3'>
                                <button onClick={() => deleteStudent(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                                        <svg width="20" className=' text-white' height="20" viewBox="0 0 47 51" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ลบ</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className=' grid place-items-center m-5'>
                                {data.profile_Path ?
                                    <>
                                        <img src={`//localhost:8000/image/${data.profile_Path.split("\\").pop()}`} width="100" height="100"></img>
                                    </> : <></>}
                            </div>
                            <div className=' text-3xl text-center mb-5'>นิสิต : {data.nameTH}</div>
                            {
                                data.status == 1 ?
                                    <>
                                        <div className=' grid place-items-center'>
                                            <div className=' flex'>
                                                <p className=' text-xl text-center mb-5'>สถานะ : </p>
                                                <p className=' text-green-500 text-xl text-center mb-5 ml-5'>กำลังศึกษา</p>
                                            </div>
                                        </div>
                                    </> : <></>
                            }
                            {
                                data.status == 0 ?
                                    <>
                                        <div className=' grid place-items-center'>
                                            <div className=' flex'>
                                                <p className=' text-xl text-center mb-5'>สถานะ : </p>
                                                <p className=' text-red-500 text-xl text-center mb-5 ml-5'>จบศึกษา</p>
                                            </div>
                                        </div>
                                    </> : <></>
                            }
                            <div className=" grid grid-cols-1 place-items-center">
                                <div className=" block bg-gray-200 w-11/12 p-auto rounded-2xl ring ring-black">
                                    <div className=" flex justify-around">
                                        <div className=" ml-7">

                                            {data.nameTH ?
                                                <>
                                                    <div className=" m-3">ชื่อสกุล : {data.nameTH}</div>
                                                </> : <></>
                                            }
                                            {data.studentID ?
                                                <>
                                                    <div className=" m-3">รหัสประจำตัว : {data.studentID}</div>
                                                </> : <></>
                                            }
                                            {data.gender ?
                                                <>
                                                    <div className=" m-3">เพศ : {data.gender}</div>
                                                </> : <></>
                                            }
                                            {data.nationality ?
                                                <>
                                                    <div className=" m-3">สัญชาติ : {data.nationality}</div>
                                                </> : <></>
                                            }
                                            {data.phone ?
                                                <>
                                                    <div className=" m-3">มือถือ : {data.phone}</div>
                                                </> : <></>
                                            }
                                            {data.email ?
                                                <>
                                                    <div className=" m-3">Email : {data.email}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_houseNo ?
                                                <>
                                                    <div className=" m-3">บ้านเลขที่ : {data.houseadd_houseNo}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_road ?
                                                <>
                                                    <div className=" m-3">ถนน : {data.houseadd_road}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_subDistrict ?
                                                <>
                                                    <div className=" m-3">ตำบล : {data.houseadd_subDistrict}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_province ?
                                                <>
                                                    <div className=" m-3">จังหวัด : {data.houseadd_province}</div>
                                                </> : <></>
                                            }
                                            {data.presentAddress ?
                                                <>
                                                    <div className=" m-3">ที่อยู่ปัจจุบัน : {data.presentAddress}</div>
                                                </> : <></>
                                            }
                                            {data.scholarship_name ?
                                                <>
                                                    <div className=" m-3">ประเภททุน : {data.scholarship_name}</div>
                                                </> : <></>
                                            }
                                        </div>

                                        <div className=" mr-7">
                                            {data.nameENG ?
                                                <>
                                                    <div className=" m-3">ชื่ออังกฤษ : {data.nameENG}</div>
                                                </> : <></>
                                            }
                                            {data.IDnumber ?
                                                <>
                                                    <div className=" m-3">เลขประจำตัวประชาชน : {data.IDnumber}</div>
                                                </> : <></>
                                            }
                                            {data.ethnicity ?
                                                <>
                                                    <div className=" m-3">เชื้อชาติ : {data.ethnicity}</div>
                                                </> : <></>
                                            }
                                            {data.religion ?
                                                <>
                                                    <div className=" m-3">ศาสนา : {data.religion}</div>
                                                </> : <></>
                                            }
                                            {data.IDline ?
                                                <>
                                                    <div className=" m-3">IDline : {data.IDline}</div>
                                                </> : <></>
                                            }
                                            {data.Birthday ?
                                                <>
                                                    <div className=" m-3">วันเกิด : {format(new Date(data.Birthday), 'dd/MM/yyyy')}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_village ?
                                                <>
                                                    <div className=" m-3">หมู่บ้าน : {data.houseadd_village}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_alley ?
                                                <>
                                                    <div className=" m-3">ซอย : {data.houseadd_alley}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_district ?
                                                <>
                                                    <div className=" m-3">อำเภอ : {data.houseadd_district}</div>
                                                </> : <></>
                                            }
                                            {data.houseadd_postalCode ?
                                                <>
                                                    <div className=" m-3">รหัสไปรษณีย์ : {data.houseadd_postalCode}</div>
                                                </> : <></>
                                            }

                                            {data.yearStartEnroll ?
                                                <>
                                                    <div className=" m-3">ปีที่เริ่มศึกษา : {data.yearStartEnroll}</div>
                                                </> : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <>
                                    <div className=' mt-5 flex'>
                                        <div className=' mr-5'>
                                            <button onClick={handleTranscriptDownload} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                                <span className=" absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                    </svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">ดาวน์โหลดไฟล์ผลการเรียน</span>
                                                <span className="relative invisible">Button Text</span>
                                            </button>
                                        </div>
                                        <div className=''>
                                            <button onClick={() => setModalTranscript(true)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                                <span className=" absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มไฟล์ผลการเรียน</span>
                                                <span className="relative invisible">Button Text</span>
                                            </button>
                                            {modalTranscript ? (
                                                <>
                                                    <div className=" fixed inset-0 z-10 overflow-y-auto">
                                                        <div
                                                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                                                            onClick={() => setModalTranscript(false)}
                                                        ></div>
                                                        <div className="flex items-center min-h-screen px-4 py-8">
                                                            <div className=" w-auto relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                                                                <div className="">
                                                                    <div className=" text-center sm:ml-4   ">
                                                                        <h4 className="text-lg font-medium text-gray-800">
                                                                            แก้ไขไฟล์ผลการเรียน
                                                                        </h4>
                                                                        <input
                                                                            className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                                                            type="file"
                                                                            name='profile_Path'
                                                                            placeholder="profile_Path"
                                                                            onChange={handleTranscriptChange}
                                                                        />
                                                                        <div className="items-center gap-2 mt-3 sm:flex">
                                                                            <button
                                                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                                                onClick={handleTranscriptSubmit}
                                                                            >
                                                                                เพิ่ม
                                                                            </button>
                                                                            <button
                                                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                                                                                onClick={() =>
                                                                                    setModalTranscript(false)
                                                                                }
                                                                            >
                                                                                ยกเลิก
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </>
                                <>
                                    <div className=' mt-5 flex'>
                                        <div className=' mr-5'>
                                            <button onClick={handleProfileDownload} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                                <span className=" absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                    </svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">ดาวน์โหลดรูปนิสิต</span>
                                                <span className="relative invisible">Button Text</span>
                                            </button>
                                        </div>
                                        <div className=''>
                                            <button onClick={() => setShowModalProfile(true)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                                <span className=" absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มรูปนิสิต</span>
                                                <span className="relative invisible">Button Text</span>
                                            </button>
                                        </div>
                                    </div>
                                    {showModalProfile ? (
                                        <>
                                            <div className=" fixed inset-0 z-10 overflow-y-auto">
                                                <div
                                                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                                                    onClick={() => setShowModalProfile(false)}
                                                ></div>
                                                <div className="flex items-center min-h-screen px-4 py-8">
                                                    <div className=" w-auto relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                                                        <div className="">
                                                            <div className=" text-center sm:ml-4   ">
                                                                <h4 className="text-lg font-medium text-gray-800">
                                                                    แก้ไขรูปนิสิต
                                                                </h4>
                                                                <input
                                                                    className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                                                    type="file"
                                                                    name='profile_Path'
                                                                    placeholder="profile_Path"
                                                                    onChange={handleProfileChange}
                                                                />
                                                                <div className="items-center gap-2 mt-3 sm:flex">
                                                                    <button
                                                                        className="w-full mt-2 p-2.5 flex-1 text-white bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                                        onClick={handleProfileSubmit}
                                                                    >
                                                                        เพิ่ม
                                                                    </button>
                                                                    <button
                                                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                                                                        onClick={() =>
                                                                            setShowModalProfile(false)
                                                                        }
                                                                    >
                                                                        ยกเลิก
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null}
                                </>
                                <>
                                    <div className=' mt-5 flex'>
                                        <div className=' mr-5'>
                                            <button onClick={handleIDnumberDownload} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                                <span className=" absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                    </svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">ดาวน์โหลดบัตรประจำตัวประชาชน</span>
                                                <span className="relative invisible">Button Text</span>
                                            </button>
                                        </div>
                                        <div className=''>
                                            <button onClick={() => setModalIDnumber(true)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                                <span className=" absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มบัตรประจำตัวประชาชน</span>
                                                <span className="relative invisible">Button Text</span>
                                            </button>
                                            {modalIDnumber ? (
                                                <>
                                                    <div className=" fixed inset-0 z-10 overflow-y-auto">
                                                        <div
                                                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                                                            onClick={() => setModalIDnumber(false)}
                                                        ></div>
                                                        <div className="flex items-center min-h-screen px-4 py-8">
                                                            <div className=" w-auto relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                                                                <div className="">
                                                                    <div className=" text-center sm:ml-4   ">
                                                                        <h4 className="text-lg font-medium text-gray-800">
                                                                            แก้ไขบัตรประจำตัวประชาชน
                                                                        </h4>
                                                                        <input
                                                                            className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                                                            type="file"
                                                                            name='profile_Path'
                                                                            placeholder="profile_Path"
                                                                            onChange={handleIDnumberChange}
                                                                        />
                                                                        <div className="items-center gap-2 mt-3 sm:flex">
                                                                            <button
                                                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                                                onClick={handleIDnumberSubmit}
                                                                            >
                                                                                เพิ่ม
                                                                            </button>
                                                                            <button
                                                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                                                                                onClick={() =>
                                                                                    setModalIDnumber(false)
                                                                                }
                                                                            >
                                                                                ยกเลิก
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default StudentDetail