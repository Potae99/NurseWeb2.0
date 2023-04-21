import React,{useState} from 'react'
import * as XLSX from 'xlsx';


export const Import_excel = () => {


    

    const [Filename, setFilename] = useState(null);

    const handleFile = async (e) =>{

        
        const file = e.target.files[0];
        setFilename(file.name)
        const data = await file.arrayBuffer();
        /* parse and load first worksheet */
        const workbook = XLSX.read(data);

        // xlxs to json
        const workSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(workSheet);


        // console.log(jsonData);
    };


  return (
    <div>
        <h1>potae</h1>
        {Filename && (
            <p>Filename:<span>{Filename}</span></p>

        )}

        <input type='file' onChange={(e) => handleFile(e)} />
    </div>
  )
}
