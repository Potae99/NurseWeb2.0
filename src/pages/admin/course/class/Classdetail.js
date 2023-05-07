import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import format from 'date-fns/format';
import LoadingPage from '../../../LoadingPage';
import TeacherTableForClass from '../../../../components/Table/TeacherTableForClass';
import StudentTableforClass from '../../../../components/Table/StudentTableforClass';

function Classdetail() {

  const [studentTable, setStudentTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = studentTable ? Math.ceil(studentTable.length / itemsPerPage) : 0;
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  const [data, setData] = useState([]);
  const [courseDetail, setcourseDetail] = useState([]);

  //teacherlist
  const [teachers, setteachers] = useState([]);

  //studentlist
  // const [students, setstudents] = useState([]);


  // const [courseDetail, setcourse] = useState([]);ตารางวิชา
  const { classID } = useParams();



  ///student post
  const [showModal1, setShowModal1] = useState(false);
  const [studentlist, setstudentlist] = useState([]);
  const [studentAdd, setStudentAdd] = useState([]);
  const [userID, setuserID] = useState("");
  const AddStudent = () => {

    axios.post(process.env.REACT_APP_API_URL + "/class/study", {
      userID: userID,
      classID: classID

    }).then(() => {
      setStudentAdd([
        ...studentAdd,
        {
          userID: userID,
          classID: classID
        }
      ])
      Swal.fire({
        icon: "success",
        title: "Add Student success",
        showConfirmButton: false,
        timer: 1000,
      })
      // window.location.href = "/admin/class/detail/" + classID;
    })
  }
  ///Teacher post
  const [showModal2, setShowModal2] = useState(false);
  const [Teacherlist, setTeacherlist] = useState([]);
  const [taughtType, settaughtType] = useState("");
  const [classList, setClassList] = useState([]);

  const [generationList, setGenerationList] = useState([]);
  const [generation, setGeneration] = useState("");
  const [generationAdd, setGenerationAdd] = useState([]);
  const [studentList, setStudentList] = useState([]);

  // const addTeacher = () => {

  //   axios.post(process.env.REACT_APP_API_URL + "/class/taugh", {
  //     userID: userID,
  //     classID: classID,
  //     taughtType: taughtType

  //   }).then(() => {
  //     setTeacherlist([
  //       ...Teacherlist,
  //       {
  //         userID: userID,
  //         classID: classID,
  //         taughtType: taughtType
  //       }
  //     ])
  //     window.location.href = "/admin/class/detail/" + classID;
  //   })
  // }

  ///delete teacher
  // const deleteTeacher = (userID) => {
  //   Swal.fire({
  //     title: 'ต้องการลบหลักสูตรหรือไม่?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'ใช่',
  //     denyButtonText: `ไม่ใช่`,
  //     cancelButtonText: 'ยกเลิก'
  //   })
  //     .then((results) => {
  //       if (results.isConfirmed) {
  //         axios.delete(process.env.REACT_APP_API_URL + "/class/taugh", { data: { userID, classID } })
  //           .then((response) => {
  //             setteachers(
  //               teachers.filter((_) => {
  //                 return _.userID !== userID;

  //               })
  //             )
  //             Swal.fire('Deleted!', '', 'success')

  //           }).catch(function (error) {
  //             if (error.response) {
  //               // console.log(error.response);
  //             }
  //           });
  //       }
  //       else if (results.isDenied) {
  //         window.location.href = "/admin/class/detail/" + classID;
  //       }
  //     })

  // }

  ////delete Student
  // const deleteStudent = (userID) => {
  //   Swal.fire({
  //     title: 'ต้องการลบหลักสูตรหรือไม่?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'ใช่',
  //     denyButtonText: `ไม่ใช่`,
  //     cancelButtonText: 'ยกเลิก'
  //   })
  //     .then((results) => {
  //       if (results.isConfirmed) {
  //         axios.delete(process.env.REACT_APP_API_URL + "/class/study", { data: { userID, classID } })
  //           .then((response) => {
  //             setstudents(
  //               students.filter((_) => {
  //                 return _.userID !== userID;

  //               })
  //             )

  //             Swal.fire('Deleted!', '', 'success')

  //           }).catch(function (error) {
  //             if (error.response) {
  //               // console.log(error.response);
  //             }
  //           });
  //       }
  //       else if (results.isDenied) {
  //         window.location.href = "/admin/class/detail/" + classID;
  //       }
  //     })

  // }

  useEffect(() => {
    const fetchData = () => {
      // axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: classID } })
      //   .then(res => {
      //     // console.log(res.data);

      //     if (res.data.error === true) {
      //       // console.log(res.data);
      //       // console.log("ERROR FOUND WHEN GET DATA FROM API");
      //       return;
      //     }
      //     setStudentTable(res.data.data.students)
      //   })
      //   .catch(error => {
      //     // console.log(error.res);
      //   });

      axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: classID } })
        .then(res => {
          // console.log(res.data);

          if (res.data.error === true) {
            // console.log(res.data)
            // console.log("ERROR FOUND WHEN GET DATA FROM API");
            return;
          }
          setData(res.data.data.class);
          setcourseDetail(res.data.data.courseDetail);
          setteachers(res.data.data.teachers);
          setStudentTable(res.data.data.students)
          // setstudents(res.data.data.students);
          setLoading(true);

          setTimeout(() => {
            setCompleted(true);
          }, 1000);


        }).catch(error => {
          // console.log(error.res);
        });

      axios.get(process.env.REACT_APP_API_URL + "/student/generation")
        .then(res => {
          // console.log(res.data);

          if (res.data.error === true) {
            // console.log(res.data);
            // console.log("ERROR FOUND WHEN GET DATA FROM API");
            return;
          }
          setGenerationList(res.data.data);
        })
        .catch(error => {
          // console.log(error.res);
        });

      axios.get(process.env.REACT_APP_API_URL + "/student/list", { params: { status: 1 } })
        .then(res => {
          // console.log(res.data);

          if (res.data.error === true) {
            // console.log(res.data);
            // console.log("ERROR FOUND WHEN GET DATA FROM API");
            return;
          }
          setStudentList(res.data.data);
        })
        .catch(error => {
          // console.log(error.res);
        })
    }
    fetchData();
    renderTable();
  }, [searchTerm, studentAdd, generationAdd]);

  const handleClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const deleteStudent = (userID) => {
    Swal.fire({
      title: 'ต้องการลบนิสิตหรือไม่?',
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
              setStudentTable(
                studentTable.filter((_) => {
                  return _.userID !== userID;

                })
              )
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                showConfirmButton: false,
                timer: 1000,
              })

            }).catch(function (error) {
              if (error.response) {
                // console.log(error.response);
              }
            });
        }
        else if (results.isDenied) {
          window.location.href = "/admin/class/detail/" + classID;
        }
      })

  }

  const renderTable = () => {
    if (!studentTable) {
      return null;
    }
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filterStudent.slice(start, end).map((_, index) => (
      <tbody key={start + index}>
        <tr className="hover:bg-gray-200 bg-white border-b">
          <td className="py-4 px-6" >{_.studentID}</td>
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
    ));
  };

  // const renderPageNumbers = () => {
  //   if (!studentTable) {
  //     return null;
  //   }
  //   const pageNumbers = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pageNumbers.push(
  //       <li
  //         key={i}
  //         className={`${currentPage === i ? "bg-orange-500 text-white" : "bg-white text-black"
  //           } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`
  //         }
  //       >
  //         <a href="#!" onClick={(e) => handleClick(e, i)}>
  //           {i}
  //         </a>
  //       </li>
  //     );
  //   }
  //   return pageNumbers;
  // };

  const handlePrevClick = (e) => {
    e.preventDefault();
    handleClick(e, currentPage - 1);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    handleClick(e, currentPage + 1);
  };

  const renderPageNumbers = () => {
    if (!studentTable) {
      return null;
    }
    const pageNumbers = [];
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    const maxPageRange = 3;
    const startPageRange = Math.max(1, currentPage - maxPageRange);
    const endPageRange = Math.min(totalPages, currentPage + maxPageRange);

    pageNumbers.push(
      <li
        href="#!"
        onClick={(e) => handleClick(e, 1)}
        key={"first"}
        className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
      >
        <a href="#!" onClick={(e) => handleClick(e, 1)}>
          หน้าแรก
        </a>
      </li>
    );

    if (currentPage > 1) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={handlePrevClick}
          key={"prev"}
          className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={handlePrevClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
          </a>
        </li>
      );
    }

    for (let i = startPageRange; i <= endPageRange; i++) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={(e) => handleClick(e, i)}
          key={i}
          className={`${currentPage === i ? "bg-orange-500 text-white" : "bg-white text-black"
            } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={(e) => handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }

    if (currentPage < totalPages) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={handleNextClick}
          key={"next"}
          className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
            </svg>
          </a>
        </li>
      );
    }

    pageNumbers.push(
      <li
        href="#!"
        onClick={(e) => handleClick(e, totalPages)}
        key={"last"}
        className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
      >
        <a href="#!" onClick={(e) => handleClick(e, totalPages)}>
          หน้าสุดท้าย
        </a>
      </li>
    );

    return pageNumbers;
  };

  const filterStudent = studentTable.filter((item) =>
    item.studentID.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const fetchData = () => {

  //   axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: classID } })
  //     .then(res => {
  //       // console.log(res.data);

  //       if (res.data.error === true) {
  //         // console.log(res.data)
  //         // console.log("ERROR FOUND WHEN GET DATA FROM API");
  //         return;
  //       }
  //       setData(res.data.data.class);
  //       setcourseDetail(res.data.data.courseDetail);
  //       setteachers(res.data.data.teachers);
  //       // setstudents(res.data.data.students);
  //       setLoading(true);

  //       setTimeout(() => {
  //         setCompleted(true);
  //       }, 1000);


  //     }).catch(error => {
  //       // console.log(error.res);
  //     });

  //   axios.get(process.env.REACT_APP_API_URL + "/student/generation")
  //     .then(res => {
  //       // console.log(res.data);

  //       if (res.data.error === true) {
  //         // console.log(res.data);
  //         // console.log("ERROR FOUND WHEN GET DATA FROM API");
  //         return;
  //       }
  //       setGenerationList(res.data.data);
  //     })
  //     .catch(error => {
  //       // console.log(error.res);
  //     });

  //   axios.get(process.env.REACT_APP_API_URL + "/student/list", { params: { status: 1 } })
  //     .then(res => {
  //       // console.log(res.data);

  //       if (res.data.error === true) {
  //         // console.log(res.data);
  //         // console.log("ERROR FOUND WHEN GET DATA FROM API");
  //         return;
  //       }
  //       setStudentList(res.data.data);
  //     })
  //     .catch(error => {
  //       // console.log(error.res);
  //     })
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchData();
  //   }, 2000);
  // }, [])

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

  const addGenerationToClass = () => {
    axios.post(process.env.REACT_APP_API_URL + "/class/classFromStudentGeneration", {
      generation: generation,
      classID: classID
    })
      .then(() => {
        setGenerationAdd([
          ...generationAdd,
          {
            generation: generation,
            classID: classID
          }
        ])
        Swal.fire({
          icon: "success",
          title: "Add Student success",
          showConfirmButton: false,
          timer: 1000,
        })
      })
      .catch((error) => {
        console.error("Error", error);
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
            <div>
              <div className="flex  items-center justify-center ml-5">
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
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มนิสิตทั้งรุ่น</span>
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
                              ระบุรุ่นของนิสิต
                            </h4>
                            <select
                              className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                              type="text"
                              name='generation'
                              placeholder="generation"
                              onChange={(event) => {
                                // const filterTeacher = teacherList.filter(item => {
                                //   return event.target.value == item.userID
                                // })
                                setGeneration(event.target.value)
                                // console.log(teacherList)
                                // console.log(event.target.value)
                              }}
                            >
                              <option value={""}>---โปรดระบุรุ่น---</option>
                              {
                                generationList.map((_, index) => (<option key={index} value={_.generation}>{_.generation}</option>))
                              }
                            </select>
                            <>
                              <p className=' text-red-500 text-center mt-3'>***เพิ่มอาจารย์ให้ครบทุกคนก่อนแล้วจึงเพิ่มนิสิต***</p>
                            </>
                            <div className="items-center gap-2 mt-3 sm:flex">
                              <button
                                className="w-full mt-2 p-2.5 flex-1 text-white  bg-green-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                onClick={() => {
                                  // addTeacher();
                                  // getTeacherData();
                                  addGenerationToClass();
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
            <p>รายชื่ออาจารย์ผู้สอน</p>
            <TeacherTableForClass></TeacherTableForClass>
            <p>รายชื่อนิสิต</p>
            {/* <StudentTableforClass></StudentTableforClass> */}
            <>
              <input
                className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                placeholder="ค้นหานิสิต...(รหัสนิสิต)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
                  {renderTable()}
                </table>
              </div>
              <div className="flex justify-center mt-4">
                <ul className="flex">
                  {renderPageNumbers()}
                </ul>
              </div>
            </>
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