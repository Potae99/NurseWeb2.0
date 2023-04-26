import { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { useEffect } from 'react';
import LoadingPage from '../../LoadingPage';
import Swal from 'sweetalert2';


function Chatgpt_import_excel() {
  const [file, setFile] = useState(null);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 2000);
  })

  const google_sheet = () => {
    window.location.href = "https://docs.google.com/spreadsheets/d/172IqEqIGXSyNj9NzriwOdKPxKQy_9q4sNgwZYl2v_R0/edit?usp=sharing"
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.onload = () => {
      const workbook = XLSX.read(reader.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);

      const students = [];
      // console.log(students)

      for (let row of data) {
        const student = {
          yearStartEnroll: row["ปีเข้าศึกษา"] ? row["ปีเข้าศึกษา"].toString() : "",
          generation: row["รุ่น"] ? row["รุ่น"].toString() : "",
          IDnumber: row["เลขประจำตัวประชาชน"] ? row["เลขประจำตัวประชาชน"].toString() : "",
          studentID: row["รหัสนิสิต"] ? row["รหัสนิสิต"].toString() : "",
          nameTH: row["ชื่อไทย"] ? row["ชื่อไทย"].toString() : "",
          nameENG: row["ชื่ออังกฤษ"] ? row["ชื่ออังกฤษ"].toString() : "",
          password: row["รหัสผ่าน"] ? row["รหัสผ่าน"].toString() : "",
          gender: row["เพศ"] ? row["เพศ"].toString() : "",
          Birthday: row["วันเกิด"] ? row["วันเกิด"].toString() : "",
          ethnicity: row["เชื้อชาติ"] ? row["เชื้อชาติ"].toString() : "",
          nationality: row["สัญชาติ"] ? row["สัญชาติ"].toString() : "",
          religion: row["ศาสนา"] ? row["ศาสนา"].toString() : "",
          houseadd_houseNo: row["บ้านเลขที่"] ? row["บ้านเลขที่"].toString() : "",
          houseadd_village: row["หมู่"] ? row["หมู่"].toString() : "",
          houseadd_road: row["ถนน"] ? row["ถนน"].toString() : "",
          houseadd_alley: row["ตรอก"] ? row["ตรอก"].toString() : "",
          houseadd_subDistrict: row["ตำบล/แขวง"] ? row["ตำบล/แขวง"].toString() : "",
          houseadd_district: row["อำเภอ/เขต"] ? row["อำเภอ/เขต"].toString() : "",
          houseadd_province: row["จังหวัด"] ? row["จังหวัด"].toString() : "",
          houseadd_postalCode: row["ไปรษณีย์"] ? row["ไปรษณีย์"].toString() : "",
          presentAddress: row["ที่อยู่ปัจจุบัน"] ? row["ที่อยู่ปัจจุบัน"].toString() : "",
          IDline: row["Idline"] ? row["Idline"].toString() : "",
          email: row["email"] ? row["email"].toString() : "",
          status: row["สถานะ"] ? row["สถานะ"].toString() : "",
          status: row["สถานะ"] ? row["สถานะ"].toString() : "",
          scholarship_name: row["ทุน"] ? row["ทุน"].toString() : "",
          phone: row["เบอร์"] ? row["เบอร์"].toString() : "",

        };
        students.push(student);

      };
      axios.post(process.env.REACT_APP_API_URL + "/student/studentFromExcel", students)
        .then(response => {
          console.log(response.data);
          console.log(students);

          // let timerInterval
          // Swal.fire({
          //   title: 'อัปโหลดสมบูรณ์',
          //   html: 'กำลังปิดใน <b></b> ',
          //   timer: 10000,
          //   timerProgressBar: true,
          //   didOpen: () => {
          //     Swal.showLoading()
          //     const b = Swal.getHtmlContainer().querySelector('b')
          //     timerInterval = setInterval(() => {
          //       b.textContent = Swal.getTimerLeft()
          //     }, 100)
          //   },
          //   willClose: () => {
          //     clearInterval(timerInterval)
          //   }
          // }).then((result) => {
          //   /* Read more about handling dismissals below */
          //   if (result.dismiss === Swal.DismissReason.timer) {
          //     window.location.href = "/admin/home";
          //   }
          // })
          Swal.fire({
            icon: "success",
            title: "Import file success",
            showConfirmButton: false,
            timer: 1000,
          })
            .then(() => {
              window.location.href = "/admin/home"; 
            })
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูล",
            showConfirmButton: false,
            timer: 1000,
          })
          console.error(error.response.data);
          console.log(data);
        });

      // console.log(student);

      // window.location.href="/admin/home"

    }
    reader.readAsBinaryString(file);
  };


  return (
    <>
      {!completed ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">อัปโหลดฟอร์มข้อมูลนิสิต</h1>
            <div className="mb-4">
              <label htmlFor="file" className="block font-medium">เลือกไฟล์ excel:</label>
              <input type="file" id="file" name="file" className="mt-2" onChange={handleFileChange} />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
            <button onClick={google_sheet} className=" ml-3 bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">ดาวน์โหลดฟอร์ม</button>
          </form>
          <div className=' mt-3 text-red-600'>
            <p>1.ห้ามใส่ข้อมูลนักเรียนซ้ำกัน(นักเรียน 1 คน เพิ่มได้ 1 ครั้ง)</p>
            <p>2.ช่องวันเกิด****ตัวอย่างข้อมูล เช่นเกิดวันที่ 9 เดือน 11 ปี 2002 ให้กรอก 2002-11-09   *****</p>
            <p>3.ช่องสถานะ *** ให้ใส่ 1 คือ กำลังศึกษา / ใส่ 0 คือ จบแล้ว  ****</p>
          </div>
        </div>
      )}
    </>

  );
}

export default Chatgpt_import_excel;
