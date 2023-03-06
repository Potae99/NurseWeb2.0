import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Test2() {
    const [postData, setPostData] = useState({ title: '', body: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post(process.env.REACT_APP_API_URL + "/student/list", postData);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
      

  return (
    <form onSubmit={handleSubmit}>
  <input
    type="text"
    value={postData.title}
    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
    placeholder="Title"
  />
  <textarea
    value={postData.body}
    onChange={(e) => setPostData({ ...postData, body: e.target.value })}
    placeholder="Body"
  ></textarea>
  <button type="submit">Submit</button>
</form>

  )
}

export default Test2