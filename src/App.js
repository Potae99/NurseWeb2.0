import React from 'react'
import StudentPopup from './components/Button/StudentPopup'

function App() {
  return (
    <div>
      <StudentPopup></StudentPopup>
    </div>
    
    // import React from 'react';
// import Savebutton from '../../components/Button/Savebutton';
// import Backbutton from '../../components/Button/Backbutton';

//  function Home_admin_adduser() {
//     const Role = [
//         {
//             role: 'นิสิต',
//             value: 'นิสิต'
//         },
//         {
//             role: 'ผู้ดูแลระบบ',
//             value: 'ผู้ดูแลระบบ'
//         },
//         {
//             role: 'อาจารย์',
//             value: 'อาจารย์'
//         }
//     ]
//     const inputform_data = [
//         {
//             Head: 'วันเกิด',
//             placeholder: '',
//             type: "date",
//             name: "Birthday"

//         },
//         {

//             Head: 'line ID',
//             placeholder: 'ไอดีไลน์',
//             type: "text",
//             name: "IDline"
//         },
//         {

//             Head: 'รหัสบัตรประชาชน',
//             placeholder: 'รหัสบัตรประชาชน',
//             type: "text",
//             name: "IDnumber"
//         },
//         {

//             Head: 'อีเมล',
//             placeholder: 'ที่อยู่อีเมล',
//             type: "text",
//             name: "email"
//         },
//         {

//             Head: 'สัญชาติ',
//             placeholder: 'สัญชาติ',
//             type: "text",
//             name: "ethnicity"
//         },
//         {

//             Head: 'เพศสภาพ',
//             placeholder: 'เพศสภาพ',
//             type: "text",
//             name: "gender"
//         },
//         {

//             Head: 'ตรอก',
//             placeholder: 'ตรอก',
//             type: "text",
//             name: "houseadd_alley"
//         },
//         {

//             Head: 'ตำบล',
//             placeholder: 'ตำบล',
//             type: "text",
//             name: "houseadd_district"
//         },
//         {

//             Head: 'รหัสไปรษณีย์',
//             placeholder: 'รหัสไปรษณีย์',
//             type: "text",
//             name: "houseadd_postalCode"

//         },
//         {

//             Head: 'จังหวัด',
//             placeholder: 'จังหวัด',
//             type: "text",
//             name: "houseadd_province"

//         },
//         {

//             Head: 'ถนน',
//             placeholder: 'ถนน',
//             type: "text",
//             name: "houseadd_road"

//         },
//         {

//             Head: 'ตำบล',
//             placeholder: 'ตำบล',
//             type: "text",
//             name: "houseadd_subDistrict"

//         },
//         {

//             Head: 'หมู่บ้าน',
//             placeholder: 'หมู่บ้าน',
//             type: "text",
//             name: "houseadd_village"

//         },
//         {

//             Head: 'ชื่อ-สกุล(ภาษาอังกฤษ)',
//             placeholder: 'ชื่อ-สกุล(ภาษาอังกฤษ)',
//             type: "text",
//             name: "nameENG"

//         },
//         {

//             Head: 'ชื่อ-สกุล(ภาษาไทย)',
//             placeholder: 'ชื่อ-สกุล(ภาษาไทย)',
//             type: "text",
//             name: "nameTH"

//         },
//         {

//             Head: 'เชื้อชาติ',
//             placeholder: 'เชื้อชาติ',
//             type: "text",
//             name: "nationality"

//         },
//         {

//             Head: 'มือถือ',
//             placeholder: 'มือถือ',
//             type: "text",
//             name: "phone"

//         },
//         {

//             Head: 'ที่อยู่ปัจจุบัน',
//             placeholder: 'ที่อยู่ปัจจุบัน',
//             type: "text",
//             name: "presentAddress"

//         },
//         {

//             Head: 'ศาสนา',
//             placeholder: 'ศาสนา',
//             type: "text",
//             name: "religion"

//         },



//     ];
//     return (
//         <div className=' bg-gray-200 slate-500 min-h-screen border'>
//             <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
//             <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6'>
//                 <div className=' flex flex-row'>
//                     <p className=' text-2xl ml-3' >ผู้ใช้งาน</p>
//                     <select className='block ml-3  w-1/4 p-2 mb-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' name="course_id" id="course_id">
//                         {Role.map((Role, index) => (
//                             <option value={Role.value}>{Role.role}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className='container mx-auto'>
//                 <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
//                     {inputform_data.map((inputform_data, index) => (
//                         <div >
//                             <p>{inputform_data.Head}</p>
//                             <div class="mb-5 flex justify-center ">
//                                 <input
                                     
//                                     type={inputform_data.type}
//                                     name={inputform_data.name}
//                                     placeholder={inputform_data.placeholder}
//                                     class="w-full rounded-md border border-while (condition) {
//                             } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/* <div className='  grid grid-cols-2 '>
//                     <div className=' ml-3'>
//                         <Backbutton></Backbutton>
//                     </div>
//                     <div className=' absolute right-0 mr-3'>
//                         <Savebutton ></Savebutton>
//                     </div>
//                 </div> */}
//             </div>




//         </div>

//     )
// } 
// export default Home_admin_adduser;
  )
}

export default App