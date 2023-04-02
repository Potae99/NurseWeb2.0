
import axios from 'axios'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'


function StudentallEval() {


  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());
  const [data, setData] = useState([]);
  const [taugh, setTaugh] = useState([]);

  const { userID } = useParams();

  const fetchData = () => {
    axios.get(process.env.REACT_APP_API_URL + "/eval/class/info", { params: { userID: token.userID } })
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API");
          return;
        }
        setData(res.data.data);

      }).catch(error => {
        console.log(error.res);
      });

    axios.get(process.env.REACT_APP_API_URL + "/eval/taugh/info", { params: { userID: token.userID } })
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API");
          return;
        }
        setTaugh(res.data.data);

      }).catch(error => {
        console.log(error.res);
      });
  }

  const Gotaclasseval = (studyID) => {
    window.location.href = "/student/eval/course/" + studyID;
  }
  // {taugh.taughtType == "ภาคทฤษฎี" ?
  //   const GotaTaugheval = (evalTaughID) => {
  //     window.location.href = "/student/eval/practice/" + evalTaughID;
  //   }


  // }
  function GotaTaugheval(taughtType, evalTaughID) {
    if (taughtType === "ภาคทฤษฎี") {
      window.location.href = "/student/eval/theory/" + evalTaughID;
    } else if (taughtType === "ภาคปฏิบัติ") {
      window.location.href = "/student/eval/practice/" + evalTaughID;
    }
  }



  // {taugh.taughtType == "ภาคปฎิบัติ" ?
  //   const GotaTaugheval = (evalTaughID) => {
  //     window.location.href = "/student/eval/theory/" + evalTaughID;
  //   }
  // }


  useEffect(() => {
    fetchData();
  }, []);
  console.log(token.userID)
  return (
    <div>
      <p className=' text-center text-4xl'>การประเมิน</p>
      <p className=' mt-3'>ประเมินรายวิชา</p>
      <div className=' relative mt-3 overflow-x-auto shadow-md sm:rounded-lg'>
        <table className=" w-full text-sm text-left text-black">
          <thead className="text-sm text-black uppercase bg-orange-300">
            <tr  >
              <th scope="col" className="py-3 px-6" >ลำดับ</th>
              <th scope="col" className="py-3 px-6">รหัสวิชา</th>
              <th scope="col" className="py-3 px-6">ชื่อไทย</th>
              <th scope="col" className="py-3 px-6">สถานะ</th>
              <th scope="col" className="py-3 px-6">การกระทำ</th>
            </tr>
          </thead>
          {data.map((_, index) => (
            <tbody key={index}>
              <tr className="  hover:bg-gray-200 bg-white"
              >
                <td className="py-4 px-6" >{index + 1}</td>
                <td className="py-4 px-6">{_.courseID_number}</td>
                <td className="py-4 px-6">{_.courseNameTH}</td>
                <td className="py-4 px-6">
                  {
                    _.isEval === 1 ?
                      <>
                        <div >
                          <b className=' text-green-500  '>evaluated</b>
                        </div>
                      </> : <></>
                  }
                  {
                    _.isEval === 0 ?
                      <>
                        <div >
                          <b className=' text-red-500 '>not evaluated</b>
                        </div>
                      </> : <></>
                  }
                </td>
                <td className="py-4 px-6 flex flex-row">
                  <div className=' ml-3'
                    content="View Admin"
                    color="error"
                    onClick={() => console.log("View Admin", _.studyID)}>
                    <button onClick={() => Gotaclasseval(_.studyID)}>
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

      <p className=' mt-3'>ประเมินอาจารย์ผู้สอน</p>
      <div className=' relative overflow-x-auto shadow-md mt-3 sm:rounded-lg'>
        <table className=" w-full text-sm text-left text-black">
          <thead className="text-sm text-black uppercase bg-orange-300">
            <tr  >
              <th scope="col" className="py-3 px-6" >ลำดับ</th>
              <th scope="col" className="py-3 px-6">ชื่ออาจารย์ผู้สอน</th>
              <th scope="col" className="py-3 px-6">ประเภทการสอน</th>
              <th scope="col" className="py-3 px-6">สถานะ</th>
              <th scope="col" className="py-3 px-6">การกระทำ</th>
            </tr>
          </thead>
          {taugh.map((_, index) => (
            <tbody key={index}>
              <tr className="  hover:bg-gray-200 bg-white"
              >
                <td className="py-4 px-6" >{index + 1}</td>
                <td className="py-4 px-6">{_.nameTH}</td>
                <td className="py-4 px-6">{_.taughtType}</td>
                <td className="py-4 px-6">
                  {
                    _.isEval == 1 ?
                      <>
                        <div >
                          <b className=' text-green-500  '>evaluated</b>
                        </div>
                      </> : <></>
                  }
                  {
                    _.isEval == 0 ?
                      <>
                        <div >
                          <b className=' text-red-500 '>not evaluated</b>
                        </div>
                      </> : <></>
                  }
                </td>
                <td className="py-4 px-6 flex flex-row">
                  <div className=' ml-3'
                    content="View Admin"
                    color="error"
                    onClick={() => GotaTaugheval(_.taughtType, _.evalTaughID)}>
                    <button>
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
    </div>
  )
}
export default StudentallEval