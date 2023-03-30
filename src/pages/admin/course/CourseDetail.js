import axios from 'axios';
import StudentPopup from '../../../components/Button/StudentPopup'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CourseDetail() {
    const [data, setData] = useState([]);
    const { courseID } = useParams();
    

    const fetchData = () => {


        axios.get(process.env.REACT_APP_API_URL + "/course/detail", { params: { courseID: courseID } })
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

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className=' bg-white min-h-screen'>
                <h1 className=' mt-3 ml-3 text-4xl'>ข้อมูลรายวิชา</h1>
                <div className=' flex flex-row-reverse'>
                    <div className='mr-3'>
                    </div>
                </div>
                <div>
                    <div className=' text-3xl text-center mb-5'>หมวดหมู่วิชา : {data.courseID}</div>
                    <div className=" grid grid-cols-1 place-items-center">
                        <div className=" block bg-gray-200 w-2/3 p-auto rounded-2xl">
                            <div className=" flex justify-around">
                                <div className=" ml-7">
                                    {
                                        data.courseNameTH ?
                                            <>
                                                <div className=" m-3">ชื่อไทย : {data.courseNameTH}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.courseNameENG ?
                                            <>
                                                <div className=" m-3">ชื่ออังกฤษ : {data.courseNameENG}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.detail ?
                                            <>
                                                <div className=" m-3">รายละเอียด : {data.detail}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.creditStudy ?
                                            <>
                                                <div className=" m-3">หน่วยกิต : {data.creditStudy}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.studyTimeTheory ?
                                            <>
                                                <div className=" m-3">ชั่วโมงทฤษฎี : {data.studyTimeTheory}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.studyTimePractice ?
                                            <>
                                                <div className=" m-3">ชั่วโมงปฏิบัติ : {data.studyTimePractice}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.studyTimeSelf ?
                                            <>
                                                <div className=" m-3">ชั่วโมงศึกษาด้วยตนเอง : {data.studyTimeSelf}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.studyTime_SUM ?
                                            <>
                                                <div className=" m-3">ชั่วโมงรวม : {data.studyTime_SUM}</div>
                                            </> :
                                            <>
                                            </>
                                    }
                                    {
                                        data.categoryName ?
                                            <>
                                                <div className=" m-3">ชื่อหมวดหมู่ : {data.categoryName}</div>
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

export default CourseDetail