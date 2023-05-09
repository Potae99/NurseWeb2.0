
import axios from 'axios'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import LoadingPage from '../../LoadingPage';


function StudentallEval() {


  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const [searchTerm, setSearchTerm] = useState("");

  const [taugh, setTaugh] = useState([]);
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage2 = 5;
  const totalPages2 = taugh ? Math.ceil(taugh.length / itemsPerPage) : 0;
  const [searchTerm2, setSearchTerm2] = useState("");



  const [completed, setCompleted] = useState(undefined);

  const { userID } = useParams();





  const Gotaclasseval = (studyID) => {
    window.location.href = "/student/eval/course/" + studyID;
  }
  // {taugh.taughtType == "ภาคทฤษฎี" ?
  //   const GotaTaugheval = (evalTaughID) => {
  //     window.location.href = "/student/eval/practice/" + evalTaughID;
  //   }


  // }
  function GotaTaugheval(taughtType, evalTaughID) {
    if (taughtType === "Theory") {
      window.location.href = "/student/eval/theory/" + evalTaughID;
    } else if (taughtType === "Practice") {
      window.location.href = "/student/eval/practice/" + evalTaughID;
    }
  }



  // {taugh.taughtType == "ภาคปฎิบัติ" ?
  //   const GotaTaugheval = (evalTaughID) => {
  //     window.location.href = "/student/eval/theory/" + evalTaughID;
  //   }
  // }


  useEffect(() => {

    const fetchData = () => {
      axios.get(process.env.REACT_APP_API_URL + "/eval/class/info", { params: { userID: token.userID } })
        .then(res => {
          // console.log(res.data);

          if (res.data.error === true) {
            // console.log(res.data)
            // console.log("ERROR FOUND WHEN GET DATA FROM API");
            return;
          }
          setData(res.data.data);
          setTimeout(() => {
            setCompleted(true);
          }, 1000);

        }).catch(error => {
          // console.log(error.res);
        });

      axios.get(process.env.REACT_APP_API_URL + "/eval/taugh/info", { params: { userID: token.userID } })
        .then(res => {
          // console.log(res.data);

          if (res.data.error === true) {
            // console.log(res.data)
            // console.log("ERROR FOUND WHEN GET DATA FROM API");
            return;
          }
          setTaugh(res.data.data);

        }).catch(error => {
          // console.log(error.res);
        });
    }

    fetchData();

  }, [searchTerm, searchTerm2]);

  const handleClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const handleClick2 = (e, page) => {
    e.preventDefault();
    setCurrentPage2(page);
  };

  const renderTable = () => {
    if (!data) {
      return null;
    }
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filterData.slice(start, end).map((_, index) => (
      <tbody key={start + index}>
        <tr className="hover:bg-gray-200 bg-white border-b">
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
            {
              _.isEval === 0 ?
                <>
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
                </> : <></>
            }
          </td>
        </tr>
      </tbody>
    ));
  };

  const renderTable2 = () => {
    if (!taugh) {
      return null;
    }
    const start = (currentPage2 - 1) * itemsPerPage2;
    const end = start + itemsPerPage2;
    return filterTaugh.slice(start, end).map((_, index) => (
      <tbody key={start + index}>
        <tr className="hover:bg-gray-200 bg-white border-b">
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
            {
              _.isEval === 0 ?
                <>
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
                </> : <></>
            }
          </td>
        </tr>
      </tbody>
    ));
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    handleClick(e, currentPage - 1);
  };

  const handlePrevClick2 = (e) => {
    e.preventDefault();
    handleClick2(e, currentPage2 - 1);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    handleClick(e, currentPage + 1);
  };

  const handleNextClick2 = (e) => {
    e.preventDefault();
    handleClick2(e, currentPage2 + 1);
  };

  const renderPageNumbers = () => {
    if (!data) {
      return null;
    }
    const pageNumbers = [];
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    const maxPageRange = 3;
    const startPageRange = Math.max(1, currentPage - maxPageRange);
    const endPageRange = Math.min(totalPages, currentPage + maxPageRange);

    pageNumbers.push(
      <li
        href="#!"
        onClick={(e) => handleClick(e, 1)}
        key={"first"}
        className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
      >
        <a href="#!" onClick={(e) => handleClick(e, 1)}>
          หน้าแรก
        </a>
      </li>
    );

    if (currentPage > 1) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={handlePrevClick}
          key={"prev"}
          className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={handlePrevClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
          </a>
        </li>
      );
    }

    for (let i = startPageRange; i <= endPageRange; i++) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={(e) => handleClick(e, i)}
          key={i}
          className={`${currentPage === i ? "bg-orange-500 text-white" : "bg-white text-black"
            } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={(e) => handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }

    if (currentPage < totalPages) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={handleNextClick}
          key={"next"}
          className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
            </svg>
          </a>
        </li>
      );
    }

    pageNumbers.push(
      <li
        href="#!"
        onClick={(e) => handleClick(e, totalPages)}
        key={"last"}
        className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
      >
        <a href="#!" onClick={(e) => handleClick(e, totalPages)}>
          หน้าสุดท้าย
        </a>
      </li>
    );

    return pageNumbers;
  };

  const renderPageNumbers2 = () => {
    if (!taugh) {
      return null;
    }
    const pageNumbers = [];
    const nextPage = currentPage2 + 1;
    const prevPage = currentPage2 - 1;
    const maxPageRange = 3;
    const startPageRange = Math.max(1, currentPage2 - maxPageRange);
    const endPageRange = Math.min(totalPages2, currentPage2 + maxPageRange);

    pageNumbers.push(
      <li
        href="#!"
        onClick={(e) => handleClick2(e, 1)}
        key={"first"}
        className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
      >
        <a href="#!" onClick={(e) => handleClick2(e, 1)}>
          หน้าแรก
        </a>
      </li>
    );

    if (currentPage2 > 1) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={handlePrevClick2}
          key={"prev"}
          className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={handlePrevClick2}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
          </a>
        </li>
      );
    }

    for (let i = startPageRange; i <= endPageRange; i++) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={(e) => handleClick2(e, i)}
          key={i}
          className={`${currentPage2 === i ? "bg-orange-500 text-white" : "bg-white text-black"
            } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={(e) => handleClick2(e, i)}>
            {i}
          </a>
        </li>
      );
    }

    if (currentPage2 < totalPages2) {
      pageNumbers.push(
        <li
          href="#!"
          onClick={handleNextClick2}
          key={"next"}
          className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
        >
          <a href="#!" onClick={handleNextClick2}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
            </svg>
          </a>
        </li>
      );
    }

    pageNumbers.push(
      <li
        href="#!"
        onClick={(e) => handleClick2(e, totalPages2)}
        key={"last"}
        className={`bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
      >
        <a href="#!" onClick={(e) => handleClick2(e, totalPages2)}>
          หน้าสุดท้าย
        </a>
      </li>
    );

    return pageNumbers;
  };

  const filterData = data.filter((item) =>
    item.courseID_number.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterTaugh = taugh.filter((item) =>
    item.nameTH.toString().toLowerCase().includes(searchTerm2.toLowerCase())
  );

  // console.log(token.userID)
  return (
    <>
      {!completed ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className=' text-black'>
          <p className=' text-center text-4xl'>การประเมิน</p>
          <p className=' mt-3'>ประเมินรายวิชา</p>
          <input
            className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
            placeholder="ค้นหารหัสวิชา...(รหัสวิชา)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
              {renderTable()}
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <ul className="flex">
              {renderPageNumbers()}
            </ul>
          </div>

          <p className=' mt-3'>ประเมินอาจารย์ผู้สอน</p>
          <input
            className=" mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
            placeholder="ค้นหาอาจารย์"
            value={searchTerm2}
            onChange={(e) => setSearchTerm2(e.target.value)}
          />
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
              {renderTable2()}
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <ul className="flex">
              {renderPageNumbers2()}
            </ul>
          </div>
        </div>
      )}

    </>
  )
}
export default StudentallEval