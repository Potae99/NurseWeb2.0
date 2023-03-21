import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminStudentDetail from '../../pages/admin/AdminStudentDetail';
import Swal from 'sweetalert2';

function Studenttable() {

  const [studentlist, setStudentList] = useState([]);

  console.log(process.env.REACT_APP_API_URL + "/student/list");
  
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


  console.log(process.env.REACT_APP_API_URL + "/student");

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

  const deletestudent = (userID) => {
    axios.delete(process.env.REACT_APP_API_URL+
      `/student`, {data:{ userID: userID }}).then((response) => {
      setstudentlist(
        studentlist.filter((_) => {
          return _.userID !== userID;
        })
      );

      Toast.fire({
        icon: 'success',
        title: 'Delete data success'
      })

    }).catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }});

  }

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

  const GotoStudentDetail = (userID) => {
    window.location = '/admin/student/detail/' + userID;
  }
      const deleteStudent = (userID) => {
        axios.delete(
          process.env.REACT_APP_API_URL + "/student", {data:{ userID: userID }}).then((response) => {
          setstudentlist(
            studentlist.filter((_) => {
              return _.userID !== userID;
            })
          );
    
          Toast.fire({
            icon: 'success',
            title: 'Delete data success'
          })
    
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response);
          }});
      }

  const fetchData = () => {

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
        setStudentList(res.data.data);

      });


  }


  useEffect(() => {
    fetchData();
  }, [])

  const deleteStudent = (userID) => {
    axios.delete(process.env.REACT_APP_API_URL + "/student", {data:{userID: userID}})
    .then((response) => {
      setStudentList(
        studentlist.filter((_) => {
          return _.userID !== userID;
        })
      );

      Toast.fire({
        icon: 'success',
        title: 'Delete data success'
      })

    }).catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
    });
  }

  return (
    <div>
      <Routes>
        <Route path='/admin/student/detail/:userID' element={<AdminStudentDetail />} />
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
        {studentlist.map((_) => (
          <tbody>
            <tr className=" hover:bg-gray-200 bg-white border-b"
            >
              <td className="py-4 px-6" >{_.userID}</td>
              <td className="py-4 px-6">{_.studentID}</td>
              <td className="py-4 px-6">{_.nameTH}</td>
              <td className="py-4 px-6 flex flex-row">
                <div className=''
                  content="Delete student"
                  color="error"
                  onClick={() => { deleteStudent(_.userID) }}>
                  <button>
                    <svg width="20" height="20" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
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