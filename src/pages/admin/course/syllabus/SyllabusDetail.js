import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import format from 'date-fns/format';



function SyllabusDetail() {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  // const [course, setcourse] = useState([]);ตารางวิชา
  const { syllabusID } = useParams();
  const [courseID, setcourseID] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [syllabusList, setSyllabusList] = useState([]);


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const deleteCourse = (courseID, syllabusID) => {
    axios.delete(process.env.REACT_APP_API_URL + "/course/inSyllabus", { course: { courseID: courseID, syllabusID: syllabusID } })
      .then((response) => {
        setCourse(
          course.filter((_) => {
            return _.courseID !== courseID;

          })
        )


        Toast.fire({
          icon: 'success',
          title: 'Delete course success'
        })


      }).catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
  }


  const addCoursein_syllabus = () => {

    axios.post(process.env.REACT_APP_API_URL + "/course/inSyllabus", {
      courseID: courseID,
      syllabusID: syllabusID

    }).then(() => {
      setData([
        ...data,
        {
          courseID: courseID,
          syllabusID: syllabusID

        }
      ])
      window.location.href = "/admin/course/syllabus/" + syllabusID;
    })
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
        setData(res.data.data.results);
        setCourse(res.data.data.courses);


      }).catch(error => {
        console.log(error.res);
      });
  }
  useEffect(() => {
    fetchData();
  }, [])

  const backToAdminSyllabus = () => {
    window.location.href = "/admin/course/syllabus/adminsyllabus"
  }

  const deleteSyllabus = (syllabusID) => {
    Swal.fire({
      title: 'ต้องการลบหลักสูตรหรือไม่?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'ใช่',
      denyButtonText: `ไม่ใช่`,
      cancelButtonText: 'ยกเลิก'
  })
  .then((results) => {
    if (results.isConfirmed){
      axios.delete(process.env.REACT_APP_API_URL + "/course/syllabus", {data: {syllabusID:syllabusID}})
      .then( res => {
          setSyllabusList(
            syllabusList.filter((_) => {
              return _.syllabusID !== syllabusID;
            })
          )
          Swal.fire('Deleted!', '', 'success')
          .then(() => {window.location.href = "/admin/course/syllabus/adminsyllabus"})
      })
    }
    else if (results.isDenied){
      window.location.href = "/admin/course/syllabus/" + syllabusID;
    }
  })
    
  }


  return (

    <div className=' text-black bg-white min-h-screen' >
      <div className=' grid grid-cols-1 place-items-center'>
        <div className=' flex'>
          <h1 className=' mt-3 ml-3 text-center text-4xl mb-5'>ข้อมูลหลักสูตร</h1>
          <button className=' ml-3' onClick={() => deleteSyllabus(syllabusID)}>
            <svg width="20" height="20" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
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
        {
          data.syllabusDate ?
            <>
              <div className=" m-3">ปีที่สร้าง : {format(new Date(data.syllabusDate), 'yyyy')}</div></> :
            <></>
        }
        {
          data.lastEdit ?
            <>
              <div className=" m-3">แก้ไขครั้งล่าสุด : {format(new Date(data.lastEdit), 'dd/MM/yyyy')}</div></> :
            <></>
        }
        {
          data.startUse ?
            <>
              <div className=" m-3">ปีที่เริ่มใช้ : {format(new Date(data.startUse), 'dd/MM/yyyy')}</div></> :
            <></>
        }
        {
          data.endUse ?
            <>
              <div className=" m-3">ปีที่สิ้นสุด : {format(new Date(data.endUse), 'dd/MM/yyyy')}</div></> :
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
      <div className=' flex flex-row-reverse'>
        <>
          <div className="flex  items-center justify-center">
            <button type="button" onClick={() => setShowModal(true)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-300 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มรายวิชา</span>
            </button>
          </div>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() => setShowModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 sm:flex">
                      <div className=" text-center sm:ml-4   sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800">
                          รหัสวิชา
                        </h4>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="รหัสวิชา"
                          onChange={(event) => {
                            setcourseID(event.target.value)
                          }}
                        ></input>
                        <div className="items-center gap-2 mt-3 sm:flex">
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            onClick={addCoursein_syllabus}
                          >
                            บันทึก
                          </button>
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                            onClick={() =>
                              setShowModal(false)
                            }
                          >
                            ยกเลิก
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      </div>
      <div className='relative mt-3 overflow-x-auto shadow-md sm:rounded-lg'>
        <table className=" w-full text-sm text-left text-black ">
          <thead className="text-sm text-black uppercase bg-orange-300">
            <tr  >
              <th scope="col" className="py-3 px-6" >ลำดับ</th>
              <th scope="col" className="py-3 px-6" >รหัสวิชา</th>
              <th scope="col" className="py-3 px-6">ชื่อไทย</th>
              <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
              <th scope="col" className="py-3 px-6">หน่วยกิต</th>
              <th scope="col" className="py-3 px-6">การกระทำ</th>
            </tr>
          </thead>
          {course.map((_, index) => (
            <tbody key={index}>
              <tr className=" hover:bg-gray-200 bg-white border-b"
              >
                <td className="py-4 px-6" >{index + 1}</td>
                <td className="py-4 px-6" >{_.courseID}</td>
                <td className="py-4 px-6">{_.courseNameTH}</td>
                <td className="py-4 px-6">{_.courseNameENG}</td>
                <td className="py-4 px-6">{_.creditStudy}</td>
                <td className="py-4 px-6 flex flex-row">
                  <div className=' ml-3'
                    content="View Admin"
                    color="error"
                    onClick={() => { deleteCourse(_.courseID) }}
                  >
                    <button >
                      <svg width="20" height="20" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className=' mt-5'>
          <div className=''>
            <button onClick={backToAdminSyllabus} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
              <span className="relative invisible">Button Text</span>
            </button>
          </div>
        </div>
      </div>



    </div>

  )
}

export default SyllabusDetail