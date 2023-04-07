import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import LoadingPage from '../LoadingPage';


function TeacherEval_search() {
    const [data, setData] = useState([]);
    const [completed, setCompleted] = useState(undefined);

    const fetchData = () => {

        axios.get(process.env.REACT_APP_API_URL + "/class/list")
            .then(res => {
                // const persons = res.data;
                //this.setState({ persons });
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API ");


                    return;
                }
                setData(res.data.data);
                setTimeout(() => {
                    setCompleted(true);
                }, 1000);
            });
    }
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [])

    const gotoClassdetail = (classID) => {
        window.location.href = "/teacher/eval/sum/" + classID;
    }

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className=" w-full text-sm text-left text-black">
                        <thead className="text-sm text-black uppercase bg-orange-300">
                            <tr  >

                                <th scope="col" className="py-3 px-6" >รหัสคาบเรียน</th>
                                <th scope="col" className="py-3 px-6">ชื่อวิชา</th>
                                <th scope="col" className="py-3 px-6">ห้องเรียน</th>
                                <th scope="col" className="py-3 px-6">การกระทำ</th>
                            </tr>
                        </thead>
                        {data.map((_, index) => (
                            <tbody key={index}>
                                <tr className="  hover:bg-gray-200 bg-white "
                                >
                                    <td className="py-4 px-6" >{_.classID}</td>
                                    <td className="py-4 px-6">{_.courseNameTH}</td>
                                    <td className="py-4 px-6">{_.studyRoom}</td>
                                    <td className="py-4 px-6 flex flex-row">
                                        <div className=' ml-3'
                                            content="View Admin"
                                            color="error"
                                            onClick={() => console.log("View Class", _.classID)}>
                                            <button onClick={() => gotoClassdetail(_.classID)}>
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
            )}

        </>
    )
}

export default TeacherEval_search