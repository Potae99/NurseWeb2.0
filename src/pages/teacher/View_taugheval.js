import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import LoadingPage from '../LoadingPage';
import axios from 'axios';


function View_taugheval() {
    const getToken = () => {
        // NOTE: sessionStorage store session in ONLY tabs in chrome
        // can replace sessionStorage -> localStorage to save to local
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    };
    const [token, setToken] = useState(getToken());
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);
    const [success, setSuccess] = useState(undefined);

    const [classDetail, setClassDetail] = useState([]);
    const [dateYear, setDateyear] = useState("");
    const [classList, setClassList] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState(null);

    const itemsPerPage = 5;
    const totalPages = classDetail ? Math.ceil(classDetail.length / itemsPerPage) : 0;

    const [yearList, setYearList] = useState([]);



    useEffect(() => {

        const fetchData = () => {
            axios.get(process.env.REACT_APP_API_URL + "/class/yearClass")
                .then((res) => {
                    setYearList(res.data.data);
                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }

        fetchData();

    }, [])


    const onchangeDateYear = () => {
        axios.get(process.env.REACT_APP_API_URL + "/class/taugh", { params: { userID: token.userID, dateYear: dateYear } })
            .then(res => {
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data);
                    console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setClassList(res.data.data);


            })
            .catch(error => {
                console.log(error.res);
            })
    }


    // const onchangeCourse = (classID) => {
    //     window.location.href = "/teacher/sum/" + classID;
    // };

    function onchangeCourse(taughtType, classID) {
        if (taughtType === "Theory") {
            window.location.href = "/NA/teacher/sum/theory/" + classID; // redirect to /teacher/sum/{classID}
        } else if (taughtType === "Practice") {
            window.location.href = "/NA/teacher/sum/practice/" + classID; // redirect to /teacher/sum/{classID}
        }

    }



    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <>
                    <div className=" text-black font-bold text-4xl m-10 grid grid-cols-1 place-items-center">ผลการประเมิน</div>
                    <div className=' mb-5 flex justify-center'>

                        <select
                            className=' border-black w-1/3 rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                            type='text'
                            name='dateYear'
                            placeholder='ปีการศึกษา'
                            onChange={(event) => {
                                setDateyear(event.target.value)
                            }}
                        >
                            <option value={""}>---ระบุปีการศึกษา---</option>
                            {
                                yearList.map((_, index) => (<option key={index} value={_.dateYear}>{_.dateYear}</option>))
                            }
                        </select>
                        <div className=' ml-3'>
                            <button onClick={() => onchangeDateYear(dateYear)} type="submit" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                    <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ค้นหา</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                    <div className=' mb-5 flex justify-center'>
                        <select
                            className='border-black w-2/3 rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                            name='courseName'
                            placeholder='รายวิชา'
                            onChange={(event) => {
                                const selectedClassID = event.target.value;
                                onchangeCourse(selectedClassID.split('-')[1], selectedClassID.split('-')[0]);
                            }}
                        >
                            <option value=''>---ระบุรายวิชา---</option>
                            {classList.map((item, index) => (
                                <option key={index} value={`${item.classID}-${item.taughtType}`}>
                                    {item.courseNameTH} ({item.taughtType})
                                </option>
                            ))}
                        </select>

                    </div>
                    <>
                        {!success ? (<></>) :
                            <div className=' text-black'>
                                {selectedCourse && (
                                    <div className=' grid grid-cols-2 place-items-center'>
                                        <div className=' grid'>
                                            {
                                                selectedCourse.courseNameTH ?
                                                    <>
                                                        <div className=" m-3">ชื่อวิชา(ไทย) : {selectedCourse.courseNameTH}</div></> :
                                                    <></>
                                            }

                                            {
                                                selectedCourse.courseID_number ?
                                                    <>
                                                        <div className=" m-3">รหัสวิชา : {selectedCourse.courseID_number}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.detail ?
                                                    <>
                                                        <div className=" m-3">รายละเอียด : {selectedCourse.detail}</div></> :
                                                    <></>
                                            }
                                        </div>
                                        <div className=' grid'>
                                            {
                                                selectedCourse.courseNameENG ?
                                                    <>
                                                        <div className=" m-3">ชื่อวิชา(อังกฤษ) : {selectedCourse.courseNameENG}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.creditStudy ?
                                                    <>
                                                        <div className=" m-3">หน่วยกิต : {selectedCourse.creditStudy}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.taughtType ?
                                                    <>
                                                        <div className=" m-3">รูปแบบการสอน : {selectedCourse.taughtType}</div></> :
                                                    <></>
                                            }
                                        </div>

                                    </div>
                                )}

                            </div>
                        }
                    </>
                </>
            )}
        </>
    )
}
export default View_taugheval