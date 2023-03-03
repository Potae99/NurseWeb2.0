import React from 'react'
import Addbutton from '../../components/Button/Addbutton'
import Professertable from '../../components/Table/Professertable'
import Studenttable from '../../components/Table/Studenttable'
import Admintable from '../../components/Table/Admintable'
import DeleteIcon from '../../components/IconTable/DeleteIcon'

function home_admin() {

  return (
    <div className=' bg-gray-200 min-h-screen border'>
      <h1 className=' text-4xl text-center m-3'>Admin Home</h1>
      <div className='grid grid-cols-1  place-items-end mr-4 mt-4'>
        <Addbutton ></Addbutton>
      </div>
      <p className=' mt-3 mb-1 ml-2'>อาจารย์</p>
      <Professertable/>
      <p className=' mt-3 mb-1 ml-2'>นิสิต</p>
      <Studenttable/>
      <p className=' mt-3 mb-1 ml-2'>ผู้ดูแลระบบ</p>
      <Admintable></Admintable>
      

    </div>
  )



}

export default home_admin
