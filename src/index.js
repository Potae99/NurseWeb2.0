import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home_admin from './pages/admin/Home_admin';
import Home_admin_adduser from './pages/admin/Home_admin_adduser';
import Home_admin_userdetail from './pages/admin/Home_admin_userdetail';
import Home_admin_edituser from './pages/admin/Home_admin_edituser';
import Admin_sylllabus from './pages/admin/Admin_sylllabus';
import Admin_addcuriculum from './pages/admin/Admin_addcuriculum';
import Home_admin_studentDetail from './pages/admin/Home_admin_studentDetail';
import App from './App';
import Apitest from './Test.js/Apitest';
import Test2 from './Test.js/Test2';
import Curriculum_detail from './pages/admin/Curriculum_detail';
import Admin_course from './pages/admin/Admin_course';
import Admin_course_detail from './pages/admin/Admin_course_detail';
import Home_admin_addteacher from './pages/admin/Home_admin_addteacher';

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App></App>,
  },
  {
    path: "/",
    element: <Home_admin/>,
  },
  {
    path: "admin/user/add",
    element: <Home_admin_adduser/>,
  },
  {
    path: "admin/user/detail",
    element: <Home_admin_userdetail/>,
  },
  {
    path: "admin/user/edit",
    element: <Home_admin_edituser/>,
  },
  {
    path: "admin/syllabus",
    element: <Admin_sylllabus/>,

  },
  {
    path: "admin/curriculum/add",
    element: <Admin_addcuriculum/>,

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

    path: "student_detail/:userID",
    element: <Home_admin_studentDetail/>,

    path: "/admin/curriculum/detail",
    element: <Curriculum_detail/>,

  },
  {
    path: "/admin/course",
    element: <Admin_course/>,

  },
  {
    path: "/admin/course/detail",
    element: <Admin_course_detail/>,


  },
  {
    path: "/admin/add/teacher",
    element: <Home_admin_addteacher/>,


  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
