import React from 'react'

function Professertable() {

  const professor = [
    {
      ลำดับ: 1,
      professor_id: 'xxxxxxxx',
      thainame: 'xxxxxxxx',

    },
    {
      ลำดับ: 2,
      professor_id: 'xxxxxxxx',
      thainame: 'xxxxxxxx',
    },
    {
      ลำดับ: 3,
      professor_id: 'xxxxxxxx',
      thainame: 'xxxxxxxx',
    },
  ];

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
      {professor.map((professor, index) => (
        <tbody>
          <tr data-index={index} className=" hover:bg-green-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="py-4 px-6" >{professor.ลำดับ}</td>
            <td className="py-4 px-6">{professor.professor_id}</td>
            <td className="py-4 px-6">{professor.thainame}</td>
            <td className="py-4 px-6">{professor.การกระทำ}</td>
          </tr>
        </tbody>

      ))}


    </table>


  )
}

export default Professertable