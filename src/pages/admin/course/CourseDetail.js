import axios from 'axios';
import StudentPopup from '../../../components/Button/StudentPopup'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingPage from '../../LoadingPage';

function CourseDetail() {
    const [data, setData] = useState([]);
    const { courseID } = useParams();
    const { categoryID } = useParams();

    const [courseList, setCourseList] = useState([]);

    const [categoryInfo, setCategoryInfo] = useState('');
    const [courseNameTH, setCourseNameTH] = useState('');
    const [courseNameENG, setCourseNameENG] = useState('');
    const [detail, setDetail] = useState('');
    const [creditStudy, setCreditStudy] = useState('');
    const [studyTimeTheory, setStudyTimeTheory] = useState('');
    const [studyTimePractice, setStudyTimePractice] = useState('');
    const [studyTimeSelf, setStudyTimeSelf] = useState('');
    const [courseID_number, setCourseID_number] = useState('');

    const [category, setCategory] = useState([]);

    const [categoryName, setCategoryName] = useState('');

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

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

    const deleteCourse = () => {
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
                    axios.delete(process.env.REACT_APP_API_URL + "/course", { data: { courseID: courseID } })
                        .then((response) => {
                            setCourseList(
                                courseList.filter((_) => {
                                    return _.courseID !== courseID;
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
                                .then(() => { window.location.href = "/admin/course/all"; })


                        }).catch(function (error) {
                            if (error.response) {
                                console.log(error.response);
                            }
                        });
                }
                else if (results.isDenied) {
                    window.location.href = "/admin/course/all";
                }
            })

    }

    const fetchData = () => {
        axios.get(process.env.REACT_APP_API_URL + "/course/detail", { params: { courseID: courseID } })
            .then(res => {
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setCategoryName(res.data.data.categoryName);
                setCourseNameTH(res.data.data.courseNameTH);
                setCourseNameENG(res.data.data.courseNameENG);
                setDetail(res.data.data.detail);
                setCreditStudy(res.data.data.creditStudy);
                setStudyTimeTheory(res.data.data.studyTimeTheory);
                setStudyTimePractice(res.data.data.studyTimePractice);
                setStudyTimeSelf(res.data.data.studyTimeSelf);
                setCourseID_number(res.data.data.courseID_number);
                setCategoryInfo(res.data.data.categoryID);
                setLoading(true);

                setTimeout(() => {
                    setCompleted(true);
                }, 1000);

            }).catch(error => {
                console.log(error.res);
            });

        axios.get(process.env.REACT_APP_API_URL + "/course/category")
            .then(res => {
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data);
                    console.log("ERROR FOUND WHEN GET DATA ");
                    return;
                }
                setCategory(res.data.data)
            })
            .catch(error => {
                console.log(error.res)
            });
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [])

    const checkDataChange = () => {
        Swal.fire({
            title: 'ข้อมูลมีการเปลี่ยนแปลง',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'บันทึก',
            denyButtonText: `ไม่บันทึก`,
            cancelButtonText: 'ยกเลิก'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.put(process.env.REACT_APP_API_URL + "/course", {
                        courseID: courseID,
                        categoryID: categoryInfo,
                        courseID_number: courseID_number,
                        courseNameTH: courseNameTH,
                        courseNameENG: courseNameENG,
                        detail: detail,
                        creditStudy: creditStudy,
                        studyTimeTheory: studyTimeTheory,
                        studyTimePractice: studyTimePractice,
                        studyTimeSelf: studyTimeSelf
                        
                    })
                        .then(() => {
                            setData([
                                ...data,
                                {
                                    courseID: courseID,
                                    categoryID: categoryInfo,
                                    courseID_number: courseID_number,
                                    courseNameTH: courseNameTH,
                                    courseNameENG: courseNameENG,
                                    detail: detail,
                                    creditStudy: creditStudy,
                                    studyTimeTheory: studyTimeTheory,
                                    studyTimePractice: studyTimePractice,
                                    studyTimeSelf: studyTimeSelf
                                }
                            ])
                            // Swal.fire('Saved!', '', 'success')
                            Swal.fire({
                                // position: "top-end",
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { window.location.href = "/admin/course/all" })
                        })
                }
                else if (result.isDenied) {
                    // Swal.fire('Changes are not saved', '', 'info')
                    Swal.fire({
                        // position: "top-end",
                        icon: "info",
                        title: "Changes are not saved",
                        showConfirmButton: false,
                        timer: 1000,
                    })
                        .then(() => { window.location.href = "/admin/course/all" })
                }
            });
    }

    const backToAdminCourseAll = () => {
        window.location.href = "/admin/course/all";
    }

    const onchangeCategory = (event) => {
        const filterCategory = category.filter((item => {
            return event.target.value == item.categoryID
        }))
        setCategoryInfo(event.target.value);
        setCategoryName(filterCategory[0].categoryName);
    }

    // console.log(categoryInfo)

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div>
                    <div className=" text-black min-h-screen space-y-5 mb-10">
                        <div className=" font-bold text-4xl m-7 grid grid-cols-1 place-items-center">ข้อมูลรายวิชา</div>
                        <div>
                            <div className='container mx-auto text-black'>
                                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                                    <div ><p>หมวดวิชา</p>
                                        <div className="mb-5 flex justify-center ">
                                            <select
                                                onChange={(event) => {
                                                    onchangeCategory(event)
                                                }}
                                                defaultValue={categoryName}
                                                type="text"
                                                name='categoryName'
                                                className="w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            >
                                                <option value={""}>{categoryName}</option>
                                                {
                                                    category.map((_, index) => (<option key={index} value={_.categoryID}>{_.categoryName}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div ><p>รหัสวิชา</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={courseID_number}
                                                onChange={(event) => {
                                                    setCourseID_number(event.target.value)
                                                }}
                                                type="text"
                                                name="courseID_number"
                                                placeholder="รหัสวิชา"
                                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ชื่อไทย</p>
                                        <div className="mb-5 flex justify-center ">
                                            <textarea
                                                defaultValue={courseNameTH}
                                                onChange={(event) => {
                                                    setCourseNameTH(event.target.value)
                                                }}
                                                type="text"
                                                name="courseNameTH"
                                                placeholder="ชื่อไทย"
                                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ชื่ออังกฤษ</p>
                                        <div className="mb-5 flex justify-center ">
                                            <textarea
                                                defaultValue={courseNameENG}
                                                onChange={(event) => {
                                                    setCourseNameENG(event.target.value)
                                                }}
                                                type="text"
                                                name="courseNameENG"
                                                placeholder="ชื่ออังกฤษ"
                                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>หน่วยกิต</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={creditStudy}
                                                onChange={(event) => {
                                                    setCreditStudy(event.target.value)
                                                }}
                                                type="text"
                                                name="creditStudy"
                                                placeholder="หน่วยกิต"
                                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ชั่วโมงทฤษฎี</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={studyTimeTheory}
                                                onChange={(event) => {
                                                    setStudyTimeTheory(event.target.value)
                                                }}
                                                type="text"
                                                name="studyTimeTheory"
                                                placeholder="ชั่วโมงทฤษฎี"
                                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ชั่วโมงปฏิบัติ</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={studyTimePractice}
                                                onChange={(event) => {
                                                    setStudyTimePractice(event.target.value)
                                                }}
                                                type="text"
                                                name="studyTimePractice"
                                                placeholder="ชั่วโมงปฏิบัติ"
                                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ชั่วโมงศึกษาด้วยตัวเอง</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={studyTimeSelf}
                                                onChange={(event) => {
                                                    setStudyTimeSelf(event.target.value)
                                                }}
                                                type="text"
                                                name="studyTimeSelf"
                                                placeholder="ชั่วโมงศึกษาด้วยตัวเอง"
                                                className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div ><p>รายละเอียดวิชา</p>
                                    <div className="mb-5 flex justify-center ">
                                        <textarea
                                            defaultValue={detail}
                                            onChange={(event) => {
                                                setDetail(event.target.value)
                                            }}
                                            type="text"
                                            name="detail"
                                            placeholder="รายละเอียดวิชา"
                                            className="w-full rounded-md border border-while  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-row-reverse justify-around'>
                        <div className=''>
                            <div className=''>
                                <button onClick={() => checkDataChange(courseID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                        <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">บันทึก</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                        </div>
                        <div className=''>
                            <div className=''>
                                <button onClick={() => deleteCourse(courseID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                                        <svg width="20" className=' text-white' height="20" viewBox="0 0 47 51" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ลบ</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                        </div>
                        <div className=' ml-3'>
                            <button onClick={backToAdminCourseAll} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default CourseDetail