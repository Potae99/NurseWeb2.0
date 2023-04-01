import React, { useEffect, useState } from 'react'
import Professertable from '../../components/Table/Professertable'
import Studenttable from '../../components/Table/Studenttable'
import Admintable from '../../components/Table/Admintable'
import DropDown from '../../components/Button/DropDown'
import LoadingPage from '../LoadingPage'


function AdminHome() {

  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);

      setTimeout(() => {
        setCompleted(true);
      }, 1000);
    }, 2000);
  }, []);

  return (

    <div>
      {!completed ? (
        <LoadingPage></LoadingPage>
      ) : (<div className=' min-h-screen'>
        <h1 className=' text-black text-4xl text-center mt-10'>จัดการผู้ใช้</h1>
        <div className='grid grid-cols-1  place-items-end mr-4 mt-4'>
          <DropDown></DropDown>
        </div>
        <p className=' mt-3 mb-1 ml-2 text-black'>อาจารย์</p>
        <Professertable />
        <p className=' mt-3 mb-1 ml-2 text-black'>นิสิต</p>
        <Studenttable />
        <p className=' mt-3 mb-1 ml-2 text-black'>ผู้ดูแลระบบ</p>
        <Admintable></Admintable>

      </div>)
      }

    </div>
  )

}

export default AdminHome
