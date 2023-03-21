import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// components
import Layout from './components/Layout';

// page
import Login from './pages/Login';

// admin
import AdminHome from './pages/admin/AdminHome';
import AddStudent from './pages/admin/student/AddStudent';
import AddTeacher from './pages/admin/teacher/AddTeacher';
import AddAdmin from './pages/admin/AddAdmin';
import EditAdmin from './pages/admin/EditAdmin';
import EditStudent from './pages/admin/student/EditStudent';
import EditTeacher from './pages/admin/teacher/EditTeacher';
import StudentDetail from './pages/admin/student/StudentDetail';
import TeacherDetail from './pages/admin/teacher/TeacherDetail';
import AdminDetail from './pages/admin/AdminDetail';
import AddCategory from './pages/admin/course/category/AddCategory';
import AddSyllabus from './pages/admin/course/syllabus/AddSyllabus';
import AdminSyllabus from './pages/admin/course/syllabus/AdminSyllabus';
import SyllabusDetail from './pages/admin/course/syllabus/SyllabusDetail';
import AddCourse from './pages/admin/course/AddCourse';
import Allcourse from './pages/admin/course/Allcourse';
import CourseDetail from './pages/admin/course/CourseDetail';


//student
import Studenthome from './pages/student/Studenthome';

//teacher
import Teacherhome from './pages/teacher/Teacherhome';

// test
import Apitest from './Test.js/Apitest';
import Test2 from './Test.js/Test2';





// user Token for authn
import useToken from '../src/components/useToken';


const router = [
  
  {
    path: "/Apitest",
    element: <Apitest />,

  },
  {
    path: "/Apitest2",
    element: <Test2 />,

  },
  
  {
    path: "/course/add",
    element: <AddCourse />,
  },
  {
    path: "/course/category/add",
    element: <AddCategory />,
  },
  {
    path: "/admin/edit/:userID/*",
    element: <EditAdmin />,
  },
  {
    path: "/admin/student/edit/:userID/*",
    element: <EditStudent />,
  },
  {
    path: "/admin/teacher/edit/:userID/*",
    element: <EditTeacher />,
  },
  {
    path: "*",
    element: <AdminHome />,
  },
  {
    path: "/admin/add/student",
    element: <AddStudent />,
  },
  {
    path: "/admin/add/teacher",
    element: <AddTeacher />,
  },
  {
    path: "/admin/add/admin",
    element: <AddAdmin />,
  },
  {
    path: "/admin/detail/:userID/*",
    element: <AdminDetail />,
  },
  {
    path: "/admin/student/detail/:userID/*",
    element: <StudentDetail />,
  },
  {
    path: "/admin/teacher/detail/:userID/*",
    element: <TeacherDetail />,
  },
  {
    path: "/student/home",
    element: <Studenthome />,
  },
  {
    path: "/teacher/home",
    element: <Teacherhome />,
  },
  {
    path: "/admin/course/category/Add",
    element: <AddCategory />,
  },
  {
    path: "/admin/course/syllabus/Add",
    element: <AddSyllabus />,
  },
  {
    path: "/admin/course/syllabus/adminsyllabus",
    element: <AdminSyllabus />,
  },
  {
    path: "/admin/course/syllabus/detail/:userID/*",
    element: <SyllabusDetail />,
  },
  {
    path: "/admin/course/all",
    element: <Allcourse />,
  },
  {
    path: "/admin/course/detail",
    element: <CourseDetail />,
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