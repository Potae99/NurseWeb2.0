import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Addcourse_tosyllabus() {
    const [syllabusID, setsyllabusID] = useState("");
    const [courseID, setcourseID] = useState("");
    const [data, setData] = useState([]);

    const addcourseTosyllabus = () => {

        axios.post(process.env.REACT_APP_API_URL + "/course/inSyllabus", {
            syllabusID:syllabusID,
            courseID:courseID

        }).then(() => {
            setData([
                ...data,
                {
                    syllabusID:syllabusID,
                    courseID:courseID


                }
            ])
            window.location.href = "/";
        })
    }
  return (
    <div>Addcourse_tosyllabus</div>
  )
}

export default Addcourse_tosyllabus