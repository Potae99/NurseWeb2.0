import axios from 'axios';
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import WorkHistoryDetail from './WorkHistoryDetail';

function WorkHistoryList() {

    const [workHistoryList, setWorkHistoryList] = useState([]);
    const [nameTH, setnameTH] = useState("");

    const { userID } = useParams();
    const { workHistoryID } = useParams();

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

    const fetchData = () => {

        axios.post(process.env.REACT_APP_API_URL + "/student/workHistories", { userID: userID })
            .then(res => {
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API ");

                    return;
                }
                setWorkHistoryList(res.data.data);

            });
        axios.post(process.env.REACT_APP_API_URL + "/student/detail", { userID: userID })
            .then(res => {
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setnameTH(res.data.data.nameTH);

            }).catch(error => {
                console.log(error.res);
            });
    }
    useEffect(() => {
        fetchData();
    }, [])

    const backToStudentDetail = (userID) => {
        window.location.href = "/admin/student/detail/" + userID;
    }

    const goToWorkHistorydetail = (workHistoryID) => {
        window.location.href = "/admin/student/work/detail/" + workHistoryID;
    }

    return (
        <div>
            <Routes>
                <Route path='/admin/student/work/detail/:userID' element={WorkHistoryDetail}></Route>
            </Routes>
            <h1 className=' text-4xl text-center m-3 text-black'>ประวัติการทำงาน</h1>
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
                <div className=' flex'>
                    <button onClick={() => backToStudentDetail(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                        <span className="relative invisible">Button Text</span>
                    </button>
                </div>
                <div className=' flex flex-row'>
                    <p className=' text-2xl ml-3 text-black' >นิสิต : {nameTH}</p>
                </div>

            </div>
            <div>
                <table className=" w-full text-sm text-left text-black ">
                    <thead className="text-xs text-black uppercase bg-orange-300">
                        <tr  >
                            <th scope="col" className="py-3 px-6" >ลำดับ</th>
                            <th scope="col" className="py-3 px-6">ชื่อสถานที่ทำงาน</th>
                            <th scope="col" className="py-3 px-6">แผนก</th>
                            <th scope="col" className="py-3 px-6">เริ่ม</th>
                            <th scope="col" className="py-3 px-6">สิ้นสุด</th>
                            <th scope="col" className="py-3 px-6">การกระทำ</th>
                        </tr>
                    </thead>
                    {workHistoryList.map((_, index) => (
                        <tbody key={index}>
                            <tr className=" hover:bg-gray-200 bg-white border-b"
                            >
                                <td className="py-4 px-6" >{index + 1}</td>
                                <td className="py-4 px-6">{_.workAddressName}</td>
                                <td className="py-4 px-6">{_.department}</td>
                                <td className="py-4 px-6">{format(new Date(_.startWork), 'dd/MM/yyyy')}</td>
                                <td className="py-4 px-6">{format(new Date(_.endWork), 'dd/MM/yyyy')}</td>
                                <td className="py-4 px-6 flex flex-row">
                                    <div className=' ml-3'
                                        content="View student"
                                        color="error"
                                        onClick={() => console.log("View student", _.userID)}>
                                        <button onClick={() => goToWorkHistorydetail(_.workHistoryID)}>
                                            <svg width="20" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.0572 0.5C4.86 0.5 0 10.22 0 10.22C0 10.22 4.86 19.94 13.0572 19.94C21.06 19.94 25.92 10.22 25.92 10.22C25.92 10.22 21.06 0.5 13.0572 0.5ZM12.96 3.74C16.5564 3.74 19.44 6.656 19.44 10.22C19.44 13.8164 16.5564 16.7 12.96 16.7C9.396 16.7 6.48 13.8164 6.48 10.22C6.48 6.656 9.396 3.74 12.96 3.74ZM12.96 6.98C11.178 6.98 9.72 8.438 9.72 10.22C9.72 12.002 11.178 13.46 12.96 13.46C14.742 13.46 16.2 12.002 16.2 10.22C16.2 9.896 16.0704 9.6044 16.0056 9.3128C15.7464 9.8312 15.228 10.22 14.58 10.22C13.6728 10.22 12.96 9.5072 12.96 8.6C12.96 7.952 13.3488 7.4336 13.8672 7.1744C13.5756 7.0772 13.284 6.98 12.96 6.98Z" fill="black" />
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

    )
}

export default WorkHistoryList