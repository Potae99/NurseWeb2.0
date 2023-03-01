import React from 'react'
import Editbutton from '../../components/Button/Editbutton'
import Deletebutton from '../../components/Button/Deletebutton'

function Home_admin_userdetail() {
    const detail = [
        {
            Namehead:'ชื่อสกุล',
            Name: 'ปูนพร้อมก่อ สุดหล่อพร้อมยัง',
            rolehead:'บทบาท',
            role: 'นิสิต',
            personal_id_head:'เลขประจำตัวประชาชน',
            personal_id: '111',
            phone_head:'เบอร์โทร',
            phone: '0514514789',
            student_id_head:'รหัสนิสิต',
            student_id: '64366666'
        },

    ]
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
            {detail.map((detail, index) => (
                <div>
                    <p className=" m-10">{detail.Namehead} {detail.Name}</p>
                    <div className=" m-10">{detail.rolehead} {detail.role}</div>
                    <div className=" m-10">{detail.student_id_head} {detail.student_id}</div>
                    <div className=" grid grid-cols-1 place-items-center">
                        <div className=" block bg-gray-200 w-2/3 p-auto rounded-2xl">
                            <div className=" flex justify-around">
                                <div className="">
                                    <div className=" m-3">{detail.personal_id_head}</div>
                                    <div className=" m-3">{detail.personal_id}</div>
                                    <div className=" m-3">{detail.phone_head}</div>
                                    <div className=" m-3">{detail.phone}</div>
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