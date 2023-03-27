import axios from 'axios';
// import StudentPopup from '../../../components/Button/StudentPopup'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';



function SyllabusDetail() {
  const [data, setData] = useState([]);
  const [syllabus, setsyllabus] = useState([]);
  const { syllabusID } = useParams();

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
  const deleteSyllabus = (syllabusID) => {
    axios.delete(process.env.REACT_APP_API_URL + "/course/syllabus", { data: { syllabusID: syllabusID } })
      .then((response) => {
        setsyllabus(
          syllabus.filter((_) => {
            return _.syllabusID !== syllabusID;
          })
        )
        window.location.href = "/admin/home";

        Toast.fire({
          icon: 'success',
          title: 'Delete data success'
        })


      }).catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
  }
  const fetchData = () => {


    axios.get(process.env.REACT_APP_API_URL + "/course/syllabus", { params: { syllabusID: syllabusID } })
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
 
console.log(data)

  return (

    <div className='bg-white min-h-screen' >
      <h1 className=' mt-3 ml-3 text-left text-4xl'>ข้อมูลหลักสูตร</h1>
      <div className='flex flex-row-reverse '>
        <div className=' mr-3'>
          {/* <Deletebutton></Deletebutton> */}
        </div>

      </div>
      <div className=' ml-3'>
        {/* {
          data.syllabusName ?
            <>
              <div className=" m-3">ชื่อหลักสูตร : {data.syllabusName}</div></> :
            <></>
        } */}
        <div className=" m-3">ชื่อหลักสูตร : {data.syllabusName}</div>
        {
          data.syllabusDate ?
            <>
              <div className=" m-3">ปีที่สร้าง : {data.syllabusDate}</div></> :
            <></>
        }
        {
          data.lastEdit ?
            <>
              <div className=" m-3">แก้ไขครั้งล่าสุด : {data.lastEdit}</div></> :
            <></>
        }
        {
          data.startUse ?
            <>
              <div className=" m-3">ปีที่เริ่มใช้ : {data.startUse}</div></> :
            <></>
        }
        {
          data.endUse ?
            <>
              <div className=" m-3">ปีที่สิ้นสุด : {data.endUse}</div></> :
            <></>
        }
        {
          data.detail ?
            <>
              <div className=" m-3">รายละเอียด : {data.detail}</div></> :
            <></>
        }
      </div>
      <p className='mt-3 ml-3 text-left text-2xl'>รายวิชา</p>



    </div>

  )
}

export default SyllabusDetail