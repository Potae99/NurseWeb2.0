import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import LoadingPage from '../LoadingPage';
import axios from 'axios';
import format from 'date-fns/format';
import StudentTableForTeacher from '../../components/Table/StudentTableForTeacher';

function SubjectManagement() {
    const getToken = () => {
        // NOTE: sessionStorage store session in ONLY tabs in chrome
        // can replace sessionStorage -> localStorage to save to local
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    };
    const [token, setToken] = useState(getToken());
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);
    const [success, setSuccess] = useState(undefined);

    const [classDetail, setClassDetail] = useState([]);
    const [dateYear, setDateyear] = useState("");
    const [classList, setClassList] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = classDetail ? Math.ceil(classDetail.length / itemsPerPage) : 0;
    const [searchTerm, setSearchTerm] = useState("");

    const [yearList, setYearList] = useState([]);


    useEffect(() => {

        const fetchData = () => {
            axios.get(process.env.REACT_APP_API_URL + "/class/yearClass")
                .then((res) => {
                    setYearList(res.data.data);
                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);
                })
                .catch((error) => {
                    console.error("Error", error);
                });
        }
        fetchData();
    }, [])

    // const fetchData = () => {
    //     axios.get(process.env.REACT_APP_API_URL + "/class")
    //         .then(res => {
    //             console.log(res.data)

    //             if (res.data.error === true) {
    //                 console.log(res.data);
    //                 console.log("ERROR FOUND WHEN GET DATA FROM API");
    //                 return;
    //             }
    //             setClassDetail(res.data.data);
    //             setLoading(true);

    //             setTimeout(() => {
    //                 setCompleted(true);
    //             }, 1000);
    //         })
    //         .catch(error => {
    //             console.log(error.res)
    //         });
    // };

    const onchangeDateYear = () => {
        axios.get(process.env.REACT_APP_API_URL + "/class/taugh", { params: { userID: token.userID, dateYear: dateYear } })
            .then(res => {
                // console.log(res.data);

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setClassList(res.data.data);


            })
            .catch(error => {
                // console.log(error.res);
            })
    }
    // const onchangeDateYear = () => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/class/taugh`, { params: { userID: token.userID, dateYear: dateYear } })
    //         .then(res => {
    //             console.log(res.data);

    //             if (res.data.error === true) {
    //                 console.log(res.data);
    //                 console.log("ERROR FOUND WHEN GET DATA FROM API");
    //                 return;
    //             }
    //             setCourseList(res.data.data);

    //         })
    //         .catch(error => {
    //             console.log(error.response);
    //         })
    // };

    const onchangeCourse = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = event.target.options[selectedIndex];

        setSelectedCourse({
            courseNameTH: selectedOption.text,
            courseNameENG: selectedOption.getAttribute("data-eng"),
            courseID_number: selectedOption.getAttribute("data-id"),
            detail: selectedOption.getAttribute("data-detail"),
            creditStudy: selectedOption.getAttribute("data-credit"),
            taughtType: selectedOption.getAttribute("data-type"),
        })
        axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: event.target.value } })
            .then(res => {
                // console.log(res.data)

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setClassDetail(res.data.data.students);
                setSuccess(true);
            })
            .catch(error => {
                // console.log(error.res)
            });
    }
    const handleClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderTable = () => {
        if (!classDetail) {
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
                </tr>
            </tbody>
        ));
    };

    const handlePrevClick = (e) => {
        e.preventDefault();
        handleClick(e, currentPage - 1);
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        handleClick(e, currentPage + 1);
    };

    const renderPageNumbers = () => {
        if (!classDetail) {
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

    const filterStudent = classDetail.filter((item) =>
        item.nameTH.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // const onchangeClass = (event) => {
    //     axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: event.target.value } })
    //         .then(res => {
    //             console.log(res.data)

    //             if (res.data.error === true) {
    //                 console.log(res.data);
    //                 console.log("ERROR FOUND WHEN GET DATA FROM API");
    //                 return;
    //             }
    //             setClassDetail(res.data.data);
    //             setSuccess(true);
    //         })
    //         .catch(error => {
    //             console.log(error.res)
    //         });
    // }


    // console.log(dateYear)
    // console.log(token.userID)

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <>
                    <div className=" text-black font-bold text-4xl m-10 grid grid-cols-1 place-items-center">จัดการรายวิชา</div>
                    <div className=' mb-5 flex justify-center'>
                        <select
                            className=' border-black w-1/3 rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                            type='text'
                            name='dateYear'
                            placeholder='ปีการศึกษา'
                            onChange={(event) => {
                                setDateyear(event.target.value)
                            }}
                        >
                            <option value={""}>---ระบุปีการศึกษา---</option>
                            {
                                yearList.map((_, index) => (<option key={index} value={_.dateYear}>{_.dateYear}</option>))
                            }
                        </select>
                        <div className=' ml-3'>
                            <button onClick={() => onchangeDateYear(dateYear)} type="submit" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                    <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ค้นหา</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                    <div className=' mb-5 flex justify-center'>
                        <select
                            className=' border-black w-2/3 rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md'
                            type='text'
                            name='courseName'
                            placeholder='รายวิชา'
                            onChange={onchangeCourse}
                        >
                            <option value={""}>---ระบุรายวิชา---</option>
                            {
                                classList.map((_, index) => (
                                    <option
                                        key={index}
                                        value={_.classID}
                                        data-eng={_.courseNameENG}
                                        data-id={_.courseID_number}
                                        data-detail={_.detail}
                                        data-credit={_.creditStudy}
                                        data-type={_.taughtType}
                                    >
                                        {_.courseNameTH} {_.taughtType}</option>))
                            }
                        </select>
                    </div>
                    <>
                        {!success ? (<></>) :
                            <div className=' text-black'>
                                {selectedCourse && (
                                    <div className=' grid place-items-start ml-7 text-xl mb-3'>
                                        <div className=' grid'>
                                            {
                                                selectedCourse.courseNameTH ?
                                                    <>
                                                        <div className=" m-3">ชื่อวิชา(ไทย) : {selectedCourse.courseNameTH}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.courseNameENG ?
                                                    <>
                                                        <div className=" m-3">ชื่อวิชา(อังกฤษ) : {selectedCourse.courseNameENG}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.taughtType ?
                                                    <>
                                                        <div className=" m-3">รูปแบบการสอน : {selectedCourse.taughtType}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.courseID_number ?
                                                    <>
                                                        <div className=" m-3">รหัสวิชา : {selectedCourse.courseID_number}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.creditStudy ?
                                                    <>
                                                        <div className=" m-3">หน่วยกิต : {selectedCourse.creditStudy}</div></> :
                                                    <></>
                                            }
                                            {
                                                selectedCourse.detail ?
                                                    <>
                                                        <div className=" m-3">รายละเอียด : {selectedCourse.detail}</div></> :
                                                    <></>
                                            }
                                        </div>
                                    </div>
                                )}
                                <>
                                    <input
                                        className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                        placeholder="ค้นหานิสิต..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                                        <table className="w-full text-sm text-left text-black">
                                            <thead className="text-sm text-black uppercase bg-orange-300">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6" >รหัสนิสิต</th>
                                                    <th scope="col" className="py-3 px-6">ชื่อไทย</th>
                                                    <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
                                                    <th scope="col" className="py-3 px-6">เพศ</th>
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
                        }
                    </>
                </>
            )}
        </>
    )
}
export default SubjectManagement