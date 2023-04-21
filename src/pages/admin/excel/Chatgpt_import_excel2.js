import { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

function Chatgpt_import_excel2() {
  const [file, setFile] = useState(null);
  const [students, setStudents] = useState([]);

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

      const students = data.map(row => {
        return {
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
      });

      setStudents(students);

      axios.post(process.env.REACT_APP_API_URL + "/student", students)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error.response.data);
        });

    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Upload Excel File</h1>
        <div className="mb-4">
          <label htmlFor="file" className="block font-medium">Select an Excel file:</label>
          <input type="file" id="file" name="file" className="mt-2" onChange={handleFileChange} />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
      </form>
      <table className="mt-6 border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">IDnumber</th>
            <th className="border border-gray-500 px-4 py-2">username</th>
            <th className="border border-gray-500 px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-500 px-4 py-2"></td>
              <td className="border border-gray-500 px-4 py-2">{student.studentID}</td>
              <td className="border border-gray-500 px-4 py-2">{`${student.nameTH} (${student.nameENG})`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Chatgpt_import_excel2;