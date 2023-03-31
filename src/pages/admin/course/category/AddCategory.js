import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Swal from 'sweetalert2';


function AddCategory() {
  const [categoryName, setcategoryName] = useState("");
  const [data, setData] = useState([]);

  const [category, setCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const addcategory = () => {

    axios.post(process.env.REACT_APP_API_URL + "/course/category", {
      categoryName: categoryName

    }).then(() => {
      setData([
        ...data,
        {
          categoryName: categoryName
        }
      ])
      Toast.fire({
        icon: 'success',
        title: 'Add category success'
      })
        .then(() => { window.location.href = "/course/category/add"; })

    })
  }

  const fetchData = () => {
    axios.get(process.env.REACT_APP_API_URL + "/course/category")
      .then(res => {
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data);
          console.log("ERROR FOUND WHEN GET DATA FROM API");
          return;
        }
        setCategory(res.data.data);
      })
      .catch(error => {
        console.log(error.res)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const backToCourseAll = () => {
    window.location.href = "/admin/course/all";
  }

  const deleteCategory = (categoryID) => {
    Swal.fire({
      title: 'ต้องการลบหลักสูตรหรือไม่?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'ใช่',
      denyButtonText: `ไม่ใช่`,
      cancelButtonText: 'ยกเลิก'
    })
    .then((results) => {
      if (results.isConfirmed){
        axios.delete(process.env.REACT_APP_API_URL + "/course/category", { data: { categoryID: categoryID } })
        .then(res => {
          setCategoryList(
            categoryList.filter((_) => {
              return _.categoryID !== categoryID;
            })
          )
          Swal.fire('Deleted!', '', 'success')
          .then(() => {window.location.href = "/course/category/add"})
  
        })
        .catch(error => {
          console.log(error.res);
        })
      }
      else if (results.isDenied){
        window.location.href = "/course/category/add";
      }
    })
    
  }


  return (
    <div className=' text-black bg-white min-h-screen'>
      <h1 className=' text-center text-4xl'>เพิ่มหมวดวิชา</h1>
      <div className='container mx-auto'>
        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
          <div >
            <p>ชื่อหมวดวิชา</p>
            <div className="mb-1 flex justify-center ">
              <input
                onChange={(event) => {
                  setcategoryName(event.target.value)
                }}
                type="text"
                name="categoryName"
                placeholder="ชื่อหมวดวิชา"
                className=" border-black w-full rounded-md border border-while  bg-gray-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div className=' flex flex-row-reverse mr-3 mb-5'>
          <button onClick={addcategory} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-balck transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
              <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มหมวดวิชา</span>
            <span className="relative invisible">Button Text</span>
          </button>
        </div>
      </div>
      
      <div className=" grid grid-cols-1 place-items-center">
        <div className=" text-black block bg-gray-200 w-2/3 p-auto rounded-2xl">
          <div className=' relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className=" w-full text-sm text-left text-black">
              <thead className="text-sm text-black uppercase  bg-orange-300">
                <tr  >
                  <th scope="col" className="py-3 px-6" >ลำดับ</th>
                  <th scope="col" className="py-3 px-6">ชื่อหมวดวิชา</th>
                  <th scope="col" className="py-3 px-6">การกระทำ</th>
                </tr>
              </thead>
              {category.map((_, index) => (
                <tbody key={index}>
                  <tr className="  hover:bg-gray-200 bg-white border-b"
                  >
                    <td className="py-4 px-6" >{index + 1}</td>
                    <td className="py-4 px-6">{_.categoryName}</td>
                    <td className='py-4 px-6 flex flex-row'>
                      <div className=''
                        content="Delete professor"
                        color="error"
                      >
                        <button onClick={() => deleteCategory(_.categoryID)}>
                          <svg width="20" height="20" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
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
      </div>
      <div className=' mt-7 grid grid-cols-2 '>
        <div className=' ml-3'>
          <button onClick={() => backToCourseAll()} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-balck transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
            <span className="relative invisible">Button Text</span>
          </button>

        </div>
        
      </div>
    </div>
  )
}

export default AddCategory