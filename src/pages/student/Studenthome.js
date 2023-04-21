import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import LoadingPage from '../LoadingPage';

function Studenthome() {
    const getToken = () => {
        // NOTE: sessionStorage store session in ONLY tabs in chrome
        // can replace sessionStorage -> localStorage to save to local
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const [token, setToken] = useState(getToken());

    const [data, setData] = useState([]);
    const [studentlist, setStudentList] = useState([]);

    const { userID } = useParams();

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const fetchData = () => {


        axios.post(process.env.REACT_APP_API_URL + "/student/detail", { userID: token.userID })
            .then(res => {
                // console.log(res.data);

                if (res.data.error === true) {
                    // console.log(res.data)
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setData(res.data.data);
                setTimeout(() => {
                    setCompleted(true);
                }, 1000);

            }).catch(error => {
                // console.log(error.res);
            });
    }


    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [])



    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div>
                    <div className=" text-black min-h-screen space-y-5 mb-10">
                        <div className=" font-bold text-4xl m-10 grid grid-cols-1 place-items-center">ข้อมูลนิสิต</div>
                        <div>
                            <div className=' text-3xl text-center mb-5'>นิสิต : {data.nameTH}</div>
                            <div className=" grid grid-cols-1 place-items-center">
                                <div className=" block bg-gray-200 w-2/3 p-auto rounded-2xl">
                                    <div className=" flex justify-around">
                                        <div className=" ml-7">
                                            {
                                                data.nameTH ?
                                                    <>
                                                        <div className=" m-3">ชื่อสกุล : {data.nameTH}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.studentID ?
                                                    <>
                                                        <div className=" m-3">รหัสประจำตัว : {data.studentID}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.gender ?
                                                    <>
                                                        <div className=" m-3">เพศ : {data.gender}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.nationality ?
                                                    <>
                                                        <div className=" m-3">สัญชาติ : {data.nationality}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.phone ?
                                                    <>
                                                        <div className=" m-3">มือถือ : {data.phone}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.email ?
                                                    <>
                                                        <div className=" m-3">Email : {data.email}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.houseadd_houseNo ?
                                                    <>
                                                        <div className=" m-3">บ้านเลขที่ : {data.houseadd_houseNo}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.houseadd_road ?
                                                    <>
                                                        <div className=" m-3">ถนน : {data.houseadd_road}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.houseadd_subDistrict ?
                                                    <>
                                                        <div className=" m-3">ตำบล : {data.houseadd_subDistrict}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.houseadd_province ?
                                                    <>
                                                        <div className=" m-3">จังหวัด : {data.houseadd_province}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.presentAddress ?
                                                    <>
                                                        <div className=" m-3">จังหวัด : {data.presentAddress}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }




                                        </div>
                                        <div className=" mr-7">
                                            {
                                                data.nameENG ?
                                                    <>
                                                        <div className=" m-3">ชื่ออังกฤษ : {data.nameENG}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.IDnumber ?
                                                    <>
                                                        <div className=" m-3">เลขประจำตัวประชาชน : {data.IDnumber}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.ethnicity ?
                                                    <>
                                                        <div className=" m-3">เชื้อชาติ : {data.ethnicity}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.religion ?
                                                    <>
                                                        <div className=" m-3">ศาสนา : {data.religion}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.IDline ?
                                                    <>
                                                        <div className=" m-3">IDline : {data.IDline}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }

                                            {
                                                data.Birthday ?
                                                    <>
                                                        <div className=" m-3">วันเกิด : {format(new Date(data.Birthday), 'yyyy-MM-dd')}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }

                                            {
                                                data.houseadd_village ?
                                                    <>
                                                        <div className=" m-3">หมู่บ้าน : {data.houseadd_village}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.houseadd_alley ?
                                                    <>
                                                        <div className=" m-3">ซอย : {data.houseadd_alley}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.houseadd_district ?
                                                    <>
                                                        <div className=" m-3">อำเภอ : {data.houseadd_district}</div>
                                                    </> :
                                                    <>
                                                    </>
                                            }
                                            {
                                                data.houseadd_postalCode ?
                                                    <>
                                                        <div className=" m-3">รหัสไปรษณีย์ : {data.houseadd_postalCode}</div>
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
            )}

        </>
    )
}

export default Studenthome