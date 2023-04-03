import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Evalsumtable() {
    const [evalsum, setevalsum] = useState([]);
    const [eval_sd, seteval_sd] = useState([]);
    const fetchData = () => {

        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top-end',
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.addEventListener('mouseenter', Swal.stopTimer)
        //       toast.addEventListener('mouseleave', Swal.resumeTimer)
        //     }
        //   })

        //   Toast.fire({
        //     icon: 'error',
        //     title: 'get data from API error!'
        //   })



        axios.get(process.env.REACT_APP_API_URL + "/eval/class/average")
            .then(res => {
                // const persons = res.data;
                //this.setState({ persons });
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API ");


                    return;
                }
                setevalsum(res.data.data);
            });
        axios.get(process.env.REACT_APP_API_URL + "/eval/class/sd")
            .then(res => {
                // const persons = res.data;
                //this.setState({ persons });
                console.log(res.data);

                if (res.data.error === true) {
                    console.log(res.data)
                    console.log("ERROR FOUND WHEN GET DATA FROM API ");


                    return;
                }
                seteval_sd(res.data.data);
            });
    }
    useEffect(() => {
        fetchData();
    }, [])



    const Dcourse = [
        {
            id: 1,
            detail: "การชี้แจงวัตถุประสงค์ เนื้อหา วิธีการสอน และการประเมินผลการเรียนมีความชัดเจน "
        },
        {
            id: 2,
            detail: "วัตถุประสงค์การเรียนรู้สอดคล้องกับลักษณะวิชา"
        },
        {
            id: 3,
            detail: "หัวข้อการสอนมีความสอดคล้องกับวัตถุประสงค์"
        },
        {
            id: 4,
            detail: "ตารางการจัดการเรียนการสอนมีความชัดเจน"
        },
        {
            id: 5,
            detail: "การจัดลำดับการสอนมีความเหมาะสม"
        },
        {
            id: 6,
            detail: "ระยะเวลาการสอนเหมาะสมกับเนื้อหาในแต่ละหัวข้อ"
        },
        {
            id: 7,
            detail: "กิจกรรมการเรียนการสอนสอดคล้องกับลักษณะวิชาและการเรียนรู้"
        },
        {
            id: 8,
            detail: "เอกสารประกอบการสอนเหมาะสม สนับสนุนเนื้อหาการสอน"
        },
        {
            id: 9,
            detail: "โดยภาพรวม ผู้เรียนมีความพึงพอใจในการจัดการเรียนการสอน"
        },
        {
            id: 10,
            detail: "โดยภาพรวมผู้สอนมีเวลาและให้คำปรึกษาแก่นักศึกษานอกชั้นเรียน"
        },
        {
            id: 11,
            detail: "โดยภาพรวมผู้สอน มีเทคนิคการถ่ายทอดความรู้น่าสนใจง่ายต่อการเข้าใจ"
        },
        {
            id: 12,
            detail: "โดยภาพรวมผู้สอนตรงเวลาในการสอน "
        },
        {
            id: 13,
            detail: " วิธีการประเมินผลการเรียน เหมาะสมกับวัตถุประสงค์ของวิชา"
        },
        {
            id: 14,
            detail: "เกณฑ์การวัดและประเมินผลการเรียนมีความเหมาะสม"
        },
        {
            id: 15,
            detail: "ห้องเรียนสะอาด บรรยากาศเหมาะสม น่าเรียน"
        },
        {
            id: 16,
            detail: "ห้องเรียนมีแสง สี เสียง เหมาะสม"
        },
        {
            id: 17,
            detail: "ห้องเรียนมีการถ่ายเทอากาศเหมาะสม"
        },
        {
            id: 18,
            detail: "เอกสาร ตำรา สื่ออุปกรณ์สำหรับค้นคว้าด้วยตนเองมีความทันสมัย จำนวนเพียงพอ"
        },
        {
            id: 19,
            detail: "ผู้เรียนเกิดพฤติกรรมตามวัตถุประสงค์ "
        },
        {
            id: 20,
            detail: "ผู้เรียนสามารถนำความรู้ไปใช้ในชีวิตประจำวันและเป็นพื้นฐานในการเรียนวิชาอื่นได้"
        }
    ]

    return (
        <div className="stats shadow">

            <div className="stat place-items-center">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Users</div>
                <div className="stat-value text-secondary">4,200</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>





    )
}

export default Evalsumtable