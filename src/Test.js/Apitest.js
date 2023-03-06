import React from 'react'
import axios from 'axios'

const Apitest = () => {
    const userToPost = {

      nameTH :"โปเต้", 
      nameENG:"potae", 
      password:"1234", 
      gender:"superman", 
      Idnumber: null, 
      Birthday: null, 
      IDnumber_Path: null, 
      ethnicity: null, 
      nationality: null, 
      religion: null, 
      houseadd_Path: null, 
      houseadd_houseNo : null, 
      houseadd_village: null, 
      houseadd_road: null, 
      houseadd_alley: null, 
      houseadd_subDistrict: null, 
      houseadd_district: null, 
      houseadd_province: null, 
      houseadd_postalCode: null, 
      presentAddress: null, 
      phone: null, 
      IDline: null, 
      email: null
    
    };
    const handleClick = async () => {
        const response = await axios
            .post(process.env.REACT_APP_API_URL + "/student", userToPost)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
        }
    };
    return (
        <div>
          <h1>{}</h1>
          <p>{}</p>
          <p>{}</p>
            <button onClick={handleClick}>Click to send POST request</button>
        </div>
    );
};

export default Apitest;