import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

function Admin_sum_student() {

  const [adminlist, setAdminList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = adminlist ? Math.ceil(adminlist.length / itemsPerPage) : 0;
  const [searchTerm, setSearchTerm] = useState("");

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


  useEffect(() => {
    const fetchData = () => {

      axios.get(process.env.REACT_APP_API_URL + "/summary/student/year/count")
        .then(res => {
          // const persons = res.data;
          //this.setState({ persons });
          console.log(res.data);

          if (res.data.error === true) {
            console.log(res.data)
            console.log("ERROR FOUND WHEN GET DATA FROM API ");


            return;
          }
          setAdminList(res.data.data);

        });
    }
    fetchData();
  }, [searchTerm])

  const handleClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const renderTable = () => {
    if (!adminlist) {
      return null;
    }
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filterAdmin.slice(start, end).map((_, index) => (
      <tbody key={start + index}>
        <tr className="hover:bg-gray-200 bg-white border-b">
          <td className="py-4 px-6" >{index + 1}</td>
          <td className="py-4 px-6">{_.yearStartEnroll}</td>
          <td className="py-4 px-6">{_.count}</td>
        </tr>
      </tbody>
    ));
  };

  const renderPageNumbers = () => {
    if (!adminlist) {
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

  const filterAdmin = adminlist.filter((item) =>
  item.yearStartEnroll.toString().toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <input
        className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
        placeholder="ค้นหาจังหวัด..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className=" w-full text-sm text-left text-black">
        <thead className="text-sm text-black uppercase bg-orange-300">
          <tr  >
            <th scope="col" className="py-3 px-6" >ลำดับ</th>
            <th scope="col" className="py-3 px-6">ปีการศึกษา</th>
            <th scope="col" className="py-3 px-6">จำนวนนิสิต</th>
          </tr>
        </thead>
        {renderTable()}
      </table>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {renderPageNumbers()}
        </ul>
      </div>
    </>
  )
}

export default Admin_sum_student