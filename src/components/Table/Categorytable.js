import { useState, useEffect } from "react";
import axios from "axios";

function Categorytable() {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = category ? Math.ceil(category.length / itemsPerPage) : 0;
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = () => {
            axios.get(process.env.REACT_APP_API_URL + "/course/category")
                .then(res => {
                    //   console.log(res.data);

                    if (res.data.error === true) {
                        // console.log(res.data);
                        console.log("ERROR FOUND WHEN GET DATA FROM API");
                        return;
                    }
                    setCategory(res.data.data);
                    setLoading(true);

                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);
                })
                .catch(error => {
                    console.log(error.res)
                })
        }

        fetchData();
    }, [searchTerm]);

    const handleClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderTable = () => {
        if (!category) {
            return null;
        }
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterCategory.slice(start, end).map((_, index) => (
            <tbody key={start + index}>
                <tr className="hover:bg-gray-200 bg-white border-b">
                    <td className="py-4 px-6">{start + index + 1}</td>
                    <td className="py-4 px-6">{_.categoryName}</td>
                </tr>
            </tbody>
        ));
    };

    const renderPageNumbers = () => {
        if (!category) {
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

    if (!loading) {
        return <p>Loading...</p>;
    }

    if (loading && completed && category.length === 0) {
        return <p>No categories found.</p>;
    }

    const filterCategory = category.filter((item) =>
        item.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // if (!filterCategory.length) {
    //     return (
    //         <tbody>
    //             <tr className="hover:bg-gray-200 bg-white border-b">
    //                 <td colSpan="2" className="py-4 px-6 text-center">
    //                     No categories found.
    //                 </td>
    //             </tr>
    //         </tbody>
    //     );
    // }

    return (
        <>
            <input
                className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                placeholder="ค้นหาหมวดวิชา..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className="w-full text-sm text-left text-black">
                    <thead className="text-sm text-black uppercase bg-orange-300">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ลำดับ
                            </th>
                            <th scope="col" className="py-3 px-6">
                                ชื่อหมวดวิชา
                            </th>
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

export default Categorytable