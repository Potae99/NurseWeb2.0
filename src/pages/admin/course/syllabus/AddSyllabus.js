import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import LoadingPage from '../../../LoadingPage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

function AddSyllabus() {
    const [syllabusName, setsyllabusName] = useState("");
    const [syllabusDate, setsyllabusDate] = useState("");
    const [startUse, setstartUse] = useState("");
    const [endUse, setendUse] = useState("");
    const [detail, setdetail] = useState("");
    const [syllabus_Path, setSyllabus_Path] = useState(null);
    const [file, setFile] = useState(null);

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

    const addSyllabus = () => {

        const formattedSyllabusDate = moment(syllabusDate).format('YYYY-MM-DD');
        const formattedStartUse = moment(startUse).format('YYYY-MM-DD');
        const formattedEndUse = moment(endUse).format('YYYY-MM-DD');

        axios.post(process.env.REACT_APP_API_URL + "/course/syllabus", {
            syllabusName: syllabusName,
            syllabusDate: formattedSyllabusDate,
            startUse: formattedStartUse,
            endUse: formattedEndUse,
            detail: detail,
            syllabus_Path: syllabus_Path

        }).then(() => {
            setData([
                ...data,
                {
                    syllabusName: syllabusName,
                    syllabusDate: formattedSyllabusDate,
                    startUse: formattedStartUse,
                    endUse: formattedEndUse,
                    detail: detail,
                    syllabus_Path: syllabus_Path
                }
            ])
            Swal.fire({
                icon: "success",
                title: "Add Syllabus success",
                showConfirmButton: false,
                timer: 1000,
            })
                .then(() => { window.location.href = "/admin/course/syllabus/adminsyllabus"; })
        })
            .catch(error => {
                // console.log(error.request)
                Swal.fire({
                    icon: "error",
                    title: "โปรดตรวจสอบข้อมูล",
                    showConfirmButton: false,
                    timer: 2000,
                })
            })
    }

    const backToAdminSyllabus = () => {
        window.location.href = "/admin/course/syllabus/adminsyllabus"
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);

            setTimeout(() => {
                setCompleted(true);
            }, 1000);
        }, 2000);
    }, [])

    // const handleFileChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     const fileUrl = URL.createObjectURL(selectedFile);
    //     setSyllabus_Path(fileUrl);
    // };

    // const handleFileChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     const filePath = selectedFile.path;
    //     setSyllabus_Path(filePath);
    // };

    // const handleFileChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     const currentDate = new Date();
    //     const formattedDate = `${currentDate.getFullYear()}_${(currentDate.getMonth() + 1)
    //         .toString()
    //         .padStart(2, '0')}_${currentDate
    //             .getDate()
    //             .toString()
    //             .padStart(2, '0')}_${currentDate
    //                 .getHours()
    //                 .toString()
    //                 .padStart(2, '0')}_${currentDate
    //                     .getMinutes()
    //                     .toString()
    //                     .padStart(2, '0')}_${currentDate
    //                         .getSeconds()
    //                         .toString()
    //                         .padStart(2, '0')}`;
    //     const fileExtension = selectedFile.name.split('.').pop();
    //     const fileName = `[${formattedDate}]${fileExtension}`;
    //     setSyllabus_Path(fileName);
    // };



    // const handleFileChange = (event) => {
    //     const fs = require('fs');
    //     const path = require('path')

    //     const selectedFile = event.target.files[0];
    //     const currentDate = new Date().toISOString().replace(/[-T:\.Z]/g, "_");
    //     const fileType = path.extname(selectedFile.name);
    //     const newFileName = `${currentDate}${fileType}`;
    //     const newFilePath = `../../../../components/File/Syllabus/${newFileName}`;

    //     fs.mkdirSync('../../../../components/File/Syllabus', { recursive: true });
    //     fs.writeFileSync(newFilePath, selectedFile.data);

    //     setSyllabus_Path(`D:\\ReactJS\\NurseWeb2.0\\src\\components\\File\\Syllabus\\${newFileName}`);

    //     // const apiPath = `D:\\ReactJS\\NurseWeb2.0\\src\\components\\File\\Syllabus\\${newFileName}`;
    //     // return apiPath;

    // }

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     const fileType = file.type.split('/')[1];
    //     const date = new Date();
    //     const dateString = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
    //     const newName = `${dateString}_${fileType}`;
    //     const syllabusFolder = 'Syllabus';
    //     const uploadFolder = event.target.value.split('\\').pop().split('/').pop();

    //     // แก้ไขชื่อไฟล์เดิมเพื่อเปลี่ยนเป็นชื่อใหม่
    //     file.name = newName;
    //     // setSyllabus_Path(newName);

    //     // ย้ายไฟล์ไปยัง folder Syllabus
    //     const syllabusPath = `${syllabusFolder}/${newName}`;
    //     const uploadPath = `${uploadFolder}/${newName}`;
    //     const fileReader = new FileReader();
    //     fileReader.readAsArrayBuffer(file);
    //     fileReader.onloadend = function () {
    //         const arrayBuffer = fileReader.result;
    //         const blob = new Blob([arrayBuffer], { type: fileType });
    //         const formData = new FormData();
    //         formData.append('file', blob, newName);
    //         // ส่งไฟล์ไปยัง backend หรือ API สำหรับบันทึกไฟล์ลง server
    //         // และเรียกฟังก์ชั่นสำหรับสร้างไฟล์ใน folder Syllabus
    //         // uploadFile(formData, syllabusPath);
    //         // และเรียกฟังก์ชั่นสำหรับลบไฟล์ใน folder uploads
    //         // deleteFile(uploadPath);
    //     }
    // }

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('file', file);

        axios.post(process.env.REACT_APP_API_URL + "/upload/syllabus", data)
            .then((response) => {
                // console.log("Success");
                response.data.filename = file.name;
                setSyllabus_Path(response.data.path);
                Swal.fire({
                    icon: "success",
                    title: "Submit file success!",
                    showConfirmButton: false,
                    timer: 1000,
                })
            })
            .catch((error) => {
                // console.error("Error", error);
                Swal.fire({
                    icon: "error",
                    title: "โปรดตรวจสอบนามสกุลไฟล์",
                    showConfirmButton: false,
                    timer: 2000,
                })
            });
    };

    // console.log(syllabus_Path)


    const handleSyllabusDateChange = (date) => {
        setsyllabusDate(date);
        if (startUse && moment(date).isAfter(startUse)) {
            setstartUse(date);
        }
    };

    const handleStartUseChange = (date) => {
        if (moment(date).isBefore(syllabusDate)) {
            setstartUse(syllabusDate);
        } else {
            setstartUse(date);
        }
        if (endUse && moment(date).isAfter(endUse)) {
            setendUse(date);
        }
    };

    const handleEndUseChange = (date) => {
        if (moment(date).isBefore(startUse)) {
            setendUse(startUse);
        } else {
            setendUse(date);
        }
    };


    // console.log(syllabus_Path)


    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className=' text-black min-h-screen'>
                    <h1 className=' text-center text-4xl'>เพิ่มหลักสูตร</h1>
                    <div className='container mx-auto'>
                        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                            <div ><p>ชื่อไทย</p>
                                <div className="mb-5 flex justify-center ">
                                    <textarea
                                        onChange={(event) => {
                                            setsyllabusName(event.target.value)
                                        }}
                                        type="text"
                                        name="syllabusName"
                                        placeholder="ชื่อหลักสูตร"
                                        className="  w-full rounded-md border border-while bg-white border-black py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ปีที่สร้าง</p>
                                <div className="mb-5 flex justify-center ">
                                    <DatePicker
                                        selected={syllabusDate}
                                        onChange={handleSyllabusDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="dd/MM/yyyy"
                                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ระยะเวลาเริ่มหลักสูตร</p>
                                <div className="mb-5 flex justify-center ">
                                    <DatePicker
                                        selected={startUse}
                                        onChange={handleStartUseChange}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="dd/MM/yyyy"
                                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        minDate={syllabusDate}
                                        required
                                    />
                                </div>
                            </div>
                            <div ><p>ระยะเวลาสิ้นสุดหลักสูตร</p>
                                <div className="mb-5 flex justify-center ">
                                    <DatePicker
                                        selected={endUse}
                                        onChange={handleEndUseChange}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="dd/MM/yyyy"
                                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        minDate={startUse}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div ><p>รายละเอียด</p>
                            <div className="mb-5 flex justify-center ">
                                <textarea
                                    onChange={(event) => {
                                        setdetail(event.target.value)
                                    }}
                                    type="text"
                                    name="detail"
                                    placeholder="รายละเอียด"
                                    className="w-full rounded-md border border-while  bg-white border-black py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>
                        <div ><label htmlFor="file-input">เพิ่มไฟล์หลักสูตร</label>
                        <p className=' text-red-500'>***ใส่ไฟล์ที่มีนามสกุล .pdf, .xlsx, .docx และ .doc เท่านั้น***</p>
                            <div className="mb-5 flex justify-center ">
                                <input
                                    onChange={handleFileChange}
                                    type="file"
                                    id="file-input"
                                    name="detail"
                                    placeholder="รายละเอียด"
                                    className="w-full rounded-md border border-while  bg-white border-black py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                    required
                                />
                            </div>
                            <div className=' grid place-items-center'>
                                <button onClick={onSubmit} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                        <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Submit File</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-3 grid grid-cols-2 '>
                        <div className=' ml-3'>
                            <button onClick={backToAdminSyllabus} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>

                        </div>
                        <div className=' absolute right-0 mr-3'>
                            <button onClick={addSyllabus} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
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

export default AddSyllabus