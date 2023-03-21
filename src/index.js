import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminHome from './pages/admin/AdminHome';
import AdminAddUser from './pages/admin/AdminAddUser';
import AdminSyllabus from './pages/admin/AdminSyllabus';
import AdminAddCurriculum from './pages/admin/AdminAddCurriculum';
import AdminStudentDetail from './pages/admin/AdminStudentDetail';
import App from './App';
import Apitest from './Test.js/Apitest';
import Test2 from './Test.js/Test2';
import CurriculumDetail from './pages/admin/CurriculumDetail';
import AdminCourse from './pages/admin/AdminCourse';
import AdminCourseDetail from './pages/admin/AdminCourseDetail';
import AdminStudentEdit from './pages/admin/AdminStudentEdit';
import AdminTeacherDetail from './pages/admin/AdminTeacherDetail';
import AdminDetail from './pages/admin/AdminDetail';
import AdminTeacherEdit from './pages/admin/AdminTeacherEdit';
import AdminAddStudent from './pages/admin/AdminAddStudent';
import AdminAddTeacher from './pages/admin/AdminAddTeacher';
import AdminAddAdmin from './pages/admin/AdminAddAdmin';
import AdminDetailEdit from './pages/admin/AdminDetailEdit';

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App></App>,
  },
  {
    path: "/admin/home/*",
    element: <AdminHome/>,
  },
  {
    path: "/admin/user/add",
    element: <AdminAddUser/>,
  },
  {
    path: "admin/syllabus",
    element: <AdminSyllabus/>,

  },
  {
    path: "admin/curriculum/add",
    element: <AdminAddCurriculum/>,

  },
  {
    path: "Apitest",
    element: <Apitest/>,

  },
  {
    path: "Apitest2",
    element: <Test2/>,

  },
  {

    path: "/admin/student/detail/:userID/*",
    element: <AdminStudentDetail/>,
  },
  {

    path: "/admin/curriculum/detail",
    element: <CurriculumDetail/>,

  },
  {
    path: "/admin/course",
    element: <AdminCourse/>,

  },
  {
    path: "/admin/course/detail",
    element: <AdminCourseDetail/>,
  },
  {
    path: "/admin/student/edit/:userID/*",
    element: <AdminStudentEdit/>,
  },
  {
    path: "/admin/teacher/:userID/*",
    element: <AdminTeacherDetail/>,
  },
  {
    path: "/admin/detail/:userID/*",
    element: <AdminDetail/>,
  },
  {
    path: "/admin/teacher/edit/:userID/*",
    element: <AdminTeacherEdit/>,
  },
  {
    path: "/admin/add/student",
    element: <AdminAddStudent/>,
  },
  {
    path: "/admin/add/teacher",
    element: <AdminAddTeacher/>,
  },
  {
    path: "/admin/add/admin",
    element: <AdminAddAdmin/>,
  },
  {
    path: "/admin/detail/edit/:userID/*",
    element: <AdminDetailEdit/>,
  }
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
