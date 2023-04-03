import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

function WorkHistorytable() {
    const [workHisrorylist, setWorkHistoryList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = workHisrorylist ? Math.ceil(workHisrorylist.length / itemsPerPage) : 0;
    const [searchTerm, setSearchTerm] = useState("");

    const { userID } = useParams();
    const [nameTH, setnameTH] = useState('');

    useEffect(() => {
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
        fetchData();
    }, [searchTerm]);

    const handleClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderTable = () => {
        if (!workHisrorylist) {
            return null;
        }
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterWorkHistory.slice(start, end).map((_, index) => (
            <tbody key={start + index}>
                <tr className="hover:bg-gray-200 bg-white border-b">
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
        ));
    };

    const renderPageNumbers = () => {
        if (!workHisrorylist) {
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

    const filterWorkHistory = workHisrorylist.filter((item) =>
        item.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const goToWorkHistorydetail = (workHistoryID) => {
        window.location.href = "/admin/student/work/detail/" + workHistoryID;
    }

    return (
        <>
            <input
                className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                placeholder="ค้นหาประวัติการทำงาน...(แผนก)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
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
                {renderTable()}
            </table>
            </div>
            <div className="flex justify-center mt-4">
                <ul className="flex">
                    {renderPageNumbers()}
                </ul>
            </div>
        </>
    );
}

export default WorkHistorytable