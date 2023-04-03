import React from 'react'
import Admin_sum_student from '../../components/Table/Admin_sum_student'
import Admin_sum_province from '../../components/Table/Admin_sum_province'
import Admin_sum_scolar from '../../components/Table/Admin_sum_scolar'
import { useState } from 'react'
import { useEffect } from 'react'
import LoadingPage from "../LoadingPage"

function Adminoverall() {
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);

      setTimeout(() => {
        setCompleted(true);
      }, 1000);
    }, 2000);
  })

  return (
    <>
      {!completed ? (
        <LoadingPage></LoadingPage>
      ) :
        (
          <div>
            <div className=' text-center text-4xl'>
              <p>ภาพรวมนิสิต</p>
            </div>
            <div className='mt-5'>
              <Admin_sum_student />
            </div>
            <div className='mt-3'>
              <Admin_sum_province />
            </div>
            <div className='mt-3'>
              <Admin_sum_scolar />
            </div>
          </div>
        )}

    </>
  )
}

export default Adminoverall