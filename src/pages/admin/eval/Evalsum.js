import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';
import LoadingPage from '../../LoadingPage';



function ExampleComponent() {
  const { classID } = useParams();
  const [comments, setComments] = useState([]);

  const Getcomment = () => {
    axios.get(process.env.REACT_APP_API_URL + "/eval/class/stat", { params: { classID: classID } })
      .then(res => {
        // const persons = res.data;
        //this.setState({ persons });
        console.log(res.data);

        if (res.data.error === true) {
          console.log(res.data)
          console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setComments(res.data.data.comment);
      });

  }

  return (
    <div className='mt-3'>
      <button onClick={Getcomment} className='btn btn-primary'>ความคิดเห็น</button>
      {
        comments.length > 0 ?
          <>
            <div className=" m-3">1.การชี้แจงวัตถุประสงค์ เนื้อหา วิธีการสอน และการประเมินผลการเรียนมีความชัดเจน </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_1_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_1_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">2.วัตถุประสงค์การเรียนรู้สอดคล้องกับลักษณะวิชา </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_2_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_2_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">3.หัวข้อการสอนมีความสอดคล้องกับวัตถุประสงค์ </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_3_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_3_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">4.ตารางการจัดการเรียนการสอนมีความชัดเจน </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_4_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_4_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">5.การจัดลำดับการสอนมีความเหมาะสม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_5_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_5_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">6.ระยะเวลาการสอนเหมาะสมกับเนื้อหาในแต่ละหัวข้อ </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_6_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_6_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">7.กิจกรรมการเรียนการสอนสอดคล้องกับลักษณะวิชาและการเรียนรู้ </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_7_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_7_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">8.เอกสารประกอบการสอนเหมาะสม สนับสนุนเนื้อหาการสอน</div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_8_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_8_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">9.โดยภาพรวม ผู้เรียนมีความพึงพอใจในการจัดการเรียนการสอน </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_9_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_9_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">10.โดยภาพรวมผู้สอนมีเวลาและให้คำปรึกษาแก่นักศึกษานอกชั้นเรียน </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_10_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_10_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">11.โดยภาพรวมผู้สอน มีเทคนิคการถ่ายทอดความรู้น่าสนใจง่ายต่อการเข้าใจ </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_11_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_11_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">12.โดยภาพรวมผู้สอนตรงเวลาในการสอน </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_12_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_12_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">13.วิธีการประเมินผลการเรียน เหมาะสมกับวัตถุประสงค์ของวิชา </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_13_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_13_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">14.เกณฑ์การวัดและประเมินผลการเรียนมีความเหมาะสม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_14_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_14_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">15.ห้องเรียนสะอาด บรรยากาศเหมาะสม น่าเรียน</div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_15_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_15_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">16.ห้องเรียนมีแสง สี เสียง เหมาะสม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_16_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_16_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">17.ห้องเรียนมีการถ่ายเทอากาศเหมาะสม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_17_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_17_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">18.เอกสาร ตำรา สื่ออุปกรณ์สำหรับค้นคว้าด้วยตนเองมีความทันสมัย จำนวนเพียงพอ </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_18_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_18_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">19.ผู้เรียนเกิดพฤติกรรมตามวัตถุประสงค์ </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_19_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_19_comment}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">20.ผู้เรียนสามารถนำความรู้ไปใช้ในชีวิตประจำวันและเป็นพื้นฐานในการเรียนวิชาอื่นได้ </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.section2_20_comment !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.section2_20_comment}</p>
            </div>
          </div>
        ))}
      </div>


      {
        comments.length > 0 ?
          <>
            <div className=" m-3">1.วิธีการสอนของอาจารย์โดยภาพรวม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.comment1 !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.comment1}</p>
            </div>
          </div>
        ))}
      </div>


      {
        comments.length > 0 ?
          <>
            <div className=" m-3">2.รูปแบบของเอกสารประกอบการสอนโดยภาพรวม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.comment2 !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.comment2}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">3.วิธีการที่จะช่วยให้นิสิตเข้าใจเนื้อหามากขึ้นโดยภาพรวม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.comment3 !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.comment3}</p>
            </div>
          </div>
        ))}
      </div>


      {
        comments.length > 0 ?
          <>
            <div className=" m-3">4.การประเมินผลการเรียนโดยภาพรวม </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.comment4 !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.comment4}</p>
            </div>
          </div>
        ))}
      </div>

      {
        comments.length > 0 ?
          <>
            <div className=" m-3">5.สิ่งอื่นๆที่ต้องการให้ปรับปรุง </div></> :
          <></>
      }
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-6 mt-3'>
        {comments.filter(comment => comment.comment5 !== null).map((comment, index) => (
          <div key={index} className='card bg-base-200 hover:bg-gray-300 shadow-xl'>
            <div className='card-body'>
              <p className='text-black'>{comment.comment5}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
function Evalsum() {
  const [evalsum, setevalsum] = useState([]);
  const [eval_sd, seteval_sd] = useState([]);
  const [Classdetail, setClassdetail] = useState([]);
  const [Dateget, setDate] = useState([]);
  const { classID } = useParams();
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  const Print = () => {
    //console.log('print');  
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }









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
        // console.log(res.data);

        if (res.data.error === true) {
          // console.log(res.data)
          // console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setClassdetail(res.data.data.courseDetail);
        setDate(format(new Date(res.data.data.class.dateYear), "yyyy"));
        setLoading(true);

        setTimeout(() => {
          setCompleted(true);
        }, 1000);
      });



    axios.get(process.env.REACT_APP_API_URL + "/eval/class/stat", { params: { classID: classID } })
      .then(res => {
        // const persons = res.data;
        //this.setState({ persons });//
        console.log(res.data);

        if (res.data.error === true) {
          // console.log(res.data)
          // console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setevalsum(res.data.data.average[0]);
        seteval_sd(res.data.data.sd[0]);
      });
    //   axios.get(process.env.REACT_APP_API_URL + "/eval/class/sd", { params: { classID: classID } })
    //     .then(res => {
    //       // const persons = res.data;
    //       //this.setState({ persons });
    //       console.log(res.data);

    //       if (res.data.error === true) {
    //         console.log(res.data)
    //         console.log("ERROR FOUND WHEN GET DATA FROM API ");


    //         return;
    //       }
    //       seteval_sd(res.data.data[0]);
    //     });
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
        <div id='printablediv' className=' text-black'>

          <div className=' text-center text-xl mb-5'>
            <p>แบบประเมินรายวิชา</p>
            <p>หลักสูตรประกาศนียบัตรผู้ช่วยพยาบาล ปีการศึกษา {Dateget}</p>
            <p>รายวิชา{Classdetail.courseID_number} {Classdetail.courseNameTH}</p>
          </div>
          <div className='d-flex m-3 '>
            <button type="button" onClick={Print} className='float-right  btn  bg-orange-400'>พิมพ์</button>
          </div>
          <div>
            <p>ระดับคะแนน</p>
          </div>
          <div className=' ml-5'>
            <p>ค่าเฉลี่ย 4.50 ขึ้นไป หมายถึง พึงพอใจในระดับมากที่สุด</p>
            <p>ค่าเฉลี่ย 3.50-4.49 หมายถึง พึงพอใจในระดับมาก</p>
            <p>ค่าเฉลี่ย 2.50-3.49 หมายถึง พึงพอใจในระดับปานกลาง</p>
            <p>ค่าเฉลี่ย 1.50-2.49 หมายถึง พึงพอใจในระดับน้อย</p>
            <p>ค่าเฉลี่ยน้อยกว่า 1.50 หมายถึง พึงพอใจในระดับน้อยที่สุด</p>

          </div>
          <div className=' flex flex-col space-y-3 mt-3'>
            {/* section2-1 */}
            <p>1.การชี้แจงวัตถุประสงค์ เนื้อหา วิธีการสอน และการประเมินผลการเรียนมีความชัดเจน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black ">คะแนนเฉลี่ย</div>
                <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_1) * 20 }}>{evalsum.section2_1}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_1}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_1}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value">{eval_sd.section2_1}</div>

              </div>


            </div>
            <p>2.วัตถุประสงค์การเรียนรู้สอดคล้องกับลักษณะวิชา</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_2) * 20 }}>{evalsum.section2_2}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_2}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_2}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_2}</div>

              </div>


            </div>

            <p>3.หัวข้อการสอนมีความสอดคล้องกับวัตถุประสงค์</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_3) * 20 }}>{evalsum.section2_3}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_3}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_3}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_3}</div>

              </div>


            </div>

            <p>4.ตารางการจัดการเรียนการสอนมีความชัดเจน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">
{/* 
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_4) * 20 }}>{evalsum.section2_4}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_4}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_4}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_4}</div>

              </div>


            </div>


            <p>5.การจัดลำดับการสอนมีความเหมาะสม</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_5) * 20 }}>{evalsum.section2_5}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_5}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_5}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_5}</div>

              </div>


            </div>


            <p>6.ระยะเวลาการสอนเหมาะสมกับเนื้อหาในแต่ละหัวข้อ</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_6) * 20 }}>{evalsum.section2_6}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_6}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_6}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_6}</div>

              </div>


            </div>



            <p>7.กิจกรรมการเรียนการสอนสอดคล้องกับลักษณะวิชาและการเรียนรู้</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_7) * 20 }}>{evalsum.section2_7}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_7}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_7}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_7}</div>

              </div>


            </div>


            <p>8.เอกสารประกอบการสอนเหมาะสม สนับสนุนเนื้อหาการสอน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_8) * 20 }}>{evalsum.section2_8}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_8}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_8}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_8}</div>

              </div>


            </div>



            <p>9.โดยภาพรวม ผู้เรียนมีความพึงพอใจในการจัดการเรียนการสอน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": ((evalsum.section2_9) * 20) }}>{evalsum.section2_9}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_9}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_9}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_9}</div>

              </div>


            </div>



            <p>10.โดยภาพรวมผู้สอนมีเวลาและให้คำปรึกษาแก่นักศึกษานอกชั้นเรียน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_10) * 20 }}>{evalsum.section2_10}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_10}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_10}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_10}</div>

              </div>


            </div>



            <p>11.โดยภาพรวมผู้สอน มีเทคนิคการถ่ายทอดความรู้น่าสนใจง่ายต่อการเข้าใจ</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_11) * 20 }}>{evalsum.section2_11}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_11}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_11}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_11}</div>

              </div>


            </div>



            <p>12.โดยภาพรวมผู้สอนตรงเวลาในการสอน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_12) * 20 }}>{evalsum.section2_12}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_12}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_12}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_12}</div>

              </div>


            </div>



            <p>13.วิธีการประเมินผลการเรียน เหมาะสมกับวัตถุประสงค์ของวิชา</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_13) * 20 }}>{evalsum.section2_13}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_13}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_13}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_13}</div>

              </div>


            </div>



            <p>14.เกณฑ์การวัดและประเมินผลการเรียนมีความเหมาะสม</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_14) * 20 }}>{evalsum.section2_14}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_14}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_14}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_14}</div>

              </div>


            </div>



            <p>15.ห้องเรียนสะอาด บรรยากาศเหมาะสม น่าเรียน</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_15) * 20 }}>{evalsum.section2_15}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_15}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_15}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_15}</div>

              </div>


            </div>


            <p>16.ห้องเรียนมีแสง สี เสียง เหมาะสม</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_16) * 20 }}>{evalsum.section2_16}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_16}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_16}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_16}</div>

              </div>


            </div>



            <p>17.ห้องเรียนมีการถ่ายเทอากาศเหมาะสม</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_17) * 20 }}>{evalsum.section2_17}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_17}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_17}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_17}</div>

              </div>


            </div>


            <p>18เอกสาร ตำรา สื่ออุปกรณ์สำหรับค้นคว้าด้วยตนเองมีความทันสมัย จำนวนเพียงพอ</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">
{/* 
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_18) * 20 }}>{evalsum.section2_18}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_18}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_18}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_18}</div>

              </div>


            </div>


            <p>19.ผู้เรียนเกิดพฤติกรรมตามวัตถุประสงค์</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_19) * 20 }}>{evalsum.section2_19}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_19}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_19}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_19}</div>

              </div>


            </div>


            <p>20.ผู้เรียนสามารถนำความรู้ไปใช้ในชีวิตประจำวันและเป็นพื้นฐานในการเรียนวิชาอื่นได้</p>
            <div className="stats shadow  bg-gray-100 hover:bg-gray-300">

              {/* <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="radial-pro text-primarygress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (evalsum.section2_20) * 20 }}>{evalsum.section2_20}</div>
              </div> */}
              <div className="stat place-items-center">
                <div className="stat-title text-black">คะแนนเฉลี่ย</div>
                <div className="stat-value text-primary">{evalsum.section2_20}/5</div>

              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-black">ระดับ</div>
                <div className="stat-value text-secondary">{evalsum.level2_20}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-black">SD</div>
                <div className="stat-value ">{eval_sd.section2_20}</div>

              </div>


            </div>


          </div>
          <div>
            <ExampleComponent />
          </div>

        </div>
      )}

    </>
  )
}

export default Evalsum