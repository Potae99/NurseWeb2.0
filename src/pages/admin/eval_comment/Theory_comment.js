import React from 'react'
import { useParams } from 'react-router-dom';

function Theory_comment() {

  const { classID } = useParams();
  console.log(classID); // log the value of the classID parameter


  return (
    <div>Theory_comment</div>
  )
}

export default Theory_comment