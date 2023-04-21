import { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';


function Chatgpt_import_excel() {
  const [file, setFile] = useState(null);
 
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
        axios.post(process.env.REACT_APP_API_URL + "/student", student)
          .then(response => {
            console.log(response.data);
            console.log(student);
          })
          .catch(error => {
            console.error(error.response.data);

            console.log(data);
            console.log(student);
          });

        console.log(student);
        students.push(student);
        // window.location.href="/admin/home"
      }
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
      {/* <table>
  <thead>
    <tr>
      <th>Year Start Enroll</th>
      <th>Generation</th>
      <th>ID Number</th>
      <th>Student ID</th>
      <th>Name TH</th>
      <th>Name ENG</th>
      <th>Password</th>
      <th>Gender</th>
      <th>Birthday</th>
      <th>Ethnicity</th>
      <th>Nationality</th>
      <th>Religion</th>
      <th>House/Building No.</th>
      <th>Village</th>
      <th>Road</th>
      <th>Alley</th>
      <th>Sub-district</th>
      <th>District</th>
      <th>Province</th>
      <th>Postal Code</th>
      <th>Present Address</th>
      <th>ID Line</th>
      <th>Email</th>
      <th>Status</th>
      <th>Scholarship Name</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    {file.map((student) => (
      <tr key={student}>
        <td>{student.yearStartEnroll}</td>
        <td>{student.generation}</td>
        <td>{student.IDnumber}</td>
        <td>{student.studentID}</td>
        <td>{student.nameTH}</td>
        <td>{student.nameENG}</td>
        <td>{student.password}</td>
        <td>{student.gender}</td>
        <td>{student.Birthday}</td>
        <td>{student.ethnicity}</td>
        <td>{student.nationality}</td>
        <td>{student.religion}</td>
        <td>{student.houseadd_houseNo}</td>
        <td>{student.houseadd_village}</td>
        <td>{student.houseadd_road}</td>
        <td>{student.houseadd_alley}</td>
        <td>{student.houseadd_subDistrict}</td>
        <td>{student.houseadd_district}</td>
        <td>{student.houseadd_province}</td>
        <td>{student.houseadd_postalCode}</td>
        <td>{student.presentAddress}</td>
        <td>{student.IDline}</td>
        <td>{student.email}</td>
        <td>{student.status}</td>
        <td>{student.scholarship_name}</td>
        <td>{student.phone}</td>
      </tr>
    ))}
  </tbody>
</table> */}


    </div>
  );
}

export default Chatgpt_import_excel;
