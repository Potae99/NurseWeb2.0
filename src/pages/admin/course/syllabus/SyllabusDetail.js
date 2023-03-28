import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function SyllabusDetail() {
  const [data, setData] = useState([]);
  // const [course, setcourse] = useState([]);ตารางวิชา
  const { syllabusID } = useParams();

  const fetchData = () => {


    axios.get(process.env.REACT_APP_API_URL + "/course/syllabus", { params: { syllabusID: syllabusID } })
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API");
          return;
        }
        setData(res.data.data.results);
        // setcourse(res.data.data.course); ตารางวิชา


      }).catch(error => {
        console.log(error.res);
      });
  }
  useEffect(() => {
    fetchData();
  }, [])

  console.log(syllabusID)


  return (

    <div className='bg-white min-h-screen' >
      <h1 className=' mt-3 ml-3 text-left text-4xl'>ข้อมูลหลักสูตร:{syllabusID}</h1>
      <div className='flex flex-row-reverse '>
        <div className=' mr-3'>
          {/* <Deletebutton></Deletebutton> */}
        </div>

      </div>
      <div className=' ml-3'>
        {
          data.syllabusDate ?
            <>
              <div className=" m-3">ชื่อหลักสูตร : {data.syllabusName}</div></> :
            <></>
        }

        {/* <div className=" m-3">ชื่อหลักสูตร : {data.syllabusName}</div> */}
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
      <p className='mt-3 ml-3 text-left text-2xl'>รายวิชาในหลักสูตร</p>



    </div>

  )
}

export default SyllabusDetail