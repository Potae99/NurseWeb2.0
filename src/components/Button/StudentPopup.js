import React from 'react'
import { useState } from "react";

export default function StudentPopup() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="flex  items-center justify-center">
                <button
                    className="px-6 py-3 text-black bg-orange-300 rounded-full"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    เพิ่มนิสิต
                </button>
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative  p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className=" text-center sm:ml-4   sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            รหัสนิสิต
                                        </h4>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="รหัสนิสิต"></input>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                บันทึก
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-300 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                ยกเลิก
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}