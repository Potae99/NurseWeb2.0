import React, { useState } from 'react'
import Savebutton from '../../components/Button/Savebutton';
import Backbutton
    from '../../components/Button/Backbutton';
import  Axios  from 'axios'; 
//import Swal from 'sweetalert2'
function Home_admin_adduser() {
    
    const Role = [
        {
            role: 'นิสิต',
            value: 'นิสิต'
        },
        {
            role: 'ผู้ดูแลระบบ',
            value: 'ผู้ดูแลระบบ'
        },
        {
            role: 'อาจารย์',
            value: 'อาจารย์'
        }
    ]
    const inputform_data = [
        {
            for: 'nameTH',
            Head: 'ชื่อ-สกุล',
            type: 'nameTH',
            id: 'nameTH',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'nameENG',
            Head: 'ชื่อ-สกุล(ภาษาอังกฤษ)',
            type: 'nameENG',
            id: 'nameENG',
            placeholder: 'ชื่อจริง-นามสกุล(ภาษาอังกฤษ)'
        },
        {
            for: 'IDnumber',
            Head: 'รหัสนิสิต',
            type: 'IDnumber',
            id: 'IDnumber',
            placeholder: 'รหัสนิสิต'
        },
        {
            for: 'gender',
            Head: 'เพศ',
            type: 'gender',
            id: 'gender',
            placeholder: 'เพศ'
        },
        

    ];
    //const url =(process.env.REACT_APP_API_URL + "/student/list")
    const [data,setData] = useState({
        "userID":"",
        "IDnumber":"",
        "nameTH":"",
        "nameENG":"",
        "gender":""

    })
    function handle(e){
        const newdata = {...data}
        newdata[e.taeget.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function submit(e){
        e.preventDefault();
        /*
        Axios.post(url,{
            "userID":data.userID,
            "IDnumber":data.IDnumber,
            "nameTH":data.nameTH,
            "nameENG":data.nameENG,
            "gender":data.gender
        })
        .then(res =>{
            console.log(res.data.data)
        })*/
    }
    return (
        <div className=' bg-gray-200 slate-500 min-h-screen border'>
            <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
            <div onSubmit={(e) =>submit(e)} className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                <div className=' flex flex-row'>
                    <p className=' text-2xl ml-3' >ผู้ใช้งาน</p>
                    <select className='block ml-3  w-1/4 p-2 mb-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' name="course_id" id="course_id">
                        {Role.map((Role, index) => (
                            <option value={Role.value}>{Role.role}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                    {inputform_data.map((inputform_data, index) => (
                        <div >
                            <p>{inputform_data.Head}</p>
                            <div class="mb-5 flex justify-center ">
                                <input
                                    onChange={(e) =>handle(e)}
                                    type={inputform_data.type}
                                    name={inputform_data.name}
                                    id={inputform_data.id}
                                    placeholder={inputform_data.placeholder}
                                    class="w-full rounded-md border border-while (condition) {
                            } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


 
            <div className='  grid grid-cols-2 '>
                <div className=' ml-3'>
                    <Backbutton></Backbutton>
                </div>
                <div className=' absolute right-0 mr-3'>
                    <Savebutton></Savebutton>
                </div>
            </div>
        </div>

    )
}

export default Home_admin_adduser
