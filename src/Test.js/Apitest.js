import React, { useState } from 'react'
import axios from 'axios'

function Apitest() {
  const [post,setPost] = useState({
    userID:"",
    IDnumber:"",
    nameTH:"",
    nameENG:"",
    gender:""
  })
  const handleInput = (event) =>{
    setPost({...post,[event.target.name]: event.target.value})
  }
  function handleSubmit(event){
    event.preventDefault()
    axios.post(process.env.REACT_APP_API_URL + "/student/list",{post})
    .then(response => console.log(response) )
    .catch(error => console.log(error))
  }

  return (
    <div className=' flex flex-col' onSubmit={handleSubmit}>
      <input className= " border border-gray-900" type="text" onChange={handleInput} name="userID"></input>
      <input className= " border border-gray-900" type ="text" onChange={handleInput} name="IDnumber"></input>
      <input className= " border border-gray-900" type ="text" onChange={handleInput} name="nameTH"></input>
      <input className= " border border-gray-900" type ="text" onChange={handleInput} name="nameENG"></input>
      <input className= " border border-gray-900" type ="text" onChange={handleInput} name="gender"></input>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default Apitest