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
          yearStartEnroll: String(row[1]),
          generation: String(row[2]),
          Idnumber: String(row[3]),
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