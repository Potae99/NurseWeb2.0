import React from 'react'
import Professertable from '../../components/Table/Professertable'
import Studenttable from '../../components/Table/Studenttable'
import Admintable from '../../components/Table/Admintable'
import DeleteIcon from '../../components/IconTable/DeleteIcon'

function home_admin() {

  const GotoAdduser = () => {
    window.location.href = 'admin/user/add';
  }

  return (
    <div>
      <div className=' bg-gray-200 min-h-screen border'>
        <h1 className=' text-4xl text-center mt-10'>รายชื่อผู้ใช้งาน</h1>
        <div className='grid grid-cols-1  place-items-end mr-4 mt-4'>
          <button onClick={GotoAdduser} class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out  rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" stroke-width="3.18" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" stroke-width="3.18" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">เพิ่มผู้ใช้งาน</span>
          </button>
        </div>
        <p className=' mt-3 mb-1 ml-2'>อาจารย์</p>
        <Professertable />
        <p className=' mt-3 mb-1 ml-2'>นิสิต</p>
        <Studenttable />
        <p className=' mt-3 mb-1 ml-2'>ผู้ดูแลระบบ</p>
        <Admintable></Admintable>


      </div>
    </div>
  )



}

export default home_admin
