import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ViewIcon from '../IconTable/ViewIcon';

import Swal from 'sweetalert2';

function Professertable() {
  const [teacherlist, setteacherlist] = useState([]);



  console.log(process.env.REACT_APP_API_URL + "/teacher");

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
  


  const deleteTeacher = (userID) => {
    axios.delete(process.env.REACT_APP_API_URL+
      `/teacher`, {data:{ userID: userID }}).then((response) => {
      setteacherlist(
        teacherlist.filter((_) => {
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
    console.log("WTF");





    axios.get(process.env.REACT_APP_API_URL + "/teacher/list")
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setteacherlist(res.data.data);

      });
  }


  useEffect(() => {
    fetchData();
  }, [])


  return (
    <table className=" w-full text-sm text-left text-black">
      <thead className="text-xs text-black uppercase bg-gray-300">
        <tr  >
          <th scope="col" className="py-3 px-6" >ลำดับ</th>
          <th scope="col" className="py-3 px-6">รหัสประจำตัว</th>
          <th scope="col" className="py-3 px-6">ชื่อไทย</th>
          <th scope="col" className="py-3 px-6">การกระทำ</th>
        </tr>
      </thead>
      {teacherlist.map((_, i) => (
        <tbody>
          <tr className="   hover:bg-gray-200 bg-white border-b"
          >
            <td className="py-4 px-6" >{_.userID}</td>
            <td className="py-4 px-6">{_.IDnumber}</td>
            <td className="py-4 px-6">{_.nameTH}</td>
            <td className="py-4 px-6 flex flex-row">
              <div className=''
                content="Delete professor"
                color="error"
                onClick={() => { deleteTeacher(_.userID) }}>
                <svg width="20" height="20" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" stroke-width="6.54545" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.4258 38.0104V23.4346" stroke="black" stroke-width="6.54545" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M28.2407 38.0104V23.4346" stroke="black" stroke-width="6.54545" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" stroke-width="6.54545" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className=' ml-3'
                content="View professor"
                color="error"
                onClick={() => console.log("View professor", _.userID)}>
                <ViewIcon></ViewIcon>
              </div>
            </td>
          </tr>
        </tbody>

      ))}


    </table>



  )
}

export default Professertable