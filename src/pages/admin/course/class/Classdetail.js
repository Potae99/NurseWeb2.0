import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import format from 'date-fns/format';
import LoadingPage from '../../../LoadingPage';
import TeacherTableForClass from '../../../../components/Table/TeacherTableForClass';
import StudentTableforClass from '../../../../components/Table/StudentTableforClass';

function Classdetail() {

  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

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
  const [classList, setClassList] = useState([]);

  const [teacherList, setTeacherList] = useState([]);
  const [studentList, setStudentList] = useState([]);

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
    Swal.fire({
      title: 'ต้องการลบหลักสูตรหรือไม่?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'ใช่',
      denyButtonText: `ไม่ใช่`,
      cancelButtonText: 'ยกเลิก'
    })
      .then((results) => {
        if (results.isConfirmed) {
          axios.delete(process.env.REACT_APP_API_URL + "/class/taugh", { data: { userID, classID } })
            .then((response) => {
              setteachers(
                teachers.filter((_) => {
                  return _.userID !== userID;

                })
              )
              Swal.fire('Deleted!', '', 'success')

            }).catch(function (error) {
              if (error.response) {
                console.log(error.response);
              }
            });
        }
        else if (results.isDenied) {
          window.location.href = "/admin/class/detail/" + classID;
        }
      })

  }
  ////delete Student
  const deleteStudent = (userID) => {
    Swal.fire({
      title: 'ต้องการลบหลักสูตรหรือไม่?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'ใช่',
      denyButtonText: `ไม่ใช่`,
      cancelButtonText: 'ยกเลิก'
    })
      .then((results) => {
        if (results.isConfirmed) {
          axios.delete(process.env.REACT_APP_API_URL + "/class/study", { data: { userID, classID } })
            .then((response) => {
              setstudents(
                students.filter((_) => {
                  return _.userID !== userID;

                })
              )

              Swal.fire('Deleted!', '', 'success')

            }).catch(function (error) {
              if (error.response) {
                console.log(error.response);
              }
            });
        }
        else if (results.isDenied) {
          window.location.href = "/admin/class/detail/" + classID;
        }
      })

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
        setLoading(true);

        setTimeout(() => {
          setCompleted(true);
        }, 1000);


      }).catch(error => {
        console.log(error.res);
      });

    axios.get(process.env.REACT_APP_API_URL + "/teacher/list")
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data);
          console.log("ERROR FOUND WHEN GET DATA FROM API");
          return;
        }
        setTeacherList(res.data.data);
      })
      .catch(error => {
        console.log(error.res);
      });

    axios.get(process.env.REACT_APP_API_URL + "/student/list", { params: { status: 1 } })
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data);
          console.log("ERROR FOUND WHEN GET DATA FROM API");
          return;
        }
        setStudentList(res.data.data);
      })
      .catch(error => {
        console.log(error.res);
      })
  }
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [])

  const backToClass = () => {
    window.location.href = "/admin/class"
  }

  const deleteClass = (classID) => {
    Swal.fire({
      title: 'ต้องการลบคาบเรียนหรือไม่?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'ใช่',
      denyButtonText: `ไม่ใช่`,
      cancelButtonText: 'ยกเลิก'
    })
      .then((results) => {
        if (results.isConfirmed) {
          axios.delete(process.env.REACT_APP_API_URL + "/class", { data: { classID: classID } })
            .then(res => {
              setClassList(
                classList.filter((_) => {
                  return _.classID !== classID;
                })
              )
              // Swal.fire('Deleted!', '', 'success')
              Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Deleted!",
                showConfirmButton: false,
                timer: 1000,
              })
                .then(() => { window.location.href = "/admin/class" })
            })
        }
        else if (results.isDenied) {
          window.location.href = "/admin/class";
        }
      })
  }

  return (
    <>
      {!completed ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className=' text-black bg-white min-h-screen' >
          <div className=' flex flex-row-reverse'>
            <button className=' ml-3' onClick={() => deleteClass(classID)}>
              <svg width="20" height="20" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className=' grid grid-cols-1 place-items-center'>
            <div className=' flex'>
              <h1 className=' mt-3 ml-3 text-left text-4xl'>ข้อมูลคาบเรียน</h1>
            </div>
          </div>
          <div className='flex flex-row-reverse '>
            <div className=' mr-3'>
              {/* <Deletebutton></Deletebutton> */}
            </div>

          </div>
          <div className=' ml-3 mt-7'>
            {
              data.courseID ?
                <>
                  <div className=" m-3">รหัสวิชา : {courseDetail.courseID_number}</div></> :
                <></>
            }
            {
              data.courseID ?
                <>
                  <div className=" m-3">ชื่อวิชา(ไทย) : {courseDetail.courseNameTH}</div></> :
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
              <div className="flex  items-center justify-center ml-5">
                <button type="button" onClick={() => setShowModal1(true)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-400 group-hover:h-full"></span>
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
                </button>
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
                            {/* <input className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="รหัสนิสิต"
                              onChange={(event) => {
                                setuserID(event.target.value)
                              }}
                            >
                            </input> */}
                            <select
                              className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                              type="text"
                              name='userID'
                              placeholder="รหัสนิสิต"
                              // onChange={(event) => {
                              //   setcourseID(event.target.value)
                              // }}
                              onChange={(event) => {
                                const filterStudent = studentList.filter(item => {
                                  return event.target.value == item.userID
                                })
                                setuserID(event.target.value)
                              }}
                            >
                              <option value={""}>---โปรดระบุ---</option>
                              {
                                studentList.map((_, index) => (<option key={index} value={_.userID}>{_.studentID} {_.nameTH}</option>))
                              }
                            </select>
                            <>
                              <p className=' text-red-500 text-center mt-3'>***เพิ่มอาจารย์ให้ครบทุกคนก่อนแล้วจึงเพิ่มนิสิต***</p>
                            </>
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
            {/* <div>
              <div className="flex  items-center justify-center">
                <button type="button" onClick={() => setShowModal2(true)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-400 group-hover:h-full"></span>
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
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มอาจารย์</span>
                </button>
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
                              อาจารย์
                            </h4>
                            <select
                              className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                              type="text"
                              name='userID'
                              placeholder="รหัสประจำตัวอาจารย์"
                              onChange={(event) => {
                                const filterTeacher = teacherList.filter(item => {
                                  return event.target.value == item.userID
                                })
                                setuserID(event.target.value)
                              }}
                            >
                              <option value={""}>---โปรดระบุ---</option>
                              {
                                teacherList.map((_, index) => (<option key={index} value={_.userID}>{_.nameTH}</option>))
                              }
                            </select>
                            <select
                              className='w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                              value={taughtType}
                              onChange={(event => {
                                settaughtType(event.target.value)
                                console.log(event.target.value)
                              })}
                              name="taughtType"
                            >
                              <option value={""}>---โปรดระบุประเภทการสอน---</option>
                              <option value={"ภาคทฤษฎี"}>ภาคทฤษฎี</option>
                              <option value={"ภาคปฏิบัติ"}>ภาคปฏิบัติ</option>
                            </select>
                            <>
                              <p className=' text-red-500 text-center mt-3'>***เพิ่มอาจารย์ให้ครบทุกคนก่อนแล้วจึงเพิ่มนิสิต***</p>
                            </>
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

            </div> */}
          </div>
          <div className=' space-y-3'>
            <p>รายชื่ออาจารย์ผู้สอน</p>
            {/* <div className='relative overflow-x-auto shadow-md  sm:rounded-lg'>
              <table className=" w-full text-sm text-left text-black">
                <thead className="text-sm text-black uppercase bg-orange-400">
                  <tr  >

                    <th scope="col" className="py-3 px-6" >รหัสอาจารย์</th>
                    <th scope="col" className="py-3 px-6">ชื่อไทย</th>
                    <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
                    <th scope="col" className="py-3 px-6">รูปแบบการสอน</th>
                    <th scope="col" className="py-3 px-6">การกระทำ</th>
                  </tr>
                </thead>
              </table>
            </div> */}
            <TeacherTableForClass></TeacherTableForClass>
            <p>รายชื่อนิสิต</p>
            {/* <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className=" w-full text-sm text-left text-black">
                <thead className="text-sm text-black uppercase bg-orange-400">
                  <tr  >

                    <th scope="col" className="py-3 px-6" >รหัสนิสิต</th>
                    <th scope="col" className="py-3 px-6">ชื่อไทย</th>
                    <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
                    <th scope="col" className="py-3 px-6">เพศ</th>
                    <th scope="col" className="py-3 px-6">การกระทำ</th>
                  </tr>
                </thead>
              </table>
            </div> */}
            <StudentTableforClass></StudentTableforClass>
          </div>
          <div className=' mt-3 grid grid-cols-2 '>
            <div className=' ml-3'>
              <button onClick={backToClass} className=" mt-5 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                <span className="relative invisible">Button Text</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Classdetail