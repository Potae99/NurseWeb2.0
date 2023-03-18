import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DeleteIcon from '../IconTable/DeleteIcon';
import { Route, Routes } from 'react-router-dom';
import Home_admin_studentDetail from '../../pages/admin/Home_admin_studentDetail';
 
function Studenttable() {
  const [data, setData] = useState([]);

  console.log(process.env.REACT_APP_API_URL + "/student/list");

  const GotoStudentDetail = (userID) => {
    window.location = '/admin/student/detail/' + userID;
  }


  const fetchData = () => {
    console.log("WTF");

    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    //   })

    //   Toast.fire({
    //     icon: 'error',
    //     title: 'get data from API error!'
    //   })



    axios.get(process.env.REACT_APP_API_URL + "/student/list")
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

      });
  }


  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div>
      <Routes>
        <Route path='/admin/student/detail/:userID' element={<Home_admin_studentDetail />} />
      </Routes>
      <table className=" w-full text-sm text-left text-black ">
        <thead className="text-xs text-black uppercase bg-gray-300">
          <tr  >
            <th scope="col" className="py-3 px-6" >ลำดับ</th>
            <th scope="col" className="py-3 px-6">รหัสประจำตัว</th>
            <th scope="col" className="py-3 px-6">ชื่อไทย</th>
            <th scope="col" className="py-3 px-6">การกระทำ</th>
          </tr>
        </thead>
        {data.map((_, i) => (
          <tbody>
            <tr className=" hover:bg-gray-200 bg-white border-b"
            >
              <td className="py-4 px-6" >{_.userID}</td>
              <td className="py-4 px-6">{_.IDnumber}</td>
              <td className="py-4 px-6">{_.nameTH}</td>
              <td className="py-4 px-6 flex flex-row">
                <div className=''
                  content="Delete student"
                  color="error"
                  onClick={() => console.log("Delete student", _.userID)}>
                  <DeleteIcon></DeleteIcon>
                </div>
                <div className=' ml-3'
                  content="View student"
                  color="error"
                  onClick={() => console.log("View student", _.userID)}>
                  <button onClick={() => GotoStudentDetail(_.userID)}>
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

  )
}

export default Studenttable