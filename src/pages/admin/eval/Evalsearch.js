import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import LoadingPage from '../../LoadingPage';
import format from 'date-fns/format';


function Evalsearch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = () => {

            axios.get(process.env.REACT_APP_API_URL + "/class/list")
                .then(res => {
                    // const persons = res.data;
                    //this.setState({ persons });
                    // console.log(res.data);

                    if (res.data.error === true) {
                        // console.log(res.data)
                        // console.log("ERROR FOUND WHEN GET DATA FROM API ");


                        return;
                    }
                    setData(res.data.data);
                    setLoading(true);

                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);
                });
        }
        fetchData();
    }, [searchTerm])

    const handleClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderTable = () => {
        if (!data) {
            return null;
        }
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterData.slice(start, end).map((_, index) => (
            <tbody key={start + index}>
                <tr className="hover:bg-gray-200 bg-white border-b">
                    <td className="py-4 px-6">{format(new Date(_.dateYear), "yyyy")}</td>
                    <td className="py-4 px-6" >{_.courseID_number}</td>
                    <td className="py-4 px-6">{_.courseNameTH}</td>
                    <td className="py-4 px-6">{_.studyRoom}</td>
                    <td className="py-4 px-6 flex flex-row">
                        <div className=' ml-3'
                            content="View Admin"
                            color="error"
                           /* onClick={() => console.log("View Class", _.classID)}*/>
                            <button onClick={() => gotoClassdetail(_.classID)}>
                                <svg width="20" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0572 0.5C4.86 0.5 0 10.22 0 10.22C0 10.22 4.86 19.94 13.0572 19.94C21.06 19.94 25.92 10.22 25.92 10.22C25.92 10.22 21.06 0.5 13.0572 0.5ZM12.96 3.74C16.5564 3.74 19.44 6.656 19.44 10.22C19.44 13.8164 16.5564 16.7 12.96 16.7C9.396 16.7 6.48 13.8164 6.48 10.22C6.48 6.656 9.396 3.74 12.96 3.74ZM12.96 6.98C11.178 6.98 9.72 8.438 9.72 10.22C9.72 12.002 11.178 13.46 12.96 13.46C14.742 13.46 16.2 12.002 16.2 10.22C16.2 9.896 16.0704 9.6044 16.0056 9.3128C15.7464 9.8312 15.228 10.22 14.58 10.22C13.6728 10.22 12.96 9.5072 12.96 8.6C12.96 7.952 13.3488 7.4336 13.8672 7.1744C13.5756 7.0772 13.284 6.98 12.96 6.98Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        ));
    };

    // const renderPageNumbers = () => {
    //     if (!data) {
    //         return null;
    //     }
    //     const pageNumbers = [];
    //     for (let i = 1; i <= totalPages; i++) {
    //         pageNumbers.push(
    //             <li
    //                 key={i}
    //                 className={`${currentPage === i ? "bg-orange-500 text-white" : "bg-white text-black"
    //                     } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`
    //                 }
    //             >
    //                 <a href="#!" onClick={(e) => handleClick(e, i)}>
    //                     {i}
    //                 </a>
    //             </li>
    //         );
    //     }
    //     return pageNumbers;
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
        if (!data) {
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

    const filterData = data.filter((item) =>
        item.dateYear.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    const gotoClassdetail = (classID) => {
        window.location.href = "/admin/eval/sum/" + classID;
    }

    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className=' text-black min-h-screen'>
                    <h1 className=' text-center text-4xl mb-7'>ผลการประเมิน</h1>
                    <>
                        <input
                            className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                            placeholder="ค้นหาปีการศึกษา..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className=' relative overflow-x-auto shadow-md sm:rounded-lg'>
                            <table className=" w-full text-sm text-left text-black">
                                <thead className="text-sm text-black uppercase bg-orange-300">
                                    <tr  >
                                        <th scope="col" className="py-3 px-6">ปีการศึกษา</th>
                                        <th scope="col" className="py-3 px-6" >รหัสวิชา</th>
                                        <th scope="col" className="py-3 px-6">ชื่อวิชา</th>
                                        <th scope="col" className="py-3 px-6">ห้องเรียน</th>
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
            )}

        </>
    )
}

export default Evalsearch