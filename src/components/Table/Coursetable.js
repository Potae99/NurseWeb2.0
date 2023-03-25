import React from 'react'

function Coursetable() {

  
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
    <table className=" w-full text-sm text-left  text-gray-500 dark:text-gray-400">
      <thead className="text-sm text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr  >
          <th scope="col" className="py-3 px-6" >ลำดับ</th>
          <th scope="col" className="py-3 px-6">ชื่อไทย</th>
          <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
          <th scope="col" className="py-3 px-6">หน่วยกิต</th>
          <th scope="col" className="py-3 px-6">เวลา</th>
          <th scope="col" className="py-3 px-6">การกระทำ</th>
        </tr>
      </thead>
      {/* {curriculum.map((curriculum, index) => (
        <tbody>
          <tr data-index={index} className=" hover:bg-green-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="py-4 px-6" >{curriculum.Year_built}</td>
            <td className="py-4 px-6">{curriculum.Curriculum_name}</td>
            <td className="py-4 px-6">{curriculum.Year_started}-{curriculum.End_year}</td>
            <td className="py-4 px-6"></td>
          </tr>
        </tbody>

      ))} */}


    </table>
    </div>
  )
}

export default Coursetable