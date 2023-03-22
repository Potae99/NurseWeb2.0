import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import ViewIcon from '../IconTable/ViewIcon';

function Curriculumtable() {
  const [data, setData] = useState([]);
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



    axios.get(process.env.REACT_APP_API_URL + "/course/syllabuses")
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
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
    <table className=" w-full text-sm text-left text-black">
      <thead className="text-xs text-black uppercase bg-orange-400">
        <tr  >
          <th scope="col" className="py-3 px-6" >ปีที่สร้าง</th>
          <th scope="col" className="py-3 px-6">ชื่อ</th>
          <th scope="col" className="py-3 px-6">ระยะเวลา</th>
          <th scope="col" className="py-3 px-6">การกระทำ</th>
        </tr>
      </thead>
      {data.map((_,i) => (
        <tbody>
          <tr className="  hover:bg-gray-200 bg-white border-b"
          >
            <td className="py-4 px-6" >{_.syllabusDate}</td>
            <td className="py-4 px-6">{_.syllabusName}</td>
            <td className="py-4 px-6">{_.startUse}-{_.endUse}</td>
            <td className="py-4 px-6 flex flex-row">
            <div className=' ml-3'
                                        content="View Admin"
                                        color="error"
                                        onClick={() => console.log("View Admin", _.userID)}>
              <ViewIcon></ViewIcon>
            </div>
            </td>
          </tr>
        </tbody>

      ))}


    </table>
    </div>
    

  )
}

export default Curriculumtable