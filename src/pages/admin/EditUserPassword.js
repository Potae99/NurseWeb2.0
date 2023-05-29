import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Swal from 'sweetalert2';
import LoadingPage from '../LoadingPage';

function EditUserPassword() {
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    ///admin
    const [adminList, setAdminList] = useState([]);
    const [currentPageAdmin, setCurrentPageAdmin] = useState(1);
    const itemsPerPageAdmin = 10;
    const totalPagesAdmin = adminList ? Math.ceil(adminList.length / itemsPerPageAdmin) : 0;
    const [searchTermAdmin, setSearchTermAdmin] = useState("");

    const [nameTHAdmin, setNameTHAdmin] = useState("");
    const [adminID, setAdminID] = useState("");
    const [successAdmin, setSuccessAdmin] = useState(false);
    const [newPasswordAdmin, setNewPasswordAdmin] = useState("");
    const [confirmAdmin, setConfirmAdmin] = useState("");
    const [userIDAdmin, setUserIDAdmin] = useState("");
    const [passwordAdmin, setPasswordAdmin] = useState("");

    const OnchangeNewPasswordAdmin = (event) => {
        event.preventDefault();

        setNewPasswordAdmin(event.target.value);
    };

    const OnchangeConfirmAdmin = (event) => {
        event.preventDefault();

        setConfirmAdmin(event.target.value);
    };

    ///teacher
    const [teacherList, setTeacherList] = useState([]);
    const [currentPageTeacher, setCurrentPageTeacher] = useState(1);
    const itemsPerPageTeacher = 10;
    const totalPagesTeacher = teacherList ? Math.ceil(teacherList.length / itemsPerPageTeacher) : 0;
    const [searchTermTeacher, setSearchTermTeacher] = useState("");

    const [nameTHTeacher, setNameTHTeacher] = useState("");
    const [teacherID, setTeacherID] = useState("");
    const [successTeacher, setSuccessTeacher] = useState(false);
    const [newPasswordTeacher, setNewPasswordTeacher] = useState("");
    const [confirmTeacher, setConfirmTeacher] = useState("");
    const [userIDTeacher, setUserIDTeacher] = useState("");
    const [passwordTeacher, setPasswordTeacher] = useState("");

    const OnchangeNewPasswordTeacher = (event) => {
        event.preventDefault();

        setNewPasswordTeacher(event.target.value);
    };

    const OnchangeConfirmTeacher = (event) => {
        event.preventDefault();

        setConfirmTeacher(event.target.value);
    };

    ///student
    const [studentList, setStudentList] = useState([]);
    const [currentPageStudent, setCurrentPageStudent] = useState(1);
    const itemsPerPageStudent = 10;
    const totalPagesStudent = studentList ? Math.ceil(studentList.length / itemsPerPageStudent) : 0;
    const [searchTermStudent, setSearchTermStudent] = useState("");

    const [nameTHStudent, setNameTHStudent] = useState("");
    const [studentID, setStudentID] = useState("");
    const [successStudent, setSuccessStudent] = useState(false);
    const [newPasswordStudent, setNewPasswordStudent] = useState("");
    const [confirmStudent, setConfirmStudent] = useState("");
    const [userIDStudent, setUserIDStudent] = useState("");
    const [passwordStudent, setPasswordStudent] = useState("");
    const [status, setStatus] = useState(1);

    const OnchangeRole = (event) => {
        event.preventDefault();

        setRole(event.target.value);
        setSuccessAdmin(false);
        setSuccessStudent(false);
        setSuccessTeacher(false);
    }

    const OnchangeStatus = (event) => {
        event.preventDefault();

        setStatus(event.target.value);
        setSuccessStudent(false);
    };

    const OnchangeNewPasswordStudent = (event) => {
        event.preventDefault();

        setNewPasswordStudent(event.target.value);
    };

    const OnchangeConfirmStudent = (event) => {
        event.preventDefault();

        setConfirmStudent(event.target.value);
    };

    useEffect(() => {

        if (role === "admin") {
            const fetchDataAdmin = async () => {
                try {
                    const response = await axios.get(process.env.REACT_APP_API_URL + "/admin/list");
                    setAdminList(response.data.data);
                } catch (error) {
                    console.error("Error", error);
                } finally {
                    // เมื่อเสร็จสิ้นการโหลดหรือเกิดข้อผิดพลาด กำหนด isLoading เป็น false
                    setIsLoading(false);
                }
            };
            fetchDataAdmin();
        } else if (role === "teacher") {
            const fetchDataTeacher = async () => {
                try {
                    const response = await axios.get(process.env.REACT_APP_API_URL + "/teacher/list");
                    setTeacherList(response.data.data);
                } catch (error) {
                    console.error("Error", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchDataTeacher();
        } else if (role === "student") {
            const fetchDataStudent = async () => {
                try {
                    const response = await axios.get(process.env.REACT_APP_API_URL + "/student/list", {
                        params: {
                            status: status
                        }
                    });
                    setStudentList(response.data.data);
                } catch (error) {
                    console.error("Error", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchDataStudent();
        }
        else {
            setIsLoading(false);
        }
    }, [searchTermAdmin, role, searchTermTeacher, searchTermStudent, status]);


    ///admin
    const handleClickAdmin = (e, page) => {
        e.preventDefault();

        setCurrentPageAdmin(page);
    };

    const renderTableAdmin = () => {
        if (!adminList) {
            return null;
        }
        const start = (currentPageAdmin - 1) * itemsPerPageAdmin;
        const end = start + itemsPerPageAdmin;
        return filterAdmin.slice(start, end).map((_, index) => (
            <tbody
                key={start + index}
            >
                <tr
                    className=' hover:bg-gray-200 bg-white'
                >
                    <td
                        className=' py-4 px-6'
                    >
                        {start + index + 1}
                    </td>
                    <td
                        className=' py-4 px-6'
                    >
                        {_.adminID}
                    </td>
                    <td
                        className=' py-4 px-6'
                    >
                        {_.nameTH}
                    </td>
                    <td
                        className=' py-4 px-6 flex flex-row'
                    >
                        <div
                            className=' ml-3'
                            title='เลือกเพื่อแก้ไข'
                        >
                            <button
                                onClick={() => showDetailAdmin(_.userID, _.nameTH, _.adminID)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        ));
    };

    const showDetailAdmin = (userID, nameTH, adminID) => {
        setAdminID(adminID);
        setNameTHAdmin(nameTH);
        setUserIDAdmin(userID);

        setSuccessAdmin(true);
    };

    const ChangeAdminPassword = async (newPasswordAdmin, userIDAdmin) => {
        try {
            await axios.post(process.env.REACT_APP_API_URL + "/admin/password", {
                userID: userIDAdmin,
                password: newPasswordAdmin,
            });

            setPasswordAdmin([
                ...passwordAdmin, {
                    userID: userIDAdmin,
                    password: newPasswordAdmin,
                }
            ]);

            Swal.fire({
                icon: "success",
                title: "ยืนยันการเปลี่ยนรหัสผ่าน",
                showConfirmButton: false,
                timer: 1500,
            })
                .then(() => {
                    setSuccessAdmin(false);
                });
        }
        catch (error) {
            console.error("Error", error);
        }
    }

    const SaveAdmin = (newPasswordAdmin, confirmAdmin, userIDAdmin) => {
        if (newPasswordAdmin === "" || confirmAdmin === "") {
            Swal.fire({
                icon: "error",
                title: "โปรดกรอกข้อมูล",
                showConfirmButton: false,
                timer: 1500,
            })
        }
        else {
            if (newPasswordAdmin === confirmAdmin) {
                Swal.fire({
                    icon: "question",
                    title: "ต้องการเปลี่ยนรหัสผ่านหรือไม่ ?",
                    showConfirmButton: true,
                    showDenyButton: true,
                    confirmButtonText: "บันทึก",
                    denyButtonText: "ไม่บันทึก",
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            ChangeAdminPassword(newPasswordAdmin, userIDAdmin);
                        }
                        else if (result.isDenied) {
                            Swal.fire({
                                icon: "success",
                                title: "ยกเลิกการเปลี่ยนรหัสผ่าน",
                                showConfirmButton: false,
                                timer: 1500,
                            })
                                .then(() => {
                                    setSuccessAdmin(false);
                                });
                        }
                    });
            }
            else {
                Swal.fire({
                    icon: "warning",
                    title: "รหัสผ่านไม่ตรงกัน",
                    showConfirmButton: false,
                    timer: 1000,
                })
            }
        }
    }

    const handlePrevClickAdmin = (e) => {
        e.preventDefault();

        handleClickAdmin(e, currentPageAdmin - 1);
    };

    const handleNextClickAdmin = (e) => {
        e.preventDefault();

        handleClickAdmin(e, currentPageAdmin + 1);
    };

    const renderPageNumbersAdmin = () => {
        if (!adminList) {
            return null;
        }
        const pageNumbers = [];
        const maxPageRange = 3;
        const startPageRange = Math.max(1, currentPageAdmin - maxPageRange);
        const endPageRange = Math.min(totalPagesAdmin, currentPageAdmin + maxPageRange);

        pageNumbers.push(
            <li
                href="#!"
                onClick={(e) => handleClickAdmin(e, 1)}
                key={"first"}
                className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
            >
                <a
                    href='#!'
                    onClick={(e) => handleClickAdmin(e, 1)}
                >
                    หน้าแรก
                </a>
            </li>
        );

        if (currentPageAdmin > 1) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={handlePrevClickAdmin}
                    key={"prev"}
                    className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
                >
                    <a
                        href='#!'
                        onClick={handlePrevClickAdmin}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg>
                    </a>
                </li>
            );
        }

        for (let i = startPageRange; i <= endPageRange; i++) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={(e) => handleClickAdmin(e, 1)}
                    key={i}
                    className={`${currentPageAdmin === i ? "bg-orange-500 text-white" : "bg-white text-black"
                        } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
                >
                    <a
                        href='#!'
                        onClick={(e) => handleClickAdmin(e, 1)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        if (currentPageAdmin < totalPagesAdmin) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={handleNextClickAdmin}
                    key={"next"}
                    className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
                >
                    <a
                        href='#!'
                        onClick={handleNextClickAdmin}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                        </svg>
                    </a>
                </li>
            );
        }

        pageNumbers.push(
            <li
                href="#!"
                onClick={(e) => handleClickAdmin(e, totalPagesAdmin)}
                key={"last"}
                className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
            >
                <a
                    href='#!'
                    onClick={(e) => handleClickAdmin(e, totalPagesAdmin)}
                >
                    หน้าสุดท้าย
                </a>
            </li>
        );

        return pageNumbers;
    };

    const filterAdmin = adminList.filter((item) =>
        item.nameTH.toLowerCase().includes(searchTermAdmin.toLowerCase())
    );

    ///teacher
    const handleClickTeacher = (e, page) => {
        e.preventDefault();

        setCurrentPageTeacher(page);
    };

    const renderTableTeacher = () => {
        if (!teacherList) {
            return null;
        }
        const start = (currentPageTeacher - 1) * itemsPerPageTeacher;
        const end = start + itemsPerPageTeacher;
        return filterTeacher.slice(start, end).map((_, index) => (
            <tbody
                key={start + index}
            >
                <tr
                    className=' hover:bg-gray-200 bg-white'
                >
                    <td
                        className=' py-4 px-6'
                    >
                        {start + index + 1}
                    </td>
                    <td
                        className=' py-4 px-6'
                    >
                        {_.teacherID}
                    </td>
                    <td
                        className=' py-4 px-6'
                    >
                        {_.nameTH}
                    </td>
                    <td
                        className=' py-4 px-6 flex flex-row'
                    >
                        <div
                            className=' ml-3'
                            title='เลือกเพื่อแก้ไข'
                        >
                            <button
                                onClick={() => showDetailTeacher(_.userID, _.nameTH, _.teacherID)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        ));
    };

    const showDetailTeacher = (userID, nameTH, teacherID) => {
        setTeacherID(teacherID);
        setNameTHTeacher(nameTH);
        setUserIDTeacher(userID);

        setSuccessTeacher(true);
    };

    const ChangeTeacherPassword = async (newPasswordTeacher, userIDTeacher) => {
        try {
            await axios.post(process.env.REACT_APP_API_URL + "/teacher/password", {
                userID: userIDTeacher,
                password: newPasswordTeacher,
            });

            setPasswordTeacher([
                ...passwordTeacher, {
                    userID: userIDTeacher,
                    password: newPasswordTeacher,
                }
            ]);

            Swal.fire({
                icon: "success",
                title: "ยืนยันการเปลี่ยนรหัสผ่าน",
                showConfirmButton: false,
                timer: 1500,
            })
                .then(() => {
                    setSuccessTeacher(false);
                });
        }
        catch (error) {
            console.error("Error", error);
        }
    }

    const SaveTeacher = (newPasswordTeacher, confirmTeacher, userIDTeacher) => {
        if (newPasswordTeacher === "" || confirmTeacher === "") {
            Swal.fire({
                icon: "error",
                title: "โปรดกรอกข้อมูล",
                showConfirmButton: false,
                timer: 1500,
            })
        }
        else {
            if (newPasswordTeacher === confirmTeacher) {
                Swal.fire({
                    icon: "question",
                    title: "ต้องการเปลี่ยนรหัสผ่านหรือไม่ ?",
                    showConfirmButton: true,
                    showDenyButton: true,
                    confirmButtonText: "บันทึก",
                    denyButtonText: "ไม่บันทึก",
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            ChangeTeacherPassword(newPasswordTeacher, userIDTeacher);
                        }
                        else if (result.isDenied) {
                            Swal.fire({
                                icon: "success",
                                title: "ยกเลิกการเปลี่ยนรหัสผ่าน",
                                showConfirmButton: false,
                                timer: 1500,
                            })
                                .then(() => {
                                    setSuccessTeacher(false);
                                });
                        }
                    });
            }
            else {
                Swal.fire({
                    icon: "warning",
                    title: "รหัสผ่านไม่ตรงกัน",
                    showConfirmButton: false,
                    timer: 1000,
                })
            }
        }
    }

    const handlePrevClickTeacher = (e) => {
        e.preventDefault();

        handleClickTeacher(e, currentPageTeacher - 1);
    };

    const handleNextClickTeacher = (e) => {
        e.preventDefault();

        handleClickTeacher(e, currentPageTeacher + 1);
    };

    const renderPageNumbersTeacher = () => {
        if (!teacherList) {
            return null;
        }
        const pageNumbers = [];
        const maxPageRange = 3;
        const startPageRange = Math.max(1, currentPageTeacher - maxPageRange);
        const endPageRange = Math.min(totalPagesTeacher, currentPageTeacher + maxPageRange);

        pageNumbers.push(
            <li
                href="#!"
                onClick={(e) => handleClickTeacher(e, 1)}
                key={"first"}
                className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
            >
                <a
                    href='#!'
                    onClick={(e) => handleClickTeacher(e, 1)}
                >
                    หน้าแรก
                </a>
            </li>
        );

        if (currentPageTeacher > 1) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={handlePrevClickTeacher}
                    key={"prev"}
                    className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
                >
                    <a
                        href='#!'
                        onClick={handlePrevClickTeacher}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg>
                    </a>
                </li>
            );
        }

        for (let i = startPageRange; i <= endPageRange; i++) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={(e) => handleClickTeacher(e, 1)}
                    key={i}
                    className={`${currentPageTeacher === i ? "bg-orange-500 text-white" : "bg-white text-black"
                        } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
                >
                    <a
                        href='#!'
                        onClick={(e) => handleClickTeacher(e, 1)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        if (currentPageTeacher < totalPagesTeacher) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={handleNextClickTeacher}
                    key={"next"}
                    className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
                >
                    <a
                        href='#!'
                        onClick={handleNextClickTeacher}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                        </svg>
                    </a>
                </li>
            );
        }

        pageNumbers.push(
            <li
                href="#!"
                onClick={(e) => handleClickTeacher(e, totalPagesTeacher)}
                key={"last"}
                className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
            >
                <a
                    href='#!'
                    onClick={(e) => handleClickTeacher(e, totalPagesTeacher)}
                >
                    หน้าสุดท้าย
                </a>
            </li>
        );

        return pageNumbers;
    };

    const filterTeacher = teacherList.filter((item) =>
        item.nameTH.toLowerCase().includes(searchTermTeacher.toLowerCase())
    );

    ///student
    const handleClickStudent = (e, page) => {
        e.preventDefault();

        setCurrentPageStudent(page);
    };

    const renderTableStudent = () => {
        if (!studentList) {
            return null;
        }
        const start = (currentPageStudent - 1) * itemsPerPageStudent;
        const end = start + itemsPerPageStudent;
        return filterStudent.slice(start, end).map((_, index) => (
            <tbody
                key={start + index}
            >
                <tr
                    className=' hover:bg-gray-200 bg-white'
                >
                    <td
                        className=' py-4 px-6'
                    >
                        {start + index + 1}
                    </td>
                    <td
                        className=' py-4 px-6'
                    >
                        {_.studentID}
                    </td>
                    <td
                        className=' py-4 px-6'
                    >
                        {_.nameTH}
                    </td>
                    <td
                        className=' py-4 px-6 flex flex-row'
                    >
                        <div
                            className=' ml-3'
                            title='เลือกเพื่อแก้ไข'
                        >
                            <button
                                onClick={() => showDetailStudent(_.userID, _.nameTH, _.studentID)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        ));
    };

    const showDetailStudent = (userID, nameTH, studentID) => {
        setStudentID(studentID);
        setNameTHStudent(nameTH);
        setUserIDStudent(userID);

        setSuccessStudent(true);
    };

    const ChangeStudentPassword = async (newPasswordStudent, userIDStudent) => {
        try {
            await axios.post(process.env.REACT_APP_API_URL + "/student/password", {
                userID: userIDStudent,
                password: newPasswordStudent,
            });

            setPasswordStudent([
                ...passwordStudent, {
                    userID: userIDStudent,
                    password: newPasswordStudent,
                }
            ]);

            Swal.fire({
                icon: "success",
                title: "ยืนยันการเปลี่ยนรหัสผ่าน",
                showConfirmButton: false,
                timer: 1500,
            })
                .then(() => {
                    setSuccessStudent(false);
                });
        }
        catch (error) {
            console.error("Error", error);
        }
    }

    const SaveStudent = (newPasswordStudent, confirmStudent, userIDStudent) => {
        if (newPasswordStudent === "" || confirmStudent === "") {
            Swal.fire({
                icon: "error",
                title: "โปรดกรอกข้อมูล",
                showConfirmButton: false,
                timer: 1500,
            })
        }
        else {
            if (newPasswordStudent === confirmStudent) {
                Swal.fire({
                    icon: "question",
                    title: "ต้องการเปลี่ยนรหัสผ่านหรือไม่ ?",
                    showConfirmButton: true,
                    showDenyButton: true,
                    confirmButtonText: "บันทึก",
                    denyButtonText: "ไม่บันทึก",
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            ChangeStudentPassword(newPasswordStudent, userIDStudent);
                        }
                        else if (result.isDenied) {
                            Swal.fire({
                                icon: "success",
                                title: "ยกเลิกการเปลี่ยนรหัสผ่าน",
                                showConfirmButton: false,
                                timer: 1500,
                            })
                                .then(() => {
                                    setSuccessStudent(false);
                                });
                        }
                    });
            }
            else {
                Swal.fire({
                    icon: "warning",
                    title: "รหัสผ่านไม่ตรงกัน",
                    showConfirmButton: false,
                    timer: 1000,
                })
            }
        }
    }

    const handlePrevClickStudent = (e) => {
        e.preventDefault();

        handleClickStudent(e, currentPageStudent - 1);
    };

    const handleNextClickStudent = (e) => {
        e.preventDefault();

        handleClickStudent(e, currentPageStudent + 1);
    };

    const renderPageNumbersStudent = () => {
        if (!studentList) {
            return null;
        }
        const pageNumbers = [];
        const maxPageRange = 3;
        const startPageRange = Math.max(1, currentPageStudent - maxPageRange);
        const endPageRange = Math.min(totalPagesStudent, currentPageStudent + maxPageRange);

        pageNumbers.push(
            <li
                href="#!"
                onClick={(e) => handleClickStudent(e, 1)}
                key={"first"}
                className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
            >
                <a
                    href='#!'
                    onClick={(e) => handleClickStudent(e, 1)}
                >
                    หน้าแรก
                </a>
            </li>
        );

        if (currentPageStudent > 1) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={handlePrevClickStudent}
                    key={"prev"}
                    className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
                >
                    <a
                        href='#!'
                        onClick={handlePrevClickStudent}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg>
                    </a>
                </li>
            );
        }

        for (let i = startPageRange; i <= endPageRange; i++) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={(e) => handleClickStudent(e, 1)}
                    key={i}
                    className={`${currentPageStudent === i ? "bg-orange-500 text-white" : "bg-white text-black"
                        } hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer`}
                >
                    <a
                        href='#!'
                        onClick={(e) => handleClickStudent(e, 1)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        if (currentPageStudent < totalPagesStudent) {
            pageNumbers.push(
                <li
                    href="#!"
                    onClick={handleNextClickStudent}
                    key={"next"}
                    className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
                >
                    <a
                        href='#!'
                        onClick={handleNextClickStudent}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                        </svg>
                    </a>
                </li>
            );
        }

        pageNumbers.push(
            <li
                href="#!"
                onClick={(e) => handleClickStudent(e, totalPagesStudent)}
                key={"last"}
                className=' bg-white text-black hover:bg-orange-200 inline-block mx-1 px-3 py-1 rounded-lg cursor-pointer'
            >
                <a
                    href='#!'
                    onClick={(e) => handleClickStudent(e, totalPagesStudent)}
                >
                    หน้าสุดท้าย
                </a>
            </li>
        );

        return pageNumbers;
    };

    const filterStudent = studentList.filter((item) =>
        item.studentID.toLowerCase().includes(searchTermStudent.toLowerCase())
    );

    return (
        <>
            {isLoading ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div
                    className=' text-black space-y-7'
                >
                    <h1
                        className=' text-center text-4xl'
                    >
                        แก้ไขรหัสผ่าน
                    </h1>
                    <div
                        className=' flex space-x-5'
                    >
                        <p
                            className=' text-2xl ml-5'
                        >
                            บทบาท :
                        </p>
                        <select
                            className=' bg-white rounded-lg w-auto text-center text-2xl border border-black'
                            onChange={OnchangeRole}
                        >
                            <option
                                value={""}
                            >
                                ---โปรดระบุบทบาท---
                            </option>
                            <option
                                value={"admin"}
                            >
                                ผู้ดูแลระบบ
                            </option>
                            <option
                                value={"teacher"}
                            >
                                อาจารย์
                            </option>
                            <option
                                value={"student"}
                            >
                                นิสิต
                            </option>
                        </select>
                    </div>
                    <>
                        {
                            role === "admin" ?
                                <>
                                    <input
                                        className=' mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md'
                                        placeholder='ค้นหาผู้ดูแลระบบ... ( ชื่อผู้ดูแลระบบ )'
                                        value={searchTermAdmin}
                                        onChange={(e) => setSearchTermAdmin(e.target.value)}
                                    />
                                    <div
                                        className=' relative overflow-x-auto shadow-md sm:rounded-lg'
                                    >
                                        <table
                                            className=' w-full text-sm text-left text-black'
                                        >
                                            <thead
                                                className=' text-sm text-black uppercase bg-orange-300'
                                            >
                                                <tr
                                                >
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        ลำดับ
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        รหัสประจำตัว
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        ชื่อไทย
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        การกระทำ
                                                    </th>
                                                </tr>
                                            </thead>
                                            {renderTableAdmin()}
                                        </table>
                                    </div>
                                    <div
                                        className=' flex justify-center mt-4'
                                    >
                                        <ul
                                            className=' flex'
                                        >
                                            {renderPageNumbersAdmin()}
                                        </ul>
                                    </div>
                                    {!successAdmin ? (<></>) :
                                        <>
                                            <div
                                                className=' bg-gray-200 rounded-lg m-5 border border-black ring ring-black'
                                            >
                                                <pre
                                                    className=' m-5 text-2xl'
                                                >
                                                    รหัสประจำตัว : {adminID}
                                                    <br />
                                                    ชื่อไทย : {nameTHAdmin}
                                                    <br />
                                                    รหัสผ่านใหม่ :
                                                    <br />
                                                    <input
                                                        className=' w-2/3 rounded-lg bg-gray-400 px-6 text-black outline-none focus:border-black focus:shadow-md text-2xl border border-black'
                                                        type='password'
                                                        placeholder='กรอกรหัสผ่านใหม่'
                                                        onChange={OnchangeNewPasswordAdmin}
                                                    />
                                                    <br />
                                                    ยืนยันรหัสผ่าน :
                                                    <br />
                                                    <input
                                                        className=' w-2/3 rounded-lg bg-gray-400 px-6 text-black outline-none focus:border-black focus:shadow-md text-2xl border border-black'
                                                        type='password'
                                                        placeholder='ยืนยันรหัสผ่าน'
                                                        onChange={OnchangeConfirmAdmin}
                                                    />
                                                    <br />
                                                    <br />
                                                    <button
                                                        className=" bg-white relative inline-flex items-center justify-center py-2 overflow-hidden text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group"
                                                        type="submit"
                                                        value="submit"
                                                        onClick={() => SaveAdmin(newPasswordAdmin, confirmAdmin, userIDAdmin)}
                                                    >
                                                        <span
                                                            className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease"
                                                        >
                                                            <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <span
                                                            className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease"
                                                        >
                                                            บันทึก
                                                        </span>
                                                        <span
                                                            className="relative invisible"
                                                        >
                                                            Button Text
                                                        </span>
                                                    </button>
                                                </pre>
                                            </div>
                                        </>
                                    }
                                </> : <></>
                        }
                    </>
                    <>
                        {
                            role === "teacher" ?
                                <>
                                    <input
                                        className=' mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md'
                                        placeholder='ค้นหาอาจารย์... ( ชื่ออาจารย์ )'
                                        value={searchTermTeacher}
                                        onChange={(e) => setSearchTermTeacher(e.target.value)}
                                    />
                                    <div
                                        className=' relative overflow-x-auto shadow-md sm:rounded-lg'
                                    >
                                        <table
                                            className=' w-full text-sm text-left text-black'
                                        >
                                            <thead
                                                className=' text-sm text-black uppercase bg-orange-300'
                                            >
                                                <tr
                                                >
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        ลำดับ
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        รหัสประจำตัว
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        ชื่อไทย
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        การกระทำ
                                                    </th>
                                                </tr>
                                            </thead>
                                            {renderTableTeacher()}
                                        </table>
                                    </div>
                                    <div
                                        className=' flex justify-center mt-4'
                                    >
                                        <ul
                                            className=' flex'
                                        >
                                            {renderPageNumbersTeacher()}
                                        </ul>
                                    </div>
                                    {!successTeacher ? (<></>) :
                                        <>
                                            <div
                                                className=' bg-gray-200 rounded-lg m-5 border border-black ring ring-black'
                                            >
                                                <pre
                                                    className=' m-5 text-2xl'
                                                >
                                                    รหัสประจำตัว : {teacherID}
                                                    <br />
                                                    ชื่อไทย : {nameTHTeacher}
                                                    <br />
                                                    รหัสผ่านใหม่ :
                                                    <br />
                                                    <input
                                                        className=' w-2/3 rounded-lg bg-gray-400 px-6 text-black outline-none focus:border-black focus:shadow-md text-2xl border border-black'
                                                        type='password'
                                                        placeholder='กรอกรหัสผ่านใหม่'
                                                        onChange={OnchangeNewPasswordTeacher}
                                                    />
                                                    <br />
                                                    ยืนยันรหัสผ่าน :
                                                    <br />
                                                    <input
                                                        className=' w-2/3 rounded-lg bg-gray-400 px-6 text-black outline-none focus:border-black focus:shadow-md text-2xl border border-black'
                                                        type='password'
                                                        placeholder='ยืนยันรหัสผ่าน'
                                                        onChange={OnchangeConfirmTeacher}
                                                    />
                                                    <br />
                                                    <br />
                                                    <button
                                                        className=" bg-white relative inline-flex items-center justify-center py-2 overflow-hidden text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group"
                                                        type="submit"
                                                        value="submit"
                                                        onClick={() => SaveTeacher(newPasswordTeacher, confirmTeacher, userIDTeacher)}
                                                    >
                                                        <span
                                                            className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease"
                                                        >
                                                            <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <span
                                                            className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease"
                                                        >
                                                            บันทึก
                                                        </span>
                                                        <span
                                                            className="relative invisible"
                                                        >
                                                            Button Text
                                                        </span>
                                                    </button>
                                                </pre>
                                            </div>
                                        </>
                                    }
                                </> : <></>
                        }
                    </>
                    <>
                        {
                            role === "student" ?
                                <>
                                    <div
                                        className=' flex space-x-5'
                                    >
                                        <p
                                            className=' text-2xl ml-5'
                                        >
                                            สถานะของนิสิต :
                                        </p>
                                        <select
                                            className=' bg-white rounded-lg w-auto text-center text-2xl border border-black'
                                            onChange={OnchangeStatus}
                                            value={status}
                                        >
                                            <option
                                                value={""}
                                            >
                                                ---โปรดระบุสถานะ---
                                            </option>
                                            <option
                                                value={1}
                                            >
                                                กำลังศึกษา
                                            </option>
                                            <option
                                                value={0}
                                            >
                                                จบการศึกษา
                                            </option>
                                        </select>
                                    </div>
                                    <input
                                        className=' mb-5 w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md'
                                        placeholder='ค้นหานิสิต... ( รหัสนิสิต )'
                                        value={searchTermStudent}
                                        onChange={(e) => setSearchTermStudent(e.target.value)}
                                    />
                                    <div
                                        className=' relative overflow-x-auto shadow-md sm:rounded-lg'
                                    >
                                        <table
                                            className=' w-full text-sm text-left text-black'
                                        >
                                            <thead
                                                className=' text-sm text-black uppercase bg-orange-300'
                                            >
                                                <tr
                                                >
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        ลำดับ
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        รหัสประจำตัว
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        ชื่อไทย
                                                    </th>
                                                    <th
                                                        scope=' col'
                                                        className=' py-3 px-6'
                                                    >
                                                        การกระทำ
                                                    </th>
                                                </tr>
                                            </thead>
                                            {renderTableStudent()}
                                        </table>
                                    </div>
                                    <div
                                        className=' flex justify-center mt-4'
                                    >
                                        <ul
                                            className=' flex'
                                        >
                                            {renderPageNumbersStudent()}
                                        </ul>
                                    </div>
                                    {!successStudent ? (<></>) :
                                        <>
                                            <div
                                                className=' bg-gray-200 rounded-lg m-5 border border-black ring ring-black'
                                            >
                                                <pre
                                                    className=' m-5 text-2xl'
                                                >
                                                    รหัสประจำตัว : {studentID}
                                                    <br />
                                                    ชื่อไทย : {nameTHStudent}
                                                    <br />
                                                    รหัสผ่านใหม่ :
                                                    <br />
                                                    <input
                                                        className=' w-2/3 rounded-lg bg-gray-400 px-6 text-black outline-none focus:border-black focus:shadow-md text-2xl border border-black'
                                                        type='password'
                                                        placeholder='กรอกรหัสผ่านใหม่'
                                                        onChange={OnchangeNewPasswordStudent}
                                                    />
                                                    <br />
                                                    ยืนยันรหัสผ่าน :
                                                    <br />
                                                    <input
                                                        className=' w-2/3 rounded-lg bg-gray-400 px-6 text-black outline-none focus:border-black focus:shadow-md text-2xl border border-black'
                                                        type='password'
                                                        placeholder='ยืนยันรหัสผ่าน'
                                                        onChange={OnchangeConfirmStudent}
                                                    />
                                                    <br />
                                                    <br />
                                                    <button
                                                        className=" bg-white relative inline-flex items-center justify-center py-2 overflow-hidden text-black transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group"
                                                        type="submit"
                                                        value="submit"
                                                        onClick={() => SaveStudent(newPasswordStudent, confirmStudent, userIDStudent)}
                                                    >
                                                        <span
                                                            className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease"
                                                        >
                                                            <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <span
                                                            className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease"
                                                        >
                                                            บันทึก
                                                        </span>
                                                        <span
                                                            className="relative invisible"
                                                        >
                                                            Button Text
                                                        </span>
                                                    </button>
                                                </pre>
                                            </div>
                                        </>
                                    }
                                </> : <></>
                        }
                    </>
                </div>
            )}

        </>
    )
}

export default EditUserPassword