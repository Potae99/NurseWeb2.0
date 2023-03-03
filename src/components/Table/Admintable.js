import React from 'react'
import DeleteIcon from '../IconTable/DeleteIcon'
import ViewIcon from '../IconTable/ViewIcon'

function Admintable() {
  const Admin = [
    {
      ลำดับ: 1,
      admin_id: 'xx55xxx',
      thainame: 'xxxxxxxx',

    },
    {
      ลำดับ: 2,
      admin_id: 'x666xxxx',
      thainame: 'xxxxxxxx',
    },
    {
      ลำดับ: 3,
      admin_id: 'xx777xxx',
      thainame: 'xxxxxxxx',
    }
  ]
  return (
    <table className=" w-full text-sm text-left  text-black dark:text-gray-400">
      <thead className="text-xs text-black uppercase bg-blue-200 dark:bg-gray-700 dark:text-black">
        <tr  >
          <th scope="col" className="py-3 px-6" >ลำดับ</th>
          <th scope="col" className="py-3 px-6">รหัสประจำตัว</th>
          <th scope="col" className="py-3 px-6">ชื่อไทย</th>
          <th scope="col" className="py-3 px-6">การกระทำ</th>
        </tr>
      </thead>
      {Admin.map((Admin, index) => (
        <tbody>
          <tr data-index={index} className="  hover:bg-gray-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="py-4 px-6" >{Admin.ลำดับ}</td>
            <td className="py-4 px-6">{Admin.admin_id}</td>
            <td className="py-4 px-6">{Admin.thainame}</td>
            <td className="py-4 px-6 flex flex-row">
            <div className=''
                            content="Delete Admin"
                            color="error"
                            onClick={() => console.log("Delete Admin", Admin.admin_id)}>
              <DeleteIcon></DeleteIcon>
            </div>
            <div className=' ml-3'
                                        content="View Admin"
                                        color="error"
                                        onClick={() => console.log("View Admin", Admin.admin_id)}>
              <ViewIcon></ViewIcon>
            </div>
            </td>
          </tr>
        </tbody>

      ))}


    </table>
    

  )
}

export default Admintable