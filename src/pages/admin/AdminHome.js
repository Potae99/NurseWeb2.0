import React from 'react'
import Professertable from '../../components/Table/Professertable'
import Studenttable from '../../components/Table/Studenttable'
import Admintable from '../../components/Table/Admintable'
import DropDown from '../../components/Button/DropDown'

function AdminHome() {

  return (
    <div>
      <div className=' bg-gray-200 min-h-screen border'>
        <h1 className=' text-black text-4xl text-center mt-10'>รายชื่อผู้ใช้งาน</h1>
        <div className='grid grid-cols-1  place-items-end mr-4 mt-4'>
          <DropDown></DropDown>
        </div>
        <p className=' mt-3 mb-1 ml-2 text-black'>อาจารย์</p>
        <Professertable />
        <p className=' mt-3 mb-1 ml-2 text-black'>นิสิต</p>
        <Studenttable />
        <p className=' mt-3 mb-1 ml-2 text-black'>ผู้ดูแลระบบ</p>
        <Admintable></Admintable>


      </div>
    </div>
  )



}

export default AdminHome
