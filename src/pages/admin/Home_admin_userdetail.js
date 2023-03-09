import React, { useEffect, useState } from 'react'
import Editbutton from '../../components/Button/Editbutton'
import Deletebutton from '../../components/Button/Deletebutton'
import axios from 'axios';

function Home_admin_userdetail() {

    const [data, setData] = useState([]);

    console.log(process.env.REACT_APP_API_URL + "/student/list");

    const fetchData = () => {
        console.log("WTF");


        axios.get(process.env.REACT_APP_API_URL + "/student/list")
        .then(res => {
            console.log(res.data);

            if (res.data.error === true) {
                console.log(res.data)
                console.log("ERROR FOUND WHEN GER DATA FROM API");
                return;
            }
            setData(res.data.data);
        });
}

useEffect(() => {
    fetchData();
}, [])

// const detail = [
//     {
//         Namehead: 'ชื่อสกุล',
//         Name: 'ปูนพร้อมก่อ สุดหล่อพร้อมยัง',
//         rolehead: 'บทบาท',
//         role: 'นิสิต',
//         personal_id_head: 'เลขประจำตัวประชาชน',
//         personal_id: '111',
//         phone_head: 'เบอร์โทร',
//         phone: '0514514789',
//         student_id_head: 'รหัสนิสิต',
//         student_id: '64366666'
//     },

// ]
return (
    <div className=" bg-rose-200 min-h-screen border">
        <div className=" font-bold text-4xl m-10 grid grid-cols-1">ข้อมูลนิสิต</div>
        <div className=' flex flex-row-reverse  '>
            <div className='   mr-3'>
                <Editbutton></Editbutton>
            </div>
            <div className='  mr-3'>
                <Deletebutton></Deletebutton>
            </div>
        </div>
        {data.map((_, i) => (
            <div>
                <p className=" m-10">ชื่อสกุล : {_.nameTH}</p>
                <div className=" m-10">บทบาท : {}</div>
                <div className=" m-10">รหัสประจำตัว : {}</div>
                <div className=" grid grid-cols-1 place-items-center">
                    <div className=" block bg-gray-200 w-2/3 p-auto rounded-2xl">
                        <div className=" flex justify-around">
                            <div className=" ml-7">
                                <div className=" m-3">เลขบัตรประจำตัวประชาชน</div>
                                <div className=" m-3">{_.IDnumber}</div>
                                <div className=" m-3">มือถือ</div>
                                <div className=" m-3">{_.phone}</div>
                                <div className=" m-3">เพศ</div>
                                <div className=" m-3">{_.gender}</div>
                            </div>
                            <div className=" mr-7">
                                <div className=" m-3">Email</div>
                                <div className=" m-3">{_.email}</div>
                                <div className=" m-3">ชื่ออังกฤษ</div>
                                <div className=" m-3">{_.nameENG}</div>
                                <div className=" m-3">เพศ</div>
                                <div className=" m-3">{_.gender}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)
}

export default Home_admin_userdetail