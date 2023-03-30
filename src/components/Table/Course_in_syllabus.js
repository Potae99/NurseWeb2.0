import React from 'react'

function Course_in_syllabus() {
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className=" w-full text-sm text-left text-black ">
                <thead className="text-sm text-black uppercase bg-orange-300">
                    <tr  >
                        <th scope="col" className="py-3 px-6" >รหัสวิชา</th>
                        <th scope="col" className="py-3 px-6">ชื่อไทย</th>
                        <th scope="col" className="py-3 px-6">ชื่ออังกฤษ</th>
                        <th scope="col" className="py-3 px-6">หน่วยกิต</th>
                        <th scope="col" className="py-3 px-6">เวลา</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" hover:bg-gray-200 bg-white border-b"
                    >
                        <td className="py-4 px-6" >{ }</td>
                        <td className="py-4 px-6">{ }</td>
                        <td className="py-4 px-6">{ }</td>
                        <td className="py-4 px-6">{ }</td>
                        <td className="py-4 px-6 flex flex-row">
                            <div className=''
                                content="Delete student"
                                color="error"
                                onClick={() => console.log("Delete student",)}>
                                55
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Course_in_syllabus