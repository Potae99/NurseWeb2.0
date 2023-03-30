import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function Teacherhome() {

    const getToken = () => {
        // NOTE: sessionStorage store session in ONLY tabs in chrome
        // can replace sessionStorage -> localStorage to save to local
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const [token, setToken] = useState(getToken());

    const [data, setData] = useState([]);

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
    const { userID } = useParams();

    const fetchData = () => {

        axios.get(process.env.REACT_APP_API_URL + "/teacher", { params: { userID: token.userID } })
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
        <div className=''>
            <div className=" min-h-screen  space-y-5">
                <div className=" text-black font-bold text-4xl m-10 grid grid-cols-1 place-items-center">ข้อมูลอาจารย์</div>
             

                <div>
                    <div className=' text-black text-3xl text-center mb-5'>อาจารย์ : {data.nameTH}</div>
                    <div className=" grid grid-cols-1 place-items-center">
                        <div className=" text-black block bg-gray-200 w-2/3 p-auto rounded-2xl">
                            <div className=" flex justify-around">
                                <div className=" ml-7">
                                    {
                                        data.nameTH ?
                                            <>
                                                <div className=" text-black m-3">ชื่อสกุล : {data.nameTH}</div></> :
                                            <></>
                                    }
                                    {
                                        data.teacherID ?
                                            <>
                                                <div className=" text-black m-3">รหัสประจำตัว : {data.teacherID}</div></> :
                                            <></>
                                    }
                                </div>
                                <div className=" mr-7">
                                    {
                                        data.nameENG ?
                                            <>
                                                <div className=" m-3">ชื่ออังกฤษ : {data.nameENG}</div></> :
                                            <></>
                                    }
                                    {
                                        data.IDnumber ?
                                            <>
                                                <div className=" m-3">เลขบัตรประจำตัวประชาชน : {data.IDnumber}</div></> :
                                            <></>
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

export default Teacherhome