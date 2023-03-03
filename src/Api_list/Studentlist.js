import React from 'react';
import axios from 'axios';

export default class Studentlist extends React.Component {
  state = {
    student: []
  }

  componentDidMount() {
    axios.get(`http://18.136.148.247:16490/student/list`)
      .then(res => {
        const student = res.data.data;
        this.setState({ student });
      })
  }
  render() {
    return (
        <>
        {
          this.state.student
            .map(student =>
              <p key={student.userID}>{student.nameTH}</p>
            )
        }
        </>
      

    )
  }
}