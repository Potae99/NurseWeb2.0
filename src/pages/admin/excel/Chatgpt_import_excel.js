import { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

function Chatgpt_import_excel() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };





  const list_allow_header = [
    { name: "IDnumber", colNum: 0 },
    { name: "username", colNum: 1 },
    { name: "Name", colNum: 2 },
    { name: "userPassword", colNum: 3 },
    { name: "roleIDs", colNum: 4 },
    { name: "phone", colNum: 5 },
    { name: "gender", colNum: 6 },
    // { name: "Test", colNum: 1 },
  ];






  const handleSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.onload = () => {
      const workbook = XLSX.read(reader.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);

      const students = [];
      for (let row of data) {
        const student = {
          yearStartEnroll: String(row[1]),
          generation: String(row[2]),
          Idnumber: (row[3]),
          studentID: String(row[4]),
          nameTH: String(row[5]),
          nameENG: String(row[6]),
          password: String(row[7]),
          gender: String(row[8]),
          Birthday: String(row[9]),
          ethnicity: String(row[10]),
          nationality: String(row[11]),
          religion: String(row[12]),
          houseadd_houseNo: String(row[13]),
          houseadd_village: String(row[14]),
          houseadd_road: String(row[15]),
          houseadd_alley: String(row[16]),
          houseadd_subDistrict: String(row[17]),
          houseadd_district: String(row[18]),
          houseadd_province: String(row[19]),
          houseadd_postalCode: String(row[20]),
          presentAddress: String(row[21]),
          IDline: String(row[22]),
          email: String(row[23]),
          status: String(row[24]),
        };
        console.log(student);
        students.push(student);

      }

      axios.post(process.env.REACT_APP_API_URL + "/student", students)
        .then(response => {
          console.log(response.data);
          console.log(students);
        })
        .catch(error => {
          console.error(error.response.data);

          console.log(data);
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
    </div>
  );
}

export default Chatgpt_import_excel;
