import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import format from 'date-fns/format';

function Classdetail() {

  const [data, setData] = useState([]);
  const [courseDetail, setcourseDetail] = useState([]);

  //teacherlist
  const [teachers, setteachers] = useState([]);

  //studentlist
  const [students, setstudents] = useState([]);


  // const [courseDetail, setcourse] = useState([]);ตารางวิชา
  const { classID } = useParams();

  ///alert
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



  ///student post
  const [showModal1, setShowModal1] = useState(false);
  const [studentlist, setstudentlist] = useState([]);
  const [userID, setuserID] = useState("");
  const AddStudent = () => {

    axios.post(process.env.REACT_APP_API_URL + "/class/study", {
      userID: userID,
      classID: classID

    }).then(() => {
      setstudentlist([
        ...studentlist,
        {
          userID: userID,
          classID: classID
        }
      ])
      window.location.href = "/admin/class/detail/" + classID;
    })
  }
  ///Teacher post
  const [showModal2, setShowModal2] = useState(false);
  const [Teacherlist, setTeacherlist] = useState([]);
  const [taughtType, settaughtType] = useState("");
  const addTeacher = () => {

    axios.post(process.env.REACT_APP_API_URL + "/class/taugh", {
      userID: userID,
      classID: classID,
      taughtType: taughtType

    }).then(() => {
      setTeacherlist([
        ...Teacherlist,
        {
          userID: userID,
          classID: classID,
          taughtType: taughtType
        }
      ])
      window.location.href = "/admin/class/detail/" + classID;
    })
  }

  ///delete teacher
  const deleteTeacher = (userID) => {
    axios.delete(process.env.REACT_APP_API_URL + "/class/taugh", { data: { userID, classID } })
      .then((response) => {
        setteachers(
          teachers.filter((_) => {
            return _.userID !== userID;

          })
        )


        Toast.fire({
          icon: 'success',
          title: 'Delete teacher success'
        })


      }).catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
  }
  ////delete Student
  const deleteStudent = (userID) => {
    axios.delete(process.env.REACT_APP_API_URL + "/class/study", { data: { userID, classID } })
      .then((response) => {
        setstudents(
          students.filter((_) => {
            return _.userID !== userID;

          })
        )


        Toast.fire({
          icon: 'success',
          title: 'Delete student success'
        })


      }).catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
  }




  const fetchData = () => {

    axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: classID } })
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API");
          return;
        }
        setData(res.data.data.class);
        setcourseDetail(res.data.data.courseDetail);
        setteachers(res.data.data.teachers);
        setstudents(res.data.data.students);


      }).catch(error => {
        console.log(error.res);
      });
  }
  useEffect(() => {
    fetchData();
  }, [])

  console.log()

  return (
    <div className=' text-black bg-white min-h-screen' >
      <h1 className=' mt-3 ml-3 text-left text-4xl'>ข้อมูลคาบเรียน : {classID}</h1>
      <div className='flex flex-row-reverse '>
        <div className=' mr-3'>
          {/* <Deletebutton></Deletebutton> */}
        </div>

      </div>
      <div className=' ml-3'>
        {
          data.courseID ?
            <>
              <div className=" m-3">รหัสวิชา : {data.courseID}</div></> :
            <></>
        }

        {data.studyRoom ?
          <>
            <div className=" m-3">ห้องเรียน : {data.studyRoom}</div></> :
          <></>
        }
        {
          data.dateYear ?
            <>
              <div className=" m-3">ปีที่สร้าง : {format(new Date(data.dateYear), 'yyyy')}</div></> :
            <></>
        }
      </div>
      <div className=' flex flex-row-reverse'>
        <div>
          <div className="flex  items-center justify-center">
            <a type="button" onClick={() => setShowModal1(true)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มนิสิต</span>
            </a>
          </div>
          {showModal1 ? (
            <>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() => setShowModal1(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 sm:flex">
                      <div className=" text-center sm:ml-4   sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800">
                          นิสิต
                        </h4>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="รหัสนิสิต"
                          onChange={(event) => {
                            setuserID(event.target.value)
                          }}
                        >
                        </input>

                        <div className="items-center gap-2 mt-3 sm:flex">
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-white  bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            onClick={() => {
                              AddStudent();
                              setShowModal1(false);
                            }}
                          >
                            บันทึก
                          </button>
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                            onClick={() =>
                              setShowModal1(false)
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
        </div>
        <div>
          <div className="flex  items-center justify-center">
            <a type="button" onClick={() => setShowModal2(true)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มอาจาร์ย</span>
            </a>
          </div>
          {showModal2 ? (
            <>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() => setShowModal2(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 sm:flex">
                      <div className=" text-center sm:ml-4   sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800">
                          อาจาร์ย
                        </h4>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="รหัสประจำตัวอาจาร์ย"
                          onChange={(event) => {
                            setuserID(event.target.value)
                          }}
                        ></input>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="ประเภทการสอน"
                          onChange={(event) => {
                            settaughtType(event.target.value)
                          }}
                        ></input>
                        <div className="items-center gap-2 mt-3 sm:flex">
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-white  bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            onClick={() => {
                              addTeacher();
                              setShowModal2(false);
                            }}
                          >
                            บันทึก
                          </button>
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                            onClick={() =>
                              setShowModal2(false)
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

        </div>
      </div>
      <div className=' space-y-3'>
        <p>รายชื่ออาจาร์ยผู้สอน</p>
        <div className='relative overflow-x-auto shadow-md  sm:rounded-lg'>
          <table className=" w-full text-sm text-left text-black">
            <thead className="text-sm text-black uppercase bg-orange-300">
              <tr  >

                <th scope="col" className="py-3 px-6" >รหัสอาจารย์</th>
                <th scope="col" className="py-3 px-6">ชื่อไทย</th>
                <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
                <th scope="col" className="py-3 px-6">รูปแบบการสอน</th>
                <th scope="col" className="py-3 px-6">การกระทำ</th>
              </tr>
            </thead>
            {teachers.map((_, index) => (
              <tbody key={index}>
                <tr className="  hover:bg-gray-200 bg-white "
                >
                  <td className="py-4 px-6" >{_.userID}</td>
                  <td className="py-4 px-6">{_.nameTH}</td>
                  <td className="py-4 px-6">{_.nameENG}</td>
                  <td className="py-4 px-6">{_.taughtType}</td>
                  <td className="py-4 px-6 flex flex-row">
                    <div className=' ml-3'
                      content="View Admin"
                      color="error"
                      onClick={() => { deleteTeacher(_.userID) }}
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
        </div>
        <p>รายชื่อนิสิต</p>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className=" w-full text-sm text-left text-black">
            <thead className="text-sm text-black uppercase bg-orange-300">
              <tr  >

                <th scope="col" className="py-3 px-6" >รหัสนิสิต</th>
                <th scope="col" className="py-3 px-6">ชื่อไทย</th>
                <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
                <th scope="col" className="py-3 px-6">เพศ</th>
                <th scope="col" className="py-3 px-6">การกระทำ</th>
              </tr>
            </thead>
            {students.map((_, index) => (
              <tbody key={index}>
                <tr className="  hover:bg-gray-200 bg-white "
                >
                  <td className="py-4 px-6" >{_.userID}</td>
                  <td className="py-4 px-6">{_.nameTH}</td>
                  <td className="py-4 px-6">{_.nameENG}</td>
                  <td className="py-4 px-6">{_.gender}</td>
                  <td className="py-4 px-6 flex flex-row">
                    <div className=' ml-3'
                      content="View Admin"
                      color="error"
                      onClick={() => { deleteStudent(_.userID) }}
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
        </div>
      </div>
    </div>




  )
}

export default Classdetail