import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import LoadingPage from '../LoadingPage';
import axios from 'axios';
import format from 'date-fns/format';

function SubjectManagement() {
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

    const [classList, setClassList] = useState([]);
    const [dateYear, setDateyear] = useState("");
    const [courseList, setCourseList] = useState([]);
    const [courseName, setCourseName] = useState("");

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [])

    const fetchData = () => {
        axios.get(process.env.REACT_APP_API_URL + "/class/list")
            .then(res => {
                console.log(res.data)

                if (res.data.error === true) {
                    console.log(res.data);
                    console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setClassList(res.data.data);
                setLoading(true);

                setTimeout(() => {
                    setCompleted(true);
                }, 1000);
            })
            .catch(error => {
                console.log(error.res)
            });
    };

    const onchangeDateYear = () => {
        axios.get(process.env.REACT_APP_API_URL + "/class/taugh" , {params:{userID:token.userID, dateYear:dateYear}})
        .then( res => {
            console.log(res.data);

            if (res.data.error === true){
                console.log(res.data);
                console.log("ERROR FOUND WHEN GET DATA FROM API");
                return;
            }
            setCourseList(res.data.data);
        })
        .catch( error => {
            console.log(error.res);
        })
    }
    // const onchangeDateYear = () => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/class/taugh`, { params: { userID: token.userID, dateYear: dateYear } })
    //         .then(res => {
    //             console.log(res.data);

    //             if (res.data.error === true) {
    //                 console.log(res.data);
    //                 console.log("ERROR FOUND WHEN GET DATA FROM API");
    //                 return;
    //             }
    //             setCourseList(res.data.data);

    //         })
    //         .catch(error => {
    //             console.log(error.response);
    //         })
    // };


    console.log(dateYear)
    console.log(token.userID)

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <>
                    <div className=" text-black font-bold text-4xl m-10 grid grid-cols-1 place-items-center">จัดการรายวิชา</div>
                    <div className=' mb-5 flex justify-center'>
                        <select
                            className=' border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                            type='text'
                            name='dateYear'
                            placeholder='ปีการศึกษา'
                            onChange={(event) => {
                                const filterClass = classList.filter(item => {
                                    return event.target.value == item.classID
                                })
                                setDateyear((format(new Date(filterClass[0].dateYear), 'yyyy')))
                                onchangeDateYear(dateYear)
                            }}
                        >
                            <option value={""}>---ระบุปีการศึกษา---</option>
                            {
                                classList.map((_, index) => (<option key={index} value={_.classID}>{format(new Date(_.dateYear), "yyyy")}</option>))
                            }
                        </select>
                    </div>
                    <div className=' mb-5 flex justify-center'>
                        <select
                            className=' border-black w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                            type='text'
                            name='courseName'
                            placeholder='รายวิชา'
                            onChange={(event) => {
                                const filterCourse = courseList.filter(item => {
                                    return event.target.value == item.courseID
                                })
                                setCourseName(filterCourse[0].courseNameTH)

                            }}
                        >
                            <option value={""}>---ระบุรายวิชา---</option>
                            {
                                courseList.map((_, index) => (<option key={index} value={_.courseID}>{_.courseNameTH}</option>))
                            }
                        </select>
                    </div>
                </>
            )}
        </>
    )
}

export default SubjectManagement