import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function Course_in_syllabus() {

    const [courseInSyllabus, setCourseInSyllabus] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = courseInSyllabus ? Math.ceil(courseInSyllabus.length / itemsPerPage) : 0;
    const [searchTerm, setSearchTerm] = useState("");

    const { syllabusID } = useParams();

    const deleteCourse = (courseID) => {
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
                    axios.delete(process.env.REACT_APP_API_URL + "/course/inSyllabus", { data: { courseID, syllabusID } })
                        .then((response) => {
                            setCourseInSyllabus(
                                courseInSyllabus.filter((_) => {
                                    return _.courseID !== courseID;
                                })
                            )

                            Swal.fire('Deleted!', '', 'success')
                                .then(() => { window.location.href = "/admin/course/syllabus/" + syllabusID })

                        }).catch(function (error) {
                            if (error.response) {
                                console.log(error.response);
                            }
                        });
                }
                else if (results.isDenied) {
                    window.location.href = "/admin/course/syllabus/" + syllabusID
                }
            })

    }

    useEffect(() => {
        const fetchData = () => {
            axios.get(process.env.REACT_APP_API_URL + "/course/syllabus", { params: { syllabusID: syllabusID } })
                .then(res => {
                    console.log(res.data);

                    if (res.data.error === true) {
                        console.log(res.data)
                        console.log("ERROR FOUND WHEN GET DATA FROM API");
                        return;
                    }
                    setCourseInSyllabus(res.data.data.courses);

                }).catch(error => {
                    console.log(error.res);
                });
        }

        fetchData();
    }, [searchTerm]);

    const handleClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderTable = () => {
        if (!courseInSyllabus) {
            return null;
        }
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterCourseInSyllabus.slice(start, end).map((_, index) => (
            <tbody key={start + index}>
                <tr className="hover:bg-gray-200 bg-white border-b">
                    <td className="py-4 px-6" >{index + 1}</td>
                    <td className="py-4 px-6" >{_.courseID_number}</td>
                    <td className="py-4 px-6">{_.courseNameTH}</td>
                    {/* <td className="py-4 px-6">{_.courseNameENG}</td> */}
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
        ));
    };

    const renderPageNumbers = () => {
        if (!courseInSyllabus) {
            return null;
        }
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={`${currentPage === i ? "bg-orange-500 text-white" : "bg-white text-black"
                        } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`
                    }
                >
                    <a href="#!" onClick={(e) => handleClick(e, i)}>
                        {i}
                    </a>
                </li>
            );
        }
        return pageNumbers;
    };

    const filterCourseInSyllabus = courseInSyllabus.filter((item) =>
        item.courseID_number.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <input
                className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                placeholder="ค้นหารายวิชา...(รหัสวิชา)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className=" w-full text-sm text-left text-black ">
                <thead className="text-sm text-black uppercase bg-orange-300">
                    <tr  >
                        <th scope="col" className="py-3 px-6" >ลำดับ</th>
                        <th scope="col" className="py-3 px-6" >รหัสวิชา</th>
                        <th scope="col" className="py-3 px-6">ชื่อไทย</th>
                        {/* <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th> */}
                        <th scope="col" className="py-3 px-6">หน่วยกิต</th>
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
    )
}

export default Course_in_syllabus