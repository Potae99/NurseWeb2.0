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
import Evalsum from './pages/admin/eval/Evalsum';
import Evalsearch from './pages/admin/eval/Evalsearch';
import Adminoverall from './pages/admin/Adminoverall';



//student
import Studenthome from './pages/student/Studenthome';
import Studentevalpractice from './pages/student/eval/Studentevalpractice';
import Studentevaltheory from './pages/student/eval/Studentevaltheory';
import StudentevalCourse from './pages/student/eval/StudentevalCourse';
import StudentallEval from './pages/student/eval/StudentallEval';

//teacher
import Teacherhome from './pages/teacher/Teacherhome';
import TeacherEval_search from './pages/teacher/TeacherEval_search';
import SubjectManagement from './pages/teacher/SubjectManagement';
import View_taugheval from './pages/teacher/View_taugheval';
import Taugh_sum from './pages/teacher/Taugh_sum';
import Taugh_sumprac from './pages/teacher/Taugh_sumprac';

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
    path: "/student/eval/practice/:evalTaughID/*",
    element: <Studentevalpractice />,
    level: "student"

  },
  {
    path: "/student/eval/theory/:evalTaughID/*",
    element: <Studentevaltheory />,
    level: "student"

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
    path: "/student/eval/course/:studyID/*",
    element: <StudentevalCourse />,
    level: "student"

  },
  {
    path: "/student/eval/all",
    element: <StudentallEval />,
    level: "student"

  },
  {
    path: "/admin/eval/sum/:classID/*",
    element: <Evalsum />,
    level: "admin"

  },
  {
    path: "/teacher/eval/sum/:classID/*",
    element: <Evalsum />,
    level: "teacher"

  },
  {
    path: "/admin/eval/search",
    element: <Evalsearch />,
    level: "admin"

  },
  {
    path: "/teacher/eval/search",
    element: <TeacherEval_search />,
    level: "teacher"

  },
  {
    path: "/admin/overall",
    element: <Adminoverall />,
    level: "admin"
  },
  {
    path: "/teacher/subject",
    element: <SubjectManagement />,
    level: "teacher"

  },
  {
    path: "/teacher/Taughview",
    element: <View_taugheval />,
    level: "teacher"

  },
  {
    path: "/teacher/sum/theory/:classID/*",
    element: <Taugh_sum />,
    level: "teacher"

  },
  {
    path: "/teacher/sum/practice/:classID/*",
    element: <Taugh_sumprac />,
    level: "teacher"

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