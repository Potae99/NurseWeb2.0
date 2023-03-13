import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// components
import Layout from './components/Layout';

// page
import Login from './pages/Login';

// admin
import Home_admin from './pages/admin/Home_admin';
import Home_admin_adduser from './pages/admin/Home_admin_adduser';
import Home_admin_userdetail from './pages/admin/Home_admin_userdetail';
import Home_admin_edituser from './pages/admin/Home_admin_edituser';
import Admin_sylllabus from './pages/admin/Admin_sylllabus';
import Admin_addcuriculum from './pages/admin/Admin_addcuriculum';
import Home_admin_studentDetail from './pages/admin/Home_admin_studentDetail';
import Admin_course from './pages/admin/Admin_course';
import Admin_course_detail from './pages/admin/Admin_course_detail';

// test
import Apitest from './Test.js/Apitest';
import Test2 from './Test.js/Test2';
import Curriculum_detail from './pages/admin/Curriculum_detail';



// user Token for authn
import useToken from '../src/components/useToken';


const router = [
  {
    path: "/",
    element: <Home_admin />,
  },
  {
    path: "/admin/user/add",
    element: <Home_admin_adduser />,
  },
  {
    path: "/admin/user/detail",
    element: <Home_admin_userdetail />,
  },
  {
    path: "/admin/user/edit",
    element: <Home_admin_edituser />,
  },
  {
    path: "/admin/syllabus",
    element: <Admin_sylllabus />,

  },
  {
    path: "/admin/curriculum/add",
    element: <Admin_addcuriculum />,

  },
  {
    path: "/Apitest",
    element: <Apitest />,

  },
  {
    path: "/Apitest2",
    element: <Test2 />,

  },
  {

    path: "/student_detail/:userID",
    element: <Home_admin_studentDetail />,

    path: "/admin/curriculum/detail",
    element: <Curriculum_detail />,

  },
  {
    path: "/admin/course",
    element: <Admin_course />,

  },
  {
    path: "/admin/course/detail",
    element: <Admin_course_detail />,
  },
];

function App() {
  // const [token, setToken] = useState();
  const { token, setToken } = useToken();

  // check if user is login if not return login page
  console.log("--------------");
  console.log(token);
  console.log("--------------");
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      {/* layout for select path and auth condition */}
      <Layout session={token} setToken={setToken}>

        {/* show all page for test only */}
        {/* {
          router.map((item, index) => (
            <div className=' m-3 border shadow'>
              <h1 className=' text-xs font-bold'> {item.path} </h1>
              <div className=' border border-green-800 m-3 '>
                {item.element}
              </div>
            </div>
          ))
        } */}

        <Router>
          {/* <div> */}
            <Routes>
              {
                router.map((item, index) => (
                  <Route path={item.path} element={item.element} />
                ))
              }
            </Routes>
          {/* </div> */}
        </Router>

      </Layout>




    </div>
  )
}

export default App