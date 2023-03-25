import React from 'react'

function Studenteval() {

    const  Question =[
        { 
            Q_id:1,
            Q_text:"1.อาจารย์ได้แจ้งกำหนดการเรียนในส่วนที่อาจารย์รับผิดชอบอย่างชัดเจน",
            name:""
        

        },
        {
            Q_id:2,
            Q_text:"2.อาจารย์ได้ชี้แจงจุดมุ่งหมายการเรียนการสอนแต่ละครั้งอย่างชัดเจน",
            name:""

        },
        {
            Q_id:3,
            Q_text:"3.อาจารย์มีความพร้อมในการสอนแต่ละครั้ง",
            name:""

        },
        {
            Q_id:4,
            Q_text:"4. อาจารย์ได้ชี้แจงหลักเกณฑ์การวัดและประเมินผลในส่วนที่อาจารย์รับผิดชอบอย่างชัดเจน",
            name:""

        },
        {
            Q_id:5,
            Q_text:"5.อาจารย์อธิบายเนื้อหาวิชาได้อย่างชัดเจนและเข้าใจง่าย",
            name:""

        },
        {
            Q_id:6,
            Q_text:"6.อาจารย์ยกตัวอย่างประกอบได้อย่างเหมาะสม",
            name:""

        },
        {
            Q_id:7,
            Q_text:"7.อาจารย์ตอบคำถามได้ชัดเจน",
            name:""

        },
        {
            Q_id:8,
            Q_text:"8.อาจารย์ใช้สื่อการสอนได้เหมาะสมกับเนื้อหาการสอน",
            name:""

        },
        {
            Q_id:9,
            Q_text:"9.อาจารย์ประเมินการเรียนรู้ของผู้เรียน และให้ข้อมูล ย้อนกลับเป็นระยะ ๆ",
            name:""

        },
        {
            Q_id:10,
            Q_text:"10. อาจารย์มีแนวทางและวิธีการสอนที่ทำให้ผู้เรียน สนใจการเรียนตลอดเวลา",
            name:""

        },
        {
            Q_id:11,
            Q_text:"11.อาจารย์เข้าสอนและเลิกสอนตรงเวลา",
            name:""

        },
        {
            Q_id:12,
            Q_text:"12.อาจารย์เปิดโอกาสและกระตุ้นให้ผู้เรียนได้แสดง ความคิดเห็นและซักถาม",
            name:""

        },
        {
            Q_id:13,
            Q_text:"13.อาจารย์สอนครอบคลุมเนื้อหาที่รับผิดชอบ",
            name:""

        },
        {
            Q_id:14,
            Q_text:"14.อาจารย์แนะนำเอกสารและแหล่งค้นคว้าเพิ่มเติม",
            name:""

        },
        {
            Q_id:15,
            Q_text:"15.อาจารย์ให้ข้อคิดเห็นที่เป็นประโยชน์",
            name:""

        },
        {
            Q_id:16,
            Q_text:"16.อาจารย์มีเวลาให้คำปรึกษาแก่ผู้เรียนทั้ง นอกชั้นเรียน",
            name:""

        },

        {
            Q_id:17,
            Q_text:"17.ท่านได้ความรู้ ความเข้าใจเนื้อหาตามที่อาจารย์สอน",
            name:""

        },    
         {
            Q_id:18,
            Q_text:"18.ท่านเกิดแนวคิดในการประยุกต์ความรู้ไปใช้ใน สถานการณ์จริง",
            name:""

        },
        {
            Q_id:19,
            Q_text:"19.ท่านพอใจการสอนของอาจารย์",
            name:""

        },
        {
            Q_id:20,
            Q_text:"20.ท่านสนใจแสวงหาความรู้ในเรื่องที่อาจารย์สอนต่อไปอีก",
            name:""

        },
    ];
    return (
        <div>
            <div className=" text-black min-h-screen  space-y-5 mb-10">
                <div className=" font-bold text-4xl m-10 grid grid-cols-1 place-items-center">แบบประเมิน</div>
                <div>
                    {/* <div className=' text-3xl text-center mb-5'>นิสิต : {data.nameTH}</div> */}
                    <div className=" grid grid-cols-1 place-items-center">
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
            </div>
        </div>
    )
}

export default Studenteval