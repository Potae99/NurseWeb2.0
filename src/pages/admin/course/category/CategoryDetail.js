import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'

function CategoryDetail() {

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(process.env.REACT_APP_API_URL + "/course/category")
    .then( res => {
      console.log(res.data);

      if (res.data.error === true){
        console.log(res.data);
        console.log("ERROR FOUND WHEN GET DATA FROM API");
        return;
      }
      setData(res.data.data)
    })
    .catch( error => {
      console.log(error.res);
    });
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log(data)

  return (
    <div className=' text-black bg-white min-h-screen'>
      <h1 className=' text-center mt-3 ml-3 text-2xl'>หมวดวิชา : {}</h1>
      </div>
  )
}

export default CategoryDetail