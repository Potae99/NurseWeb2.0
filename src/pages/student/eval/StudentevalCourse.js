import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingPage from '../../LoadingPage';


function StudentevalCourse() {
    const [data, setData] = useState([]);

    const [completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setCompleted(true);
        }, 2000);
    }, [])

    const { studyID } = useParams();
    const [section1_1, setsection1_1] = useState("");
    const [section1_2_1, setsection1_2_1] = useState("");
    const [section1_2_2, setsection1_2_2] = useState("");
    const [section2_1, setsection2_1] = useState(5);

    const [section2_2, setsection2_2] = useState(5);

    const [section2_3, setsection2_3] = useState(5);

    const [section2_4, setsection2_4] = useState(5);

    const [section2_5, setsection2_5] = useState(5);

    const [section2_6, setsection2_6] = useState(5);

    const [section2_7, setsection2_7] = useState(5);

    const [section2_8, setsection2_8] = useState(5);

    const [section2_9, setsection2_9] = useState(5);

    const [section2_10, setsection2_10] = useState(5);

    const [section2_11, setsection2_11] = useState(5);

    const [section2_12, setsection2_12] = useState(5);

    const [section2_13, setsection2_13] = useState(5);

    const [section2_14, setsection2_14] = useState(5);
    const [section2_15, setsection2_15] = useState(5);

    const [section2_16, setsection2_16] = useState(5);
    const [section2_17, setsection2_17] = useState(5);
    const [section2_18, setsection2_18] = useState(5);
    const [section2_19, setsection2_19] = useState(5);
    const [section2_20, setsection2_20] = useState(5);

    ///section comment 
    const [section2_1_comment, setsection2_1_comment] = useState("");
    const [section2_2_comment, setsection2_2_comment] = useState("");
    const [section2_3_comment, setsection2_3_comment] = useState("");
    const [section2_4_comment, setsection2_4_comment] = useState("");
    const [section2_5_comment, setsection2_5_comment] = useState("");
    const [section2_6_comment, setsection2_6_comment] = useState("");
    const [section2_7_comment, setsection2_7_comment] = useState("");

    const [section2_8_comment, setsection2_8_comment] = useState("");
    const [section2_9_comment, setsection2_9_comment] = useState("");
    const [section2_10_comment, setsection2_10_comment] = useState("");
    const [section2_11_comment, setsection2_11_comment] = useState("");

    const [section2_12_comment, setsection2_12_comment] = useState("");
    const [section2_13_comment, setsection2_13_comment] = useState("");
    const [section2_14_comment, setsection2_14_comment] = useState("");
    const [section2_15_comment, setsection2_15_comment] = useState("");
    const [section2_16_comment, setsection2_16_comment] = useState("");
    const [section2_17_comment, setsection2_17_comment] = useState("");
    const [section2_18_comment, setsection2_18_comment] = useState("");
    const [section2_19_comment, setsection2_19_comment] = useState("");
    const [section2_20_comment, setsection2_20_comment] = useState("");




    ///comment
    const [comment1, setcomment1] = useState("");
    const [comment2, setcomment2] = useState("");
    const [comment3, setcomment3] = useState("");
    const [comment4, setcomment4] = useState("");
    const [comment5, setcomment5] = useState("");






    const addeval = () => {


        axios.post(process.env.REACT_APP_API_URL + "/eval/class", {
            studyID: studyID,
            section1_1: section1_1,
            section1_2_1: section1_2_1,
            section1_2_2: section1_2_2,
            section2_1: section2_1,
            section2_2: section2_2,
            section2_3: section2_3,
            section2_4: section2_4,
            section2_5: section2_5,
            section2_6: section2_6,
            section2_7: section2_7,
            section2_8: section2_8,
            section2_9: section2_9,
            section2_10: section2_10,
            section2_11: section2_11,
            section2_12: section2_12,
            section2_13: section2_13,
            section2_14: section2_14,
            section2_15: section2_15,
            section2_16: section2_16,
            section2_17: section2_17,
            section2_18: section2_18,
            section2_19: section2_19,
            section2_20: section2_20,
            ////section comment

            section1_1: section1_1,
            section1_2_1: section1_2_1,
            section1_2_2: section1_2_2,
            section2_1_comment: section2_1_comment,
            section2_2_comment: section2_2_comment,
            section2_3_comment: section2_3_comment,
            section2_4_comment: section2_4_comment,
            section2_5_comment: section2_5_comment,
            section2_6_comment: section2_6_comment,
            section2_7_comment: section2_7_comment,
            section2_8_comment: section2_8_comment,
            section2_9_comment: section2_9_comment,
            section2_10_comment: section2_10_comment,
            section2_11_comment: section2_11_comment,
            section2_12_comment: section2_12_comment,
            section2_13_comment: section2_13_comment,
            section2_14_comment: section2_14_comment,
            section2_15_comment: section2_15_comment,
            section2_16_comment: section2_16_comment,
            section2_17_comment: section2_17_comment,
            section2_18_comment: section2_18_comment,
            section2_19_comment: section2_19_comment,
            section2_20_comment: section2_20_comment,




            ////comment
            comment1: comment1,
            comment2: comment2,
            comment3: comment3,
            comment4: comment4,
            comment5: comment5

        }).then(() => {
            setData([
                ...data,
                {
                    studyID: studyID,
                    section1_1: section1_1,
                    section1_2_1: section1_2_1,
                    section1_2_2: section1_2_2,
                    section2_1: section2_1,
                    section2_2: section2_2,
                    section2_3: section2_3,
                    section2_4: section2_4,
                    section2_5: section2_5,
                    section2_6: section2_6,
                    section2_7: section2_7,
                    section2_8: section2_8,
                    section2_9: section2_9,
                    section2_10: section2_10,
                    section2_11: section2_11,
                    section2_12: section2_12,
                    section2_13: section2_13,
                    section2_14: section2_14,
                    section2_15: section2_15,
                    section2_16: section2_16,
                    section2_17: section2_17,
                    section2_18: section2_18,
                    section2_19: section2_19,
                    section2_20: section2_20,
                    ////////section comment


                    section2_2_comment: section2_3_comment,
                    section2_4_comment: section2_4_comment,
                    section2_5_comment: section2_5_comment,
                    section2_6_comment: section2_6_comment,
                    section2_7_comment: section2_7_comment,
                    section2_8_comment: section2_8_comment,
                    section2_9_comment: section2_9_comment,
                    section2_10_comment: section2_10_comment,
                    section2_11_comment: section2_11_comment,
                    section2_12_comment: section2_12_comment,
                    section2_13_comment: section2_13_comment,
                    section2_14_comment: section2_14_comment,
                    section2_15_comment: section2_15_comment,
                    section2_16_comment: section2_16_comment,
                    section2_17_comment: section2_17_comment,
                    section2_18_comment: section2_18_comment,
                    section2_19_comment: section2_19_comment,
                    section2_20_comment: section2_20_comment,


                    ///comment
                    comment1: comment1,
                    comment2: comment2,
                    comment3: comment3,
                    comment4: comment4,
                    comment5: comment5

                }
            ])
            window.location.href = "/NA/student/eval/all"

        })
            .catch(error => {
                // console.log(error.request);
            })
    }

    // console.log(section1_1)
    // console.log(section1_2_1)
    // console.log(section1_2_2)



    // console.log(section2_1)
    // console.log(section2_2)
    // console.log(section2_3)
    // console.log(section2_4)
    // console.log(section2_5)
    // console.log(section2_6)
    // console.log(section2_7)
    // console.log(section2_8)
    // console.log(section2_9)
    // console.log(section2_10)
    // console.log(section2_11)
    // console.log(section2_12)
    // console.log(section2_13)
    // console.log(section2_14)
    // console.log(section2_15)
    // console.log(section2_16)
    // console.log(section2_17)
    // console.log(section2_18)
    // console.log(section2_19)
    // console.log(section2_20)

    // console.log(comment1)
    // console.log(comment2)
    // console.log(comment3)
    // console.log(comment4)
    // console.log(comment5)



    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div>
                    <div className=" text-black min-h-screen  space-y-5 mb-10">
                        <div className=' text-center text-lg' >
                            <p>แบประเมินรายวิชา</p>
                            <p>หลักสูตรประกาศนียบัตรผู้ช่วยพยาบาล</p>
                            <p>คณะพยาบาลศาสตร์ มหาวิทยาลัยนเรศวร</p>
                        </div>
                        <div>
                            <p>คำชี้แจง</p>
                            <p>กรุณาทำเครื่องหมายในช่องว่างที่ตรงกับความคิดเห็นของท่าน</p>

                        </div>
                        <div>
                            <div>
                                <p>1. อาจารย์ได้แจกประมวลการเรียนรายวิชา ในชั่วโมงแรกของการเรียน (รายละเอียดเกี่ยวกับวัตถุประสงค์ เนื้อหา ตาราประกอบและวิธีการวัดผล)</p>
                                <div className=' flex space-x-3'>
                                    <p>ใช่</p>
                                    <input onChange={(event) => {
                                        setsection1_1(event.target.value)
                                    }} type="radio" name="section1_1" value={1} className=" bg-orange-300" />
                                    <p>ไม่ใช่</p>
                                    <input onChange={(event) => {
                                        setsection1_1(event.target.value)
                                    }} type="radio" name="section1_1" value={0} className=" bg-orange-300" />
                                </div>
                            </div>
                            <div>
                                <p>2.อาจารย์จัดให้มีการสอบ</p>
                                <p>ก.การสอบย่อย</p>
                                <div className=' flex space-x-3'>
                                    <p>ใช่</p>
                                    <input onChange={(event) => {
                                        setsection1_2_1(event.target.value)
                                    }} type="radio" name="section1_2_1" value={1} className=" bg-orange-300" />
                                    <p>ไม่ใช่</p>
                                    <input onChange={(event) => {
                                        setsection1_2_1(event.target.value)
                                    }} type="radio" name="section1_2_1" value={0} className=" bg-orange-300" />
                                </div>
                                <p>ข.สอบกลางภาค/ปลายภาค</p>
                                <div className=' flex space-x-3'>
                                    <p>ใช่</p>
                                    <input onChange={(event) => {
                                        setsection1_2_2(event.target.value)
                                    }} type="radio" name="section1_2_2" value={1} className=" bg-orange-300" />
                                    <p>ไม่ใช่ </p>
                                    <input onChange={(event) => {
                                        setsection1_2_2(event.target.value)
                                    }} type="radio" name="section1_2_2" value={0} className=" bg-orange-300" />
                                </div>
                            </div>

                            <p>ส่วนที่ 2 กรุณาทำเครื่องหมาย &#9733; ในช่องว่างที่ตรงกับความคิดเห็นของท่าน</p>
                            <b>เกณฑ์การประเมิน</b>
                            <p>&#9733;&#9733;&#9733;&#9733;&#9733; ตรงกับระดับความคิดเห็น &#40;มากที่สุด สมบูรณ์ ครบถ้วน&#41; </p>
                            <p>&#9733;&#9733;&#9733;&#9733;   ตรงกับระดับความคิดเห็น &#40;มาก ส่วนใหญ่ดี&#41;</p>
                            <p>&#9733;&#9733;&#9733; ตรงกับระดับความคิดเห็น ปานกลาง&#40;พอใช้&#41;</p>
                            <p>&#9733;&#9733; ตรงกับระดับความคิดเห็น น้อย&#40;ยังไม่เหมาะสม &#41;</p>
                            <p>&#9733; ตรงกับระดับความคิดเห็น น้อยที่สุด&#40;ควรแก้ไขปรับปรุง &#41;</p>
                            <div className=" grid grid-cols-1 place-items-center ">
                                <div className=" block bg-gray-100  p-auto rounded-2xl">
                                    <div className="  grid grid-cols-3 gap-4 p-4">
                                        <p>1.อาจารย์ได้แจ้งกำหนดการเรียนในส่วนที่อาจารย์รับผิดชอบอย่างชัดเจน</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_1(event.target.value)
                                            }} type="radio" name="section2_1" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_1 == 1} />
                                            <input onChange={(event) => {
                                                setsection2_1(event.target.value)
                                            }} type="radio" name="section2_1" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_1 == 2} />
                                            <input onChange={(event) => {
                                                setsection2_1(event.target.value)
                                            }} type="radio" name="section2_1" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_1 == 3} />
                                            <input onChange={(event) => {
                                                setsection2_1(event.target.value)
                                            }} type="radio" name="section2_1" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_1 == 4} />
                                            <input onChange={(event) => {
                                                setsection2_1(event.target.value)
                                            }} type="radio" name="section2_1" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_1 == 5} />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_1_comment(event.target.value)
                                            }}
                                            name='section2_1_comment'
                                            placeholder='ข้อเสนอแนะที่ 1'
                                            value={section2_1_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />

                                        <p>2.อาจารย์ได้ชี้แจงจุดมุ่งหมายการเรียนการสอนแต่ละครั้งอย่างชัดเจน</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_2(event.target.value)
                                            }} type="radio" name="section2_2" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_2 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_2(event.target.value)
                                            }} type="radio" name="section2_2" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_2 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_2(event.target.value)
                                            }} type="radio" name="section2_2" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_2 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_2(event.target.value)
                                            }} type="radio" name="section2_2" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_2 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_2(event.target.value)
                                            }} type="radio" name="section2_2" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_2 == 5 }  />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_2_comment(event.target.value)
                                            }}
                                            name='section2_2_comment'
                                            placeholder='ข้อเสนอแนะที่ 2'
                                            value={section2_2_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>3.อาจารย์มีความพร้อมในการสอนแต่ละครั้ง</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_3(event.target.value)
                                            }} type="radio" name="section2_3" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_3 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_3(event.target.value)
                                            }} type="radio" name="section2_3" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_3 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_3(event.target.value)
                                            }} type="radio" name="section2_3" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_3 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_3(event.target.value)
                                            }} type="radio" name="section2_3" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_3 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_3(event.target.value)
                                            }} type="radio" name="section2_3" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_3 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_3_comment(event.target.value)
                                            }}
                                            name='section2_3_comment'
                                            placeholder='ข้อเสนอแนะที่ 3'
                                            value={section2_3_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>4.อาจารย์ได้ชี้แจงหลักเกณฑ์การวัดและประเมินผลในส่วนที่อาจารย์รับผิดชอบอย่างชัดเจน</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_4(event.target.value)
                                            }} type="radio" name="section2_4" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_4 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_4(event.target.value)
                                            }} type="radio" name="section2_4" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_4 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_4(event.target.value)
                                            }} type="radio" name="section2_4" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_4 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_4(event.target.value)
                                            }} type="radio" name="section2_4" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_4 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_4(event.target.value)
                                            }} type="radio" name="section2_4" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_4 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_4_comment(event.target.value)
                                            }}
                                            name='section2_4_comment'
                                            placeholder='ข้อเสนอแนะที่ 4'
                                            value={section2_4_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>5.อาจารย์อธิบายเนื้อหาวิชาได้อย่างชัดเจนและเข้าใจง่าย</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_5(event.target.value)
                                            }} type="radio" name="section2_5" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_5 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_5(event.target.value)
                                            }} type="radio" name="section2_5" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_5 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_5(event.target.value)
                                            }} type="radio" name="section2_5" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_5 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_5(event.target.value)
                                            }} type="radio" name="section2_5" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_5 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_5(event.target.value)
                                            }} type="radio" name="section2_5" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_5 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_5_comment(event.target.value)
                                            }}
                                            name='comment'
                                            placeholder='ข้อเสนอแนะที่ 5'
                                            value={section2_5_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>6.อาจารย์ยกตัวอย่างประกอบได้อย่างเหมาะสม</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_6(event.target.value)
                                            }} type="radio" name="section2_6" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_6 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_6(event.target.value)
                                            }} type="radio" name="section2_6" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_6 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_6(event.target.value)
                                            }} type="radio" name="section2_6" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_6 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_6(event.target.value)
                                            }} type="radio" name="section2_6" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_6 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_6(event.target.value)
                                            }} type="radio" name="section2_6" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_6 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_6_comment(event.target.value)
                                            }}
                                            name='section2_6_comment'
                                            placeholder='ข้อเสนอแนะที่ 6'
                                            value={section2_6_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />

                                        <p>7.อาจารย์ตอบคำถามได้ชัดเจน</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_7(event.target.value)
                                            }} type="radio" name="section2_7" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_7 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_7(event.target.value)
                                            }} type="radio" name="section2_7" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_7 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_7(event.target.value)
                                            }} type="radio" name="section2_7" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_7 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_7(event.target.value)
                                            }} type="radio" name="section2_7" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_7 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_7(event.target.value)
                                            }} type="radio" name="section2_7" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_7 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_7_comment(event.target.value)

                                            }}
                                            placeholder='ข้อเสนอแนะที่ 7'
                                            name='section2_7_comment'
                                            value={section2_7_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>8.อาจารย์ใช้สื่อการสอนได้เหมาะสมกับเนื้อหาการสอน</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_8(event.target.value)
                                            }} type="radio" name="section2_8" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_8 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_8(event.target.value)
                                            }} type="radio" name="section2_8" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_8 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_8(event.target.value)
                                            }} type="radio" name="section2_8" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_8 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_8(event.target.value)
                                            }} type="radio" name="section2_8" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_8 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_8(event.target.value)
                                            }} type="radio" name="section2_8" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_8 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_8_comment(event.target.value)
                                            }}
                                            name='comsection2_8_commentment'
                                            placeholder='ข้อเสนอแนะที่ 8'
                                            value={section2_8_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />

                                        <p>9.อาจารย์ประเมินการเรียนรู้ของผู้เรียน และให้ข้อมูล ย้อนกลับเป็นระยะๆ</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_9(event.target.value)
                                            }} type="radio" name="section2_9" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_9 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_9(event.target.value)
                                            }} type="radio" name="section2_9" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_9 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_9(event.target.value)
                                            }} type="radio" name="section2_9" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_9 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_9(event.target.value)
                                            }} type="radio" name="section2_9" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_9 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_9(event.target.value)
                                            }} type="radio" name="section2_9" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_9 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_9_comment(event.target.value)
                                            }}
                                            name='section2_9_comment'
                                            placeholder='ข้อเสนอแนะที่ 9'
                                            value={section2_9_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>10.อาจารย์มีแนวทางและวิธีการสอนที่ทำให้ผู้เรียน สนใจการเรียนตลอดเวลา</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_10(event.target.value)
                                            }} type="radio" name="section2_10" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_10 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_10(event.target.value)
                                            }} type="radio" name="section2_10" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_10 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_10(event.target.value)
                                            }} type="radio" name="section2_10" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_10 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_10(event.target.value)
                                            }} type="radio" name="section2_10" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_10 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_10(event.target.value)
                                            }} type="radio" name="section2_10" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_10 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_10_comment(event.target.value)
                                            }}
                                            name='section2_10_comment'
                                            placeholder='ข้อเสนอแนะที่ 10'
                                            value={section2_10_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />

                                        <p>11.อาจารย์เข้าสอนและเลิกสอนตรงเวลา</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_11(event.target.value)
                                            }} type="radio" name="section2_11" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_11 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_11(event.target.value)
                                            }} type="radio" name="section2_11" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_11 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_11(event.target.value)
                                            }} type="radio" name="section2_11" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_11 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_11(event.target.value)
                                            }} type="radio" name="section2_11" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_11 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_11(event.target.value)
                                            }} type="radio" name="section2_11" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_11 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_11_comment(event.target.value)
                                            }}
                                            name='section2_11_comment'
                                            placeholder='ข้อเสนอแนะที่ 11'
                                            value={section2_11_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>12.อาจารย์เปิดโอกาสและกระตุ้นให้ผู้เรียนได้แสดง ความคิดเห็นและซักถาม</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_12(event.target.value)
                                            }} type="radio" name="section2_12" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_12 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_12(event.target.value)
                                            }} type="radio" name="section2_12" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_12 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_12(event.target.value)
                                            }} type="radio" name="section2_12" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_12 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_12(event.target.value)
                                            }} type="radio" name="section2_12" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_12 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_12(event.target.value)
                                            }} type="radio" name="section2_12" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_12 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_12_comment(event.target.value)
                                            }}
                                            name='section2_12_comment'
                                            placeholder='ข้อเสนอแนะที่ 12'
                                            value={section2_12_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />

                                        <p>13.อาจารย์สอนครอบคลุมเนื้อหาที่รับผิดชอบ</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_13(event.target.value)
                                            }} type="radio" name="section2_13" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_13 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_13(event.target.value)
                                            }} type="radio" name="section2_13" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_13 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_13(event.target.value)
                                            }} type="radio" name="section2_13" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_13 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_13(event.target.value)
                                            }} type="radio" name="section2_13" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_13 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_13(event.target.value)
                                            }} type="radio" name="section2_13" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_13 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_13_comment(event.target.value)
                                            }}
                                            placeholder='ข้อเสนอแนะที่ 13'
                                            name='section2_13_comment'
                                            value={section2_13_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>14.อาจารย์แนะนำเอกสารและแหล่งค้นคว้าเพิ่มเติม</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_14(event.target.value)
                                            }} type="radio" name="section2_14" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_14 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_14(event.target.value)
                                            }} type="radio" name="section2_14" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_14 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_14(event.target.value)
                                            }} type="radio" name="section2_14" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_14 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_14(event.target.value)
                                            }} type="radio" name="section2_14" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_14 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_14(event.target.value)
                                            }} type="radio" name="section2_14" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_14 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_14_comment(event.target.value)
                                            }}
                                            name='section2_14_comment'
                                            placeholder='ข้อเสนอแนะที่ 14'
                                            value={section2_14_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>15.อาจารย์ให้ข้อคิดเห็นที่เป็นประโยชน์</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_15(event.target.value)
                                            }} type="radio" name="section2_15" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_15 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_15(event.target.value)
                                            }} type="radio" name="section2_15" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_15 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_15(event.target.value)
                                            }} type="radio" name="section2_15" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_15 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_15(event.target.value)
                                            }} type="radio" name="section2_15" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_15 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_15(event.target.value)
                                            }} type="radio" name="section2_15" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_15 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_15_comment(event.target.value)
                                            }}
                                            name='section2_15_comment'
                                            placeholder='ข้อเสนอแนะที่ 15'
                                            value={section2_15_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>16.อาจารย์มีเวลาให้คำปรึกษาแก่ผู้เรียนทั้ง นอกชั้นเรียน</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_16(event.target.value)
                                            }} type="radio" name="section2_16" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_16 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_16(event.target.value)
                                            }} type="radio" name="section2_16" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_16 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_16(event.target.value)
                                            }} type="radio" name="section2_16" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_16 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_16(event.target.value)
                                            }} type="radio" name="section2_16" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_16 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_16(event.target.value)
                                            }} type="radio" name="section2_16" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_16 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_16_comment(event.target.value)
                                            }}
                                            name='section2_16_comment'
                                            placeholder='ข้อเสนอแนะที่ 16'
                                            value={section2_16_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>17.ท่านได้ความรู้ ความเข้าใจเนื้อหาตามที่อาจารย์สอน</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_17(event.target.value)
                                            }} type="radio" name="section2_17" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_17 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_17(event.target.value)
                                            }} type="radio" name="section2_17" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_17 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_17(event.target.value)
                                            }} type="radio" name="section2_17" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_17 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_17(event.target.value)
                                            }} type="radio" name="section2_17" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_17 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_17(event.target.value)
                                            }} type="radio" name="section2_17" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_17 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_17_comment(event.target.value)
                                            }}
                                            name='section2_17_comment'
                                            placeholder='ข้อเสนอแนะที่ 17'
                                            value={section2_17_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>18.ท่านเกิดแนวคิดในการประยุกต์ความรู้ไปใช้ใน สถานการณ์จริง</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_18(event.target.value)
                                            }} type="radio" name="section2_18" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_18 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_18(event.target.value)
                                            }} type="radio" name="section2_18" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_18 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_18(event.target.value)
                                            }} type="radio" name="section2_18" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_18 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_18(event.target.value)
                                            }} type="radio" name="section2_18" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_18 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_18(event.target.value)
                                            }} type="radio" name="section2_18" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_18 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_18_comment(event.target.value)
                                            }}
                                            name='section2_18_comment'
                                            placeholder='ข้อเสนอแนะที่ 18'
                                            value={section2_18_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>19.ท่านพอใจการสอนของอาจารย์</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_19(event.target.value)
                                            }} type="radio" name="section2_19" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_19 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_19(event.target.value)
                                            }} type="radio" name="section2_19" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_19 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_19(event.target.value)
                                            }} type="radio" name="section2_19" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_19 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_19(event.target.value)
                                            }} type="radio" name="section2_19" value={4} className="mask mask-star-2 bg-orange-300" checked={section2_19 == 4 } />
                                            <input onChange={(event) => {
                                                setsection2_19(event.target.value)
                                            }} type="radio" name="section2_19" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_19 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_19_comment(event.target.value)
                                            }}
                                            name='section2_19_comment'
                                            placeholder='ข้อเสนอแนะที่ 19'
                                            value={section2_19_comment}
                                            className=' w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                        <p>20.ท่านสนใจแสวงหาความรู้ในเรื่องที่อาจารย์สอนต่อไปอีก</p>
                                        <div className="rating">
                                            <input onChange={(event) => {
                                                setsection2_20(event.target.value)
                                            }} type="radio" name="section2_20" value={1} className="mask mask-star-2 bg-orange-300" checked={section2_20 == 1 } />
                                            <input onChange={(event) => {
                                                setsection2_20(event.target.value)
                                            }} type="radio" name="section2_20" value={2} className="mask mask-star-2 bg-orange-300" checked={section2_20 == 2 } />
                                            <input onChange={(event) => {
                                                setsection2_20(event.target.value)
                                            }} type="radio" name="section2_20" value={3} className="mask mask-star-2 bg-orange-300" checked={section2_20 == 3 } />
                                            <input onChange={(event) => {
                                                setsection2_20(event.target.value)
                                            }} type="radio" name="section2_20" value={4} className="mask mask-star-2 bg-orange-300"checked={section2_20 == 4} />
                                            <input onChange={(event) => {
                                                setsection2_20(event.target.value)
                                            }} type="radio" name="section2_20" value={5} className="mask mask-star-2 bg-orange-300" checked={section2_20 == 5 } />
                                        </div>
                                        <textarea
                                            onChange={(event) => {
                                                setsection2_20_comment(event.target.value)
                                            }}
                                            name='section2_20_comment'
                                            placeholder='ข้อเสนอแนะที่ 20'
                                            value={section2_20_comment}
                                            className='w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <b>ข้อเสนอแนะ</b>
                            <p >1.วิธีการสอนของอาจารย์โดยภาพรวม</p>
                            <div className="mb-5 flex justify-center ">
                                <textarea
                                    onChange={(event) => {
                                        setcomment1(event.target.value)
                                    }}
                                    name='comment1'
                                    value={comment1}
                                    className='w-full bg-white  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                />
                            </div>
                            <p >2.รูปแบบของเอกสารประกอบการสอนโดยภาพรวม</p>
                            <div className="mb-5 flex justify-center ">
                                <textarea
                                    onChange={(event) => {
                                        setcomment2(event.target.value)
                                    }}
                                    name='comment2'
                                    value={comment2}
                                    className='w-full bg-white  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                />
                            </div>
                            <p >3.วิธีการที่จะช่วยให้นิสิตเข้าใจเนื้อหามากขึ้นโดยภาพรวม</p>
                            <div className="mb-5 flex justify-center ">
                                <textarea
                                    onChange={(event) => {
                                        setcomment3(event.target.value)
                                    }}
                                    name='comment3'
                                    value={comment3}
                                    className='w-full bg-white  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                />
                            </div>
                            <p >4.การประเมินผลการเรียนโดยภาพรวม</p>
                            <div className="mb-5 flex justify-center ">
                                <textarea
                                    onChange={(event) => {
                                        setcomment4(event.target.value)
                                    }}
                                    name='comment4'
                                    value={comment4}
                                    className='bg-white w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                />
                            </div>
                            <p >5.สิ่งอื่นๆที่ต้องการให้ปรับปรุง</p>
                            <div className="mb-5 flex justify-center ">
                                <textarea
                                    onChange={(event) => {
                                        setcomment5(event.target.value)
                                    }}
                                    name='comment5'
                                    value={comment5}
                                    className=' bg-white w-full  rounded-md border border-black  bg-w py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus: shadow-sm'
                                />
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-row-reverse'>
                        <div className=' ml-3'>
                            {/* <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button> */}
                        </div>
                        <div className=' mr-3'>
                            <button onClick={addeval} type="submit" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group">
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
            )}

        </>
    )
}

export default StudentevalCourse