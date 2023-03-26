import React from 'react'
import axios from 'axios';

function Studenteval() {



    const Question = [
        {
            Q_id: 1,
            Q_text: "1.อาจารย์ได้แจ้งกำหนดการเรียนในส่วนที่อาจารย์รับผิดชอบอย่างชัดเจน",
            name: ""


        },
        {
            Q_id: 2,
            Q_text: "2.อาจารย์ได้ชี้แจงจุดมุ่งหมายการเรียนการสอนแต่ละครั้งอย่างชัดเจน",
            name: ""

        },
        {
            Q_id: 3,
            Q_text: "3.อาจารย์มีความพร้อมในการสอนแต่ละครั้ง",
            name: ""

        },
        {
            Q_id: 4,
            Q_text: "4. อาจารย์ได้ชี้แจงหลักเกณฑ์การวัดและประเมินผลในส่วนที่อาจารย์รับผิดชอบอย่างชัดเจน",
            name: ""

        },
        {
            Q_id: 5,
            Q_text: "5.อาจารย์อธิบายเนื้อหาวิชาได้อย่างชัดเจนและเข้าใจง่าย",
            name: ""

        },
        {
            Q_id: 6,
            Q_text: "6.อาจารย์ยกตัวอย่างประกอบได้อย่างเหมาะสม",
            name: ""

        },
        {
            Q_id: 7,
            Q_text: "7.อาจารย์ตอบคำถามได้ชัดเจน",
            name: ""

        },
        {
            Q_id: 8,
            Q_text: "8.อาจารย์ใช้สื่อการสอนได้เหมาะสมกับเนื้อหาการสอน",
            name: ""

        },
        {
            Q_id: 9,
            Q_text: "9.อาจารย์ประเมินการเรียนรู้ของผู้เรียน และให้ข้อมูล ย้อนกลับเป็นระยะ ๆ",
            name: ""

        },
        {
            Q_id: 10,
            Q_text: "10. อาจารย์มีแนวทางและวิธีการสอนที่ทำให้ผู้เรียน สนใจการเรียนตลอดเวลา",
            name: ""

        },
        {
            Q_id: 11,
            Q_text: "11.อาจารย์เข้าสอนและเลิกสอนตรงเวลา",
            name: ""

        },
        {
            Q_id: 12,
            Q_text: "12.อาจารย์เปิดโอกาสและกระตุ้นให้ผู้เรียนได้แสดง ความคิดเห็นและซักถาม",
            name: ""

        },
        {
            Q_id: 13,
            Q_text: "13.อาจารย์สอนครอบคลุมเนื้อหาที่รับผิดชอบ",
            name: ""

        },
        {
            Q_id: 14,
            Q_text: "14.อาจารย์แนะนำเอกสารและแหล่งค้นคว้าเพิ่มเติม",
            name: ""

        },
        {
            Q_id: 15,
            Q_text: "15.อาจารย์ให้ข้อคิดเห็นที่เป็นประโยชน์",
            name: ""

        },
        {
            Q_id: 16,
            Q_text: "16.อาจารย์มีเวลาให้คำปรึกษาแก่ผู้เรียนทั้ง นอกชั้นเรียน",
            name: ""

        },

        {
            Q_id: 17,
            Q_text: "17.ท่านได้ความรู้ ความเข้าใจเนื้อหาตามที่อาจารย์สอน",
            name: ""

        },
        {
            Q_id: 18,
            Q_text: "18.ท่านเกิดแนวคิดในการประยุกต์ความรู้ไปใช้ใน สถานการณ์จริง",
            name: ""

        },
        {
            Q_id: 19,
            Q_text: "19.ท่านพอใจการสอนของอาจารย์",
            name: ""

        },
        {
            Q_id: 20,
            Q_text: "20.ท่านสนใจแสวงหาความรู้ในเรื่องที่อาจารย์สอนต่อไปอีก",
            name: ""

        },
    ];
    return (
        <div>
            <div className=" text-black min-h-screen  space-y-5 mb-10">
                <div className=' text-center text-lg' >
                    <p>แบประเมินการสอนของอาจาร์ยโดยนิสิต</p>
                    <p>หลักสูตรประกาศนียบัตรผู้ช่วยพยาบาล</p>
                    <p>คณะพยาบาลศาสตร์ มหาวิทยาลัยนเรศวร</p>
                    <p>การสอนแบบเน้นการปฎิบัติ</p>
                </div>
                <div>
                    <p>คำชี้แจง</p>
                    <p>1.โปรดให้คะแนนประเมินโดย &#9733; = 1 ,&#9733;&#9733; = 2 ,&#9733;&#9733;&#9733; = 3 ,&#9733;&#9733;&#9733;&#9733; = 4 ,&#9733;&#9733;&#9733;&#9733;&#9733; = 5</p>
                    <p>2.เป็นการประเมินภาพรวมของอาจาร์ยทุกท่านที่เข้าร่วมการสอน</p>
                    <p>3.ถ้าท่านเข้าเรียนไม่สม่ำเสมอ&#10098;ไม่ถึง 80% ของเวลาเรียนทั้งหมด&#10099; โปรดสละสิทธิ์ในการตอบ</p>

                </div>
                <div>
                    <b>ส่วนที่ 1 ข้อมูลพื้นฐาน</b>
                    <p>1.รหัสรายวิชาที่เรียน{ }  ชื่อรายวิชา{ }</p>
                    <p>หมู่เรียนปฎิบัตการ{ }</p>
                    <p>2.ชื่ออาจาร์ยผู้สอน{ }</p>
                    <p>3.ภาคเรียน{ }</p>
                </div>
                <div>
                    {/* <div className=' text-3xl text-center mb-5'>นิสิต : {data.nameTH}</div> */}
                    <p>ส่วนที่ 2 ข้อมูลเกี่ยวกับการสอนของอาจาร์ย</p>
                    <div className=" grid grid-cols-1 place-items-center ">
                        <div className=" block bg-gray-100  p-auto rounded-2xl">
                            {Question.map((_, index) => (
                                <div className="  grid grid-cols-2 gap-4 p-4">
                                    <p>{_.Q_text}</p>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p>ส่วนที่ 3 ความคิดเห็นอื่นๆ</p>
                    <p className=' text-center'>ความคิดเห็นเกี่ยวกับการสอนของอาจาร์ย และ/หรือ ปัญหาที่ต้องการให้มีการแก้ไขปรับปรุง</p>
                    <div className="mb-5 flex justify-center ">
                        <input
                            className='w-full h-40 rounded-md border border-black bg-slate-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                        />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className=' ml-3'>
                    <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                        <span className="relative invisible">Button Text</span>
                    </button>
                </div>
                <div className=' absolute right-0 mr-7'>
                    <button type="submit" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                            <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">บันทึก</span>
                        <span className="relative invisible">Button Text</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Studenteval