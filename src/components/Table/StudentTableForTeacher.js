import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function StudentTableForTeacher() {
    const [studentList, setStudentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = studentList ? Math.ceil(studentList.length / itemsPerPage) : 0;
    const [searchTerm, setSearchTerm] = useState("");
    const {classID} = useParams();


    useEffect(() => {
        const fetchData = () => {
            axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: classID } })
                .then(res => {
                    // console.log(res.data);

                    if (res.data.error === true) {
                        // console.log(res.data)
                        // console.log("ERROR FOUND WHEN GET DATA FROM API");
                        return;
                    }
                    setStudentList(res.data.data.students);

                }).catch(error => {
                    // console.log(error.res);
                })
        }
        fetchData();
    }, [searchTerm]);

    const handleClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderTable = () => {
        if (!studentList) {
            return null;
        }
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterStudent.slice(start, end).map((_, index) => (
            <tbody key={start + index}>
                <tr className="hover:bg-gray-200 bg-white border-b">
                    <td className="py-4 px-6" >{_.userID}</td>
                    <td className="py-4 px-6">{_.nameTH}</td>
                    <td className="py-4 px-6">{_.nameENG}</td>
                    <td className="py-4 px-6">{_.gender}</td>
                </tr>
            </tbody>
        ));
    };

    const renderPageNumbers = () => {
        if (!studentList) {
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

    const filterStudent = studentList.filter((item) =>
        item.nameTH.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
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
            <div className="flex justify-center mt-4">
                <ul className="flex">
                    {renderPageNumbers()}
                </ul>
            </div>
            </div>
        </>
    )
}

export default StudentTableForTeacher