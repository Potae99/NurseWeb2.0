import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import ViewIcon from '../IconTable/ViewIcon';

function Allcoursetable() {
  const [data, setData] = useState([]);


  console.log(process.env.REACT_APP_API_URL + "/course");


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



    axios.get(process.env.REACT_APP_API_URL + "/course")
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
    <table className=" w-full text-sm text-left text-black">
      <thead className="text-xs text-black uppercase bg-gray-300">
        <tr  >
          <th scope="col" className="py-3 px-6" >รหัสวิชา</th>
          <th scope="col" className="py-3 px-6">ชื่อไทย</th>
          <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
          <th scope="col" className="py-3 px-6">หน่วยกิต</th>
          <th scope="col" className="py-3 px-6">การกระทำ</th>
        </tr>
      </thead>
      {data.map((_,i) => (
        <tbody>
          <tr className="  hover:bg-gray-200 bg-white border-b"
          >
            <td className="py-4 px-6" >{_.courseID}</td>
            <td className="py-4 px-6">{_.courseNameTH}</td>
            <td className="py-4 px-6">{_.courseNameENG}</td>
            <td className="py-4 px-6">{_.creditStudy}</td>
            <td className="py-4 px-6 flex flex-row">
            <div className=' ml-3'
                                        content="View Course"
                                        color="error"
                                        onClick={() => console.log("View Course", _.courseID)}>
              <ViewIcon></ViewIcon>
            </div>
            </td>
          </tr>
        </tbody>

      ))}


    </table>
    

  )
}

export default Allcoursetable