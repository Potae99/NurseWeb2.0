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
import AddWorkHistory from './pages/admin/workHistory/AddWorkHistory';
import WorkHistoryList from './pages/admin/workHistory/WorkHistoryList';
import WorkHistoryDetail from './pages/admin/workHistory/WorkHistoryDetail';
import Addscholarship from './pages/admin/Scholarship/Addscholarship';
import Addcourse_tosyllabus from './pages/admin/course/syllabus/Addcourse_tosyllabus';
import CategoryDetail from "./pages/admin/course/category/CategoryDetail"
import Addclass from './pages/admin/course/class/Addclass';
import Classdetail from './pages/admin/course/class/Classdetail';



//student
import Studenthome from './pages/student/Studenthome';
import Studentevalpractice from './pages/student/Studentevalpractice';
import Studentevaltheory from './pages/student/Studentevaltheory';
import StudentevalCourse from './pages/student/StudentevalCourse';

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
    level: "admin"
  },
  {
    path: "/Apitest2",
    element: <Test2 />,
    level: "admin"

  },
  {
    path: "/course/add",
    element: <AddCourse />,
    level: "admin"

  },
  {
    path: "/course/category/add",
    element: <AddCategory />,
    level: "admin"

  },
  {
    path: "/admin/edit/:userID/*",
    element: <EditAdmin />,
    level: "admin"

  },
  {
    path: "/admin/student/edit/:userID/*",
    element: <EditStudent />,
    level: "admin"

  },
  {
    path: "/admin/teacher/edit/:userID/*",
    element: <EditTeacher />,
    level: "admin"

  },
  {
    path: "/admin/home/*",
    element: <AdminHome />,
    level: "admin"

  },
  {
    path: "/admin/add/student",
    element: <AddStudent />,
    level: "admin"

  },
  {
    path: "/admin/add/teacher",
    element: <AddTeacher />,
    level: "admin"

  },
  {
    path: "/admin/add/admin",
    element: <AddAdmin />,
    level: "admin"

  },
  {
    path: "/admin/detail/:userID/*",
    element: <AdminDetail />,
    level: "admin"

  },
  {
    path: "/admin/student/detail/:userID/*",
    element: <StudentDetail />,
    level: "admin"

  },
  {
    path: "/admin/teacher/detail/:userID/*",
    element: <TeacherDetail />,
    level: "admin"

  },
  {
    path: "/student/home",
    element: <Studenthome />,
    level: "student"

  },
  {
    path: "/teacher/home",
    element: <Teacherhome />,
    level: "teacher"

  },
  {
    path: "/admin/course/category/Add",
    element: <AddCategory />,
    level: "student"

  },
  {
    path: "/admin/course/syllabus/Add",
    element: <AddSyllabus />,
    level: "admin"

  },
  {
    path: "/admin/course/syllabus/adminsyllabus",
    element: <AdminSyllabus />,
    level: "admin"

  },
  {
    path: "/admin/course/syllabus/:syllabusID/*",
    element: <SyllabusDetail />,
    level: "admin"

  },
  {
    path: "/admin/course/all",
    element: <Allcourse />,
    level: "admin"

  },
  {
    path: "/admin/course/detail/:courseID/*",
    element: <CourseDetail />,
    level: "admin"
  },
  {
    path: "/admin/student/work/add/:userID/*",
    element: <AddWorkHistory />,
    level: "admin"
  },
  {
    path: "/admin/student/work/list/:userID/*",
    element: <WorkHistoryList />,
    level: "admin"
  },
  {
    path: "/admin/student/work/detail/:workHistoryID/*",
    element: <WorkHistoryDetail />,
    level: "admin"
  },
  {
    path: "/admin/scholarship/add",
    element: <Addscholarship />,
    level: "admin"

  },
  {
    path: "/student/eval/practice",
    element: <Studentevalpractice />,
    level: "student"

  },
  {
    path: "/student/eval/theory",
    element: <Studentevaltheory />,
    level: "admin"

  },
  {
    path: "/admin/course/syllabus/adminsyllabus/addcourse",
    element: <Addcourse_tosyllabus />,
    level: "admin"

  },
  {
    path: "/admin/course/category/detail/:categoryID/*",
    element: <CategoryDetail />,
    level: "admin"

  },
  {
    path: "/admin/add/class",
    element: <Addclass />,
    level: "admin"

  },
  {
    path: "/admin/class/detail/:classID/*",
    element: <Classdetail />,
    level: "admin"

  },
  {
    path: "/student/eval/course",
    element: <StudentevalCourse />,
    level: "student"

  }

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
              router.map((item, index) => {
                if (item.level == token.level)
                  return (<Route key={index} path={item.path} element={item.element} />);
              })
            }
          </Routes>
          {/* </div> */}
        </Router>

      </Layout>




    </div>
  )
}

export default App