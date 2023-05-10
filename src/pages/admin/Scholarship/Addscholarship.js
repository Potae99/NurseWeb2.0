import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import LoadingPage from '../../LoadingPage';

function Addscholarship() {
    const [scholarship_name, setscholarship_name] = useState("");
    const [data, setData] = useState([]);
    const [scholarship, setScholarship] = useState([]);
    const [scholarshipList, setScholarshipList] = useState([]);

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    const [showModal1, setShowModal1] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = scholarship ? Math.ceil(scholarship.length / itemsPerPage) : 0;
    const [searchTerm, setSearchTerm] = useState("");

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

    const handleDeleteScholarshipClick = async (scholarship_id) => {
        const scholarshipToDelete = scholarship.find(
            (item) => item.scholarship_id === scholarship_id
        );

        if (
            scholarshipToDelete &&
            scholarshipToDelete.scholarship_name === "ทุนส่วนตัว"
        ) {
            Swal.fire({
                title: "ข้อมูลนี้ไม่สามารถลบได้",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
            });
        } else {
            const result = await Swal.fire({
                title: "ต้องการลบทุนการศึกษาหรือไม่?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "ใช่",
                denyButtonText: `ไม่ใช่`,
                cancelButtonText: "ยกเลิก",
                icon: "question",
            });

            if (result.isConfirmed) {
                const results = await Swal.fire({
                    title: "ข้อมูลที่เกี่ยวข้องทั้งหมดจะถูกลบไปด้วย",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "ใช่",
                    denyButtonText: `ไม่ใช่`,
                    cancelButtonText: "ยกเลิก",
                    icon: "warning",
                });

                if (results.isConfirmed) {
                    try {
                        await axios.delete(
                            process.env.REACT_APP_API_URL + "/student/scholarship",
                            {
                                data: { scholarship_id: scholarship_id },
                            }
                        );
                        // setScholarshipList with the new data after deleting
                        const updatedScholarshipList = scholarshipList.filter((item) => item.scholarship_id !== scholarship_id);
                        setScholarshipList(updatedScholarshipList);
                        Swal.fire({
                            icon: "success",
                            title: "Deleted!",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                    } catch (error) {
                        // console.log(error.response);
                        Swal.fire({
                            icon: "error",
                            title: "พบข้อผิดพลาด",
                            showConfirmButton: false,
                            timer: 1000,
                        })
                    }
                }
            }
        }
        // call renderTable again with the updated data
        renderTable();
    };


    useEffect(() => {
        const fetchData = () => {
            axios.get(process.env.REACT_APP_API_URL + "/student/scholarship")
                .then(res => {

                    if (res.data.error === true) {
                        // console.log(res.data)
                        // console.log("ERROR FOUND WHEN GET DATA FROM API ");
                        Swal.fire({
                            icon: "error",
                            title: "พบข้อผิดพลาดในการรับข้อมูล",
                            showConfirmButton: false,
                            timer:1000, 
                        })

                        return;
                    }
                    setScholarship(res.data.data);
                    setLoading(true);

                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);

                });
        }
        fetchData();
        renderTable();
    }, [searchTerm, data, scholarshipList]);

    const handleClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderTable = () => {
        if (!scholarship) {
            return null;
        }
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterScholarship.slice(start, end).map((_, index) => (
            <tbody key={start + index}>
                <tr className="hover:bg-gray-200 bg-white border-b">
                    <td className="py-4 px-6" >{index + 1}</td>
                    <td className="py-4 px-6">{_.scholarship_name}</td>
                    <td className='py-4 px-6 flex flex-row'>
                        <div className=''
                            content="Delete professor"
                            color="error"
                        >
                            <button onClick={() => { handleDeleteScholarshipClick(_.scholarship_id) }}>
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
    //     if (!scholarship) {
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
        if (!scholarship) {
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

    const filterScholarship = scholarship.filter((item) =>
        item.scholarship_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddScholarshipClick = async (event) => {
        event.preventDefault();

        if (!scholarship_name) {
            Swal.fire({
              icon: "error",
              title: "โปรดระบุชื่อทุน",
              showConfirmButton: false,
              timer: 2000,
            });
            return;
          }
          

        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + "/student/scholarship", {
                scholarship_name: scholarship_name
            });
            setShowModal1(false);
            Swal.fire({
                icon: "success",
                title: "Add scholarship success",
                showConfirmButton: false,
                timer: 1000,
            });
            setData((prevData) => [
                ...prevData,
                { scholarship_id: response.data.id, scholarship_name }
            ]);
        } catch (error) {
            // console.log(error);
            Swal.fire({
                icon: "error",
                title: "โปรดตรวจสอบข้อมูล",
                text: "ชื่อทุนนี้อาจมีอยู่แล้ว",
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };




    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div className=' text-black bg-white min-h-screen'>
                    <h1 className=' text-center mt-3 ml-3 text-4xl'>ทุนการศึกษา</h1>
                    <div className='container mx-auto'>
                        <>
                            <div className=' flex flex-row-reverse mr-3 mb-5'>
                                <button onClick={() => setShowModal1(true)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-balck transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                        <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มทุนการศึกษา</span>
                                    <span className="relative invisible">Button Text</span>
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
                                            <div className=" w-1/3 relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                                                <div className=" mt-3 ">
                                                    <div className=" text-center sm:ml-4   sm:text-left">
                                                        <h4 className="text-lg font-medium text-gray-800">
                                                            ชื่อทุนการศึกษา
                                                        </h4>
                                                        <input
                                                            // value={scholarship_name}
                                                            onChange={(event) => {
                                                                setscholarship_name(event.target.value)
                                                            }}
                                                            type="text"
                                                            name="scholarship_name"
                                                            placeholder="ชื่อทุน"
                                                            className=" w-full rounded-md border border-while bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                                        />
                                                        <div className="items-center gap-2 mt-3 sm:flex">
                                                            <button
                                                                className="w-full mt-2 p-2.5 flex-1 text-white  bg-orange-400 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                                onClick={handleAddScholarshipClick}
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
                        </>
                    </div>
                    <>
                        <input
                            className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                            placeholder="ค้นหาทุนการศึกษา...( ชื่อทุน )"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className=' relative overflow-x-auto shadow-md sm:rounded-lg'>
                            <table className=" w-full text-sm text-left text-black">
                                <thead className="text-sm text-black uppercase  bg-orange-300">
                                    <tr  >
                                        <th scope="col" className="py-3 px-6" >ลำดับ</th>
                                        <th scope="col" className="py-3 px-6">ชื่อทุน</th>
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
                </div >
            )
            }
        </>

    )
}
export default Addscholarship