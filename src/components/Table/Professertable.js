import React from 'react'
import DeleteIcon from '../IconTable/DeleteIcon';
import ViewIcon from '../IconTable/ViewIcon';


function Professertable() {

  const professor = [
    {
      ลำดับ: 1,
      professor_id: 'xxxx555',
      thainame: 'xxxxxxxx',

    },
    {
      ลำดับ: 2,
      professor_id: 'xxx666',
      thainame: 'xxxxxxxx',
    },
    {
      ลำดับ: 3,
      professor_id: 'xxxx7777',
      thainame: 'xxxxxxxx',
    },
  ];

  return (
    <table className=" w-full text-sm text-left text-black">
      <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr  >
          <th scope="col" className="py-3 px-6" >ลำดับ</th>
          <th scope="col" className="py-3 px-6">รหัสประจำตัว</th>
          <th scope="col" className="py-3 px-6">ชื่อไทย</th>
          <th scope="col" className="py-3 px-6">การกระทำ</th>
        </tr>
      </thead>
      {professor.map((professor, index) => (
        <tbody>
          <tr data-index={index} className="  hover:bg-gray-500 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="py-4 px-6" >{professor.ลำดับ}</td>
            <td className="py-4 px-6">{professor.professor_id}</td>
            <td className="py-4 px-6">{professor.thainame}</td>
            <td className="py-4 px-6 flex flex-row">
            <div className=''
                            content="Delete professor"
                            color="error"
                            onClick={() => console.log("Delete professor", professor.professor_id)}>
              <DeleteIcon></DeleteIcon>
            </div>
            <div className=' ml-3'
                                        content="View professor"
                                        color="error"
                                        onClick={() => console.log("View professor", professor.professor_id)}>
              <ViewIcon></ViewIcon>
            </div>
            </td>
          </tr>
        </tbody>

      ))}


    </table>


  )
}

export default Professertable