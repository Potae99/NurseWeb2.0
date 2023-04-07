import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';
import LoadingPage from '../LoadingPage';


function Taugh_sumprac() {


  const [evalsum, setevalsum] = useState([]);
  const [eval_sd, seteval_sd] = useState([]);
  const [Classdetail, setClassdetail] = useState([]);
  const [Dateget, setDate] = useState([]);
  const { classID } = useParams();
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  



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
    axios.get(process.env.REACT_APP_API_URL + "/class", { params: { classID: classID } })
      .then(res => {
        // const persons = res.data;
        //this.setState({ persons });
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setClassdetail(res.data.data.courseDetail);
        setDate(format(new Date(res.data.data.class.dateYear), "yyyy"));
        setLoading(true);

        setTimeout(() => {
          setCompleted(true);
        }, 1000);
      });



    axios.get(process.env.REACT_APP_API_URL + "/eval/taugh/practice/stat", { params: { classID: classID } })
      .then(res => {
        // const persons = res.data;
        //this.setState({ persons });
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setevalsum(res.data.data.average[0]);
        seteval_sd(res.data.data.sd[0]);
      });

  }
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [])


  return (
    <>
      {!completed ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div>
          <div className=' text-center text-xl'>
            <p>แบบประเมินรายวิชาภาคปฏิบัติ</p>
            <p>หลักสูตรประกาศนียบัตรผู้ช่วยพยาบาล ปีการศึกษา {Dateget}</p>
            <p>รายวิชา{Classdetail.courseID_number} {Classdetail.courseNameTH}</p>
          </div>
     
          <div className=' flex flex-col space-y-3 mt-3'>
            {/* section2-1 */}
            <p>1.อาจารย์ได้แจ้งกำหนดการเรียนในส่วนที่อาจารย์ รับผิดชอบอย่างชัดเจน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black ">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_1) * 20 }}>{evalsum.section2_1}</div>
              </div>

           

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value">{eval_sd.section2_1}</div>

              </div>


            </div>
            <p>2.อาจารย์ได้ชี้แจงจุดมุ่งหมายการเรียนการสอนแต่ละครั้งอย่างชัดเจน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_2) * 20 }}>{evalsum.section2_2}</div>
              </div>

         

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_2}</div>

              </div>


            </div>

            <p>3.อาจารย์มีความพร้อมในการสอนแต่ละครั้ง</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_3) * 20 }}>{evalsum.section2_3}</div>
              </div>

           

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_3}</div>

              </div>


            </div>

            <p>4.อาจารย์ได้ชี้แจงหลักเกณฑ์การวัดและประเมินผลในส่วนที่อาจารย์รับผิดชอบอย่างชัดเจน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_4) * 20 }}>{evalsum.section2_4}</div>
              </div>

            

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_4}</div>

              </div>


            </div>


            <p>5.อาจารย์อธิบายเนื้อหาวิชาได้อย่างชัดเจนและเข้าใจง่าย</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_5) * 20 }}>{evalsum.section2_5}</div>
              </div>

           

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_5}</div>

              </div>


            </div>


            <p>6.อาจารย์ยกตัวอย่างประกอบได้อย่างเหมาะสม</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_6) * 20 }}>{evalsum.section2_6}</div>
              </div>

           

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_6}</div>

              </div>


            </div>



            <p>7.อาจารย์ตอบคำถามได้ชัดเจน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_7) * 20 }}>{evalsum.section2_7}</div>
              </div>

         

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_7}</div>

              </div>


            </div>


            <p>8.อาจารย์ใช้สื่อการสอนได้เหมาะสมกับเนื้อหาการสอน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_8) * 20 }}>{evalsum.section2_8}</div>
              </div>

          

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_8}</div>

              </div>


            </div>



            <p>9.อาจารย์ประเมินการเรียนรู้ของผู้เรียน และให้ข้อมูล ย้อนกลับเป็นระยะๆ</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": ((evalsum.section2_9) * 20) }}>{evalsum.section2_9}</div>
              </div>

            

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_9}</div>

              </div>


            </div>



            <p>10.อาจารย์มีแนวทางและวิธีการสอนที่ทำให้ผู้เรียน สนใจการเรียนตลอดเวลา</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_10) * 20 }}>{evalsum.section2_10}</div>
              </div>

              
              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_10}</div>

              </div>


            </div>
            



            <p>11.อาจารย์เข้าสอนและเลิกสอนตรงเวลา</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_11) * 20 }}>{evalsum.section2_11}</div>
              </div>

            

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_11}</div>

              </div>


            </div>



            <p>12.อาจารย์เปิดโอกาสและกระตุ้นให้ผู้เรียนได้แสดง ความคิดเห็นและซักถาม</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_12) * 20 }}>{evalsum.section2_12}</div>
              </div>

             

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_12}</div>

              </div>


            </div>



            <p>13.อาจารย์สอนครอบคลุมเนื้อหาที่รับผิดชอบ</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_13) * 20 }}>{evalsum.section2_13}</div>
              </div>

        

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_13}</div>

              </div>


            </div>



            <p>14.อาจารย์แนะนำเอกสารและแหล่งค้นคว้าเพิ่มเติม</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_14) * 20 }}>{evalsum.section2_14}</div>
              </div>

           

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_14}</div>

              </div>


            </div>



            <p>15.อาจารย์ให้ข้อคิดเห็นที่เป็นประโยชน์</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_15) * 20 }}>{evalsum.section2_15}</div>
              </div>

         

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_15}</div>

              </div>


            </div>


            <p>16.อาจารย์มีเวลาให้คำปรึกษาแก่ผู้เรียนทั้ง นอกชั้นเรียน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_16) * 20 }}>{evalsum.section2_16}</div>
              </div>

         

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_16}</div>

              </div>


            </div>



            <p>17.ท่านได้ความรู้ ความเข้าใจเนื้อหาตามที่อาจารย์สอน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_17) * 20 }}>{evalsum.section2_17}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_17}</div>

              </div>


            </div>


            <p>18.ท่านเกิดแนวคิดในการประยุกต์ความรู้ไปใช้ใน สถานการณ์จริง</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_18) * 20 }}>{evalsum.section2_18}</div>
              </div>

       

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_18}</div>

              </div>


            </div>


            <p>19.ท่านพอใจการสอนของอาจารย์</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_19) * 20 }}>{evalsum.section2_19}</div>
              </div>

         

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_19}</div>

              </div>


            </div>


            <p>20.ท่านสนใจแสวงหาความรู้ในเรื่องที่อาจารย์สอนต่อไปอีก</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_20) * 20 }}>{evalsum.section2_20}</div>
              </div>

          

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_20}</div>

              </div>


            </div>


          </div>

        </div>
      )}

    </>
  )
}

export default Taugh_sumprac