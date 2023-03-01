import React from 'react'

function Curriculumtable() {
  const curriculum = [
    {
      Year_built: 2022,
      Curriculum_name: 'หลักสูตรพยาบาล',
      Year_started: '01/12/2022',
      End_year:'31/01/2025'

    },
    {
      Year_built: 2022,
      Curriculum_name: 'หลักสูตรพยาบาล',
      Year_started: '01/12/2022',
      End_year:'31/01/2025'
    },
    {
      Year_built: 2022,
      Curriculum_name: 'หลักสูตรพยาบาล',
      Year_started: '01/12/2022',
      End_year:'31/01/2025'
    },
  ];
  return (
    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr  >
          <th scope="col" className="py-3 px-6" >ปีที่สร้าง</th>
          <th scope="col" className="py-3 px-6">ชื่อหลักสูตร</th>
          <th scope="col" className="py-3 px-6">ระยะเวลา</th>
          <th scope="col" className="py-3 px-6">การกระทำ</th>
        </tr>
      </thead>
      {curriculum.map((curriculum, index) => (
        <tbody>
          <tr data-index={index} className=" hover:bg-green-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="py-4 px-6" >{curriculum.Year_built}</td>
            <td className="py-4 px-6">{curriculum.Curriculum_name}</td>
            <td className="py-4 px-6">{curriculum.Year_started}-{curriculum.End_year}</td>
            <td className="py-4 px-6"></td>
          </tr>
        </tbody>

      ))}


    </table>
  )
}

export default Curriculumtable