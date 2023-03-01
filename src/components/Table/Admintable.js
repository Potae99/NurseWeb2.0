import React from 'react'

function Admintable() {
      const Admin = [
        {
          ลำดับ: 1,
          admin_id: 'xxxxxxxx',
          thainame: 'xxxxxxxx',
    
        },
        {
          ลำดับ: 2,
          admin_id: 'xxxxxxxx',
          thainame: 'xxxxxxxx',
        },
        {
          ลำดับ: 3,
          admin_id: 'xxxxxxxx',
          thainame: 'xxxxxxxx',
        }
      ]
  return (
    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr  >
        <th scope="col" className="py-3 px-6" >ลำดับ</th>
        <th scope="col" className="py-3 px-6">รหัสรายวิชา</th>
        <th scope="col" className="py-3 px-6">ชื่อไทย</th>
        <th scope="col" className="py-3 px-6">การกระทำ</th>
      </tr>
    </thead>
    {Admin.map((Admin, index) => (
      <tbody>
        <tr data-index={index} className=" hover:bg-green-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="py-4 px-6" >{Admin.ลำดับ}</td>
          <td className="py-4 px-6">{Admin.admin_id}</td>
          <td className="py-4 px-6">{Admin.thainame}</td>
          <td className="py-4 px-6">{Admin.การกระทำ}</td>
        </tr>
      </tbody>

    ))}


  </table>
    
  )
}

export default Admintable