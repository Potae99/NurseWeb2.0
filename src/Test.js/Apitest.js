import React, { useState } from 'react'
import axios from 'axios'

function Apitest() {
  const [post,setPost] = useState()
  const handdleInput = (event) =>{

  }
  return (
    <div>
      <input type="text" onChange={handdleInput} name=""></input>
      <input type ="text" onChange={handdleInput}></input>
      <button>Submit</button>
    </div>
  )
}

export default Apitest