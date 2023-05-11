import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import LoadingPage from '../../../LoadingPage';
import Classtable from '../../../../components/Table/Classtable';

function ClassManagement() {
    const [completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setCompleted(true);
        }, 1000);
    }, [])

    const goToAddClass = () => {
        window.location.href = '/NA/admin/add/class';
    }
    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <>
                    <div className=' text-black min-h-screen'>
                        <h1 className=' text-center text-4xl'>จัดการคาบเรียน</h1>
                        <div className=' container mx-auto mt-7'>
                            <div className=' flex flex-row-reverse mb-7'>
                                <button onClick={goToAddClass}  className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                        <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">เพิ่มคาบเรียน</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                            <Classtable></Classtable>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ClassManagement