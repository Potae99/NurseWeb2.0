import React from 'react'
import Admin_sum_student from '../../components/Table/Admin_sum_student'
import Admin_sum_province from '../../components/Table/Admin_sum_province'
import Admin_sum_scolar from '../../components/Table/Admin_sum_scolar'

function Adminoverall() {
  return (
    <div>
        <div className=' text-center text-4xl'>
            <p>ภาพรวมนิสิต</p>
        </div>
        <div className='mt-5'>
        <Admin_sum_student/>
        </div>
        <div className='mt-3'>
        <Admin_sum_province/>
        </div>
        <div className='mt-3'>
            <Admin_sum_scolar/>
        </div>
    </div>
  )
}

export default Adminoverall