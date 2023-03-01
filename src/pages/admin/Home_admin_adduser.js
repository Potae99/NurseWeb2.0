import React from 'react'
import Savebutton from '../../components/Button/Savebutton';
import Backbutton
 from '../../components/Button/Backbutton';

function Home_admin_adduser() {
    const inputform_data = [
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'EName',
            Head: 'ชื่อ-สกุล(ภาษาอังกฤษ)',
            type: 'EName',
            id: 'EName',
            placeholder: 'ชื่อจริง-นามสกุล(ภาษาอังกฤษ)'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },
        {
            for: 'TName',
            Head: 'ชื่อ-สกุล',
            type: 'TName',
            id: 'TName',
            placeholder: 'ชื่อจริง-นามสกุล'
        },

    ];
    return (
        <div className= ' bg-gray-200 slate-500 min-h-screen border'>
            <h1 className=' text-4xl text-center m-3'>เพิ่มผู้ใช้งาน</h1>
            <div className='container mx-auto'>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                {inputform_data.map((inputform_data, index) => (
                    <div >
                    <p>{inputform_data.Head}</p>
                        <div class="mb-5 flex justify-center ">
                            <input
                                type={inputform_data.type}
                                name={inputform_data.name}
                                id={inputform_data.id}
                                placeholder={inputform_data.placeholder}
                                class="w-full rounded-md border border-while (condition) {
                            } bg-white py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-[#423bce] focus:shadow-md"
                            />
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className='  grid grid-cols-2 '>
            <div className=' ml-3'>
                <Backbutton></Backbutton>
            </div>
            <div className=' absolute right-0 mr-3'>
                <Savebutton></Savebutton>
            </div>
            </div>
        </div>

    )
}

export default Home_admin_adduser
