import React from 'react'
import DeleteIcon from '../IconTable/DeleteIcon';
import ViewIcon from '../IconTable/ViewIcon';

function Studenttable() {
      const student = [
        {
          ลำดับ: 1,
          student_id: 'xx555xxx',
          thainame: 'xxxxxxxx',
    
        },
        {
          ลำดับ: 2,
          student_id: 'xxxx666x',
          thainame: 'xxxxxxxx',
        },
        {
          ลำดับ: 3,
          student_id: 'xx77xxx',
          thainame: 'xxxxxxxx',
        }
      ];
  return (
    <table className=" w-full text-sm text-left text-black ">
    <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr  >
        <th scope="col" className="py-3 px-6" >ลำดับ</th>
        <th scope="col" className="py-3 px-6">รหัสประจำตัว</th>
        <th scope="col" className="py-3 px-6">ชื่อไทย</th>
        <th scope="col" className="py-3 px-6">การกระทำ</th>
      </tr>
    </thead>
    {student.map((student, index) => (
      <tbody>
        <tr data-index={index} className=" hover:bg-gray-500 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="py-4 px-6" >{student.ลำดับ}</td>
          <td className="py-4 px-6">{student.student_id}</td>
          <td className="py-4 px-6">{student.thainame}</td>
          <td className="py-4 px-6 flex flex-row">
            <div className=''
                            content="Delete student"
                            color="error"
                            onClick={() => console.log("Delete student", student.student_id)}>
              <DeleteIcon></DeleteIcon>
            </div>
            <div className=' ml-3'
                                        content="View student"
                                        color="error"
                                        onClick={() => console.log("View student", student.student_id)}>
              <ViewIcon></ViewIcon>
            </div>
          </td>
        </tr>
      </tbody>

    ))}


  </table>
    
  )
}

export default Studenttable