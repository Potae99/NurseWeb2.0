import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { format, sub } from 'date-fns';
import LoadingPage from '../../LoadingPage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

function WorkHistoryDetail() {

    const [data, setData] = useState([]);
    const [nameTH, setnameTH] = useState('');
    const [workHistoryList, setWorkHistoryList] = useState([]);

    const [startWork, setStartWork] = useState("");
    const [endWork, setEndWork] = useState("");
    const [department, setDepartment] = useState("");
    const [workAddressName, setWorkAddressName] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [village, setVillage] = useState("");
    const [road, setRoad] = useState("");
    const [alley, setAlley] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [subDistrict, setSubDistrict] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [userID, setUserID] = useState("");

    const { workHistoryID } = useParams();

    const [provinceApi, setProvinceApi] = useState([]);
    const [amphures, setAmphures] = useState([]);
    const [tambons, setTambons] = useState([]);
    const [zipCode, setZipCode] = useState('');

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 700,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const deleteWorkHistory = () => {
        Swal.fire({
            title: 'ต้องการลบประวัติการทำงานหรือไม่?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'ใช่',
            denyButtonText: `ไม่ใช่`,
            cancelButtonText: 'ยกเลิก'
        })
            .then((results) => {
                if (results.isConfirmed) {
                    axios.delete(process.env.REACT_APP_API_URL + "/student/workHistory", { data: { workHistoryID: workHistoryID } })
                        .then((response) => {
                            setWorkHistoryList(
                                workHistoryList.filter((_) => {
                                    return _.workHistoryID !== workHistoryID;
                                })
                            )

                            // Toast.fire({
                            //     icon: 'success',
                            //     title: 'Delete data success'
                            // })
                            Swal.fire({
                                // position: "top-end",
                                icon: "success",
                                title: "Delete data success",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                                .then(() => { window.location.href = "/NA/admin/student/work/list/" + userID; })


                        }).catch(function (error) {
                            if (error.response) {
                                // console.log(error.response);
                            }
                        });
                }
                else if (results.isDenied) {
                    window.location.href = "/NA/admin/student/work/detail/" + workHistoryID;
                }
            })

    }

    const fetchData = () => {

        axios.get(process.env.REACT_APP_API_URL + "/student/workHistory", { params: { workHistoryID: workHistoryID } })
            .then(res => {

                const defaultStartWork = moment(res.data.data.startWork).toDate();
                const defaultEndWork = moment(res.data.data.endWork).toDate();
                // console.log(res.data);

                if (res.data.error === true) {
                    // console.log(res.data)
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setStartWork(defaultStartWork);
                setEndWork(defaultEndWork);
                setDepartment(res.data.data.department);
                setWorkAddressName(res.data.data.workAddressName);
                setHouseNo(res.data.data.houseNo);
                setVillage(res.data.data.village);
                setRoad(res.data.data.road);
                setAlley(res.data.data.alley);
                setProvince(res.data.data.province);
                setDistrict(res.data.data.district);
                setSubDistrict(res.data.data.subDistrict);
                setPostalCode(res.data.data.postalCode);
                setUserID(res.data.data.userID);
                setLoading(true);

                setTimeout(() => {
                    setCompleted(true);
                }, 1000);

            }).catch(error => {
                // console.log(error.res);
            });

        axios.get(process.env.REACT_APP_API_URL + "/location")
            .then(res => {
                // console.log(res.data)

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setProvinceApi(res.data.data);
            })
            .catch(error => {
                // console.log(error.res)
            });
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [])

    const checkDataChange = () => {
        Swal.fire({
            title: 'ข้อมูลมีการเปลี่ยนแปลง',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'บันทึก',
            denyButtonText: `ไม่บันทึก`,
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                const formattedStartWork = moment(startWork).format('YYYY-MM-DD');
                const formattedEndWork = moment(endWork).format('YYYY-MM-DD');

                axios.put(process.env.REACT_APP_API_URL + "/student/workHistory", {
                    workHistoryID: workHistoryID,
                    startWork: formattedStartWork,
                    endWork: formattedEndWork,
                    department: department,
                    workAddressName: workAddressName,
                    houseNo: houseNo,
                    village: village,
                    road: road,
                    alley: alley,
                    province: province,
                    district: district,
                    subDistrict: subDistrict,
                    postalCode: postalCode,
                    userID: userID

                }).then(() => {
                    setData([
                        ...data,
                        {
                            workHistoryID: workHistoryID,
                            startWork: formattedStartWork,
                            endWork: formattedEndWork,
                            department: department,
                            workAddressName: workAddressName,
                            houseNo: houseNo,
                            village: village,
                            road: road,
                            alley: alley,
                            province: province,
                            district: district,
                            subDistrict: subDistrict,
                            postalCode: postalCode,
                            userID: userID
                        }
                    ])
                    // Swal.fire('Saved!', '', 'success')
                    Swal.fire({
                        icon: "success",
                        title: "Saved!",
                        showConfirmButton: false,
                        timer: 1000,
                    })
                        .then(() => { window.location.href = "/NA/admin/student/work/list/" + userID; })

                })
            } else if (result.isDenied) {
                // Swal.fire('Changes are not saved', '', 'info')
                Swal.fire({
                    icon: "info",
                    title: "Changes are not saved",
                    showConfirmButton: false,
                    timer: 1000,
                })
                    .then(() => { window.location.href = "/NA/admin/student/work/list/" + userID; })

            }
        })
    }

    const BacktoWorkHistoryList = (userID) => {
        window.location.href = "/admin/student/work/list/" + userID;
    }

    const onchangeProvince = (event) => {
        axios.get(process.env.REACT_APP_API_URL + "/location/amphures", { params: { province_id: event.target.value } })
            .then(res => {
                // console.log(res.data);

                if (res.data.error === true) {
                    // console.log(res.data);
                    // console.log("ERROR FOUND WHEN GET DATA FROM API");
                    return;
                }
                setAmphures(res.data.data);
            })
            .catch(error => {
                // console.log(error.res);
            });
    }

    const onchangeAmphures = (event) => {
        axios.get(process.env.REACT_APP_API_URL + "/location/tambons", { params: { amphure_id: event.target.value } })
            .then(res => {
                // console.log(res.data)

                if (res.data.error === true) {
                    // console(res.data);
                    // console("ERROR FOUND WHEN GET DATA FROM API");
                }
                setTambons(res.data.data);
            })
            .catch(error => {
                // console.log(error.res);
            });
    }

    const onchangeTambons = (event) => {
        const filterTambons = tambons.filter(item => {
            return event.target.value == item.tambon_id
        })
        setPostalCode(filterTambons[0].zip_code)
        setZipCode(filterTambons[0].zip_code)

        setSubDistrict(filterTambons[0].name_th)
    }

    const handleStartWorkChange = (date) => {
        setStartWork(date);
        if (endWork && moment(date).isAfter(endWork)) {
            setEndWork(date);
        }
    };

    const handleEndWorkChange = (date) => {
        if (moment(date).isBefore(startWork)) {
            setEndWork(startWork);
        } else {
            setEndWork(date);
        }
    };


    return (
        <>
            {!completed ? (
                <LoadingPage></LoadingPage>
            ) : (
                <div>
                    <div className=" text-black min-h-screen space-y-5 mb-10">
                        <div className=" font-bold text-4xl m-7 grid grid-cols-1 place-items-center">ข้อมูลประวัติการทำงาน</div>
                        <div>
                            <div className='container mx-auto text-black'>
                                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                                    <div ><p>เริ่ม</p>
                                        <div className="mb-5 flex justify-center ">
                                            {/* <input
                                                defaultValue={startWork}
                                                onChange={(event) => {
                                                    setStartWork(event.target.value)
                                                }}
                                                type="date"
                                                name="startWork"
                                                placeholder="เวลาเริ่มทำงาน"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            /> */}
                                            <DatePicker
                                                selected={startWork}
                                                onChange={handleStartWorkChange}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="dd/MM/yyyy"
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div ><p>สิ้นสุด</p>
                                        <div className="mb-5 flex justify-center ">
                                            <DatePicker
                                                selected={endWork}
                                                onChange={handleEndWorkChange}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="dd/MM/yyyy"
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                                                minDate={startWork}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div ><p>แผนก</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={department}
                                                onChange={(event) => {
                                                    setDepartment(event.target.value)
                                                }}
                                                type="text"
                                                name="แผนก"
                                                placeholder="แผนก"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ชื่อสถานที่ทำงาน</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={workAddressName}
                                                onChange={(event) => {
                                                    setWorkAddressName(event.target.value)
                                                }}
                                                type="text"
                                                name="ชื่อสถานที่ทำงาน"
                                                placeholder="ชื่อสถานที่ทำงาน"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>บ้านเลขที่</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={houseNo}
                                                onChange={(event) => {
                                                    setHouseNo(event.target.value)
                                                }}
                                                type="text"
                                                name="houseNo"
                                                placeholder="บ้านเลขที่"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>หมู่บ้าน</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={village}
                                                onChange={(event) => {
                                                    setVillage(event.target.value)
                                                }}
                                                type="text"
                                                name="village"
                                                placeholder="หมู่บ้าน"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ถนน</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={road}
                                                onChange={(event) => {
                                                    setRoad(event.target.value)
                                                }}
                                                type="text"
                                                name="road"
                                                placeholder="ถนน"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>ซอย</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={alley}
                                                onChange={(event) => {
                                                    setAlley(event.target.value)
                                                }}
                                                type="text"
                                                name="alley"
                                                placeholder="ซอย"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div ><p>จังหวัด</p>
                                        <div className="mb-5 flex justify-center ">
                                            <select
                                                onChange={(event) => {
                                                    const filterProvince = provinceApi.filter(item => {
                                                        return event.target.value == item.province_id
                                                    })
                                                    setProvince(filterProvince[0].name_th)
                                                    onchangeProvince(event)
                                                }}
                                                type="text"
                                                name='province'
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            >
                                                <option value={""}>{province}</option>
                                                {
                                                    provinceApi.map((_, index) => (<option key={index} value={_.province_id}>{_.name_th}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div ><p>อำเภอ</p>
                                        <div className="mb-5 flex justify-center ">
                                            <select
                                                onChange={(event) => {
                                                    const filterAmphures = amphures.filter(item => {
                                                        return event.target.value == item.amphure_id
                                                    })
                                                    setDistrict(filterAmphures[0].name_th)
                                                    onchangeAmphures(event)
                                                }}
                                                type="text"
                                                name='district'
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            >
                                                <option value={""}>{district}</option>
                                                {
                                                    amphures.map((_, index) => (<option key={index} value={_.amphure_id}>{_.name_th}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div ><p>ตำบล</p>
                                        <div className="mb-5 flex justify-center ">
                                            <select
                                                onChange={(event) => {
                                                    onchangeTambons(event)
                                                }}
                                                type="text"
                                                name='subDistrict'
                                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            >
                                                <option value={""}>{subDistrict}</option>
                                                {
                                                    tambons.map((_, index) => (<option key={index} value={_.tambon_id}>{_.name_th}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div ><p>รหัสไปรษณีย์</p>
                                        <div className="mb-5 flex justify-center ">
                                            <input
                                                defaultValue={postalCode}
                                                onChange={(event) => {
                                                    setPostalCode(event.target.value)
                                                }}
                                                type="text"
                                                name="postalCode"
                                                placeholder="รหัสไปรษณีย์"
                                                className="w-full rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#423bce] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-row-reverse justify-around'>
                        <div className=''>
                            <div className=''>
                                <button onClick={() => checkDataChange(workHistoryID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                        <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">บันทึก</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                        </div>
                        <div className=''>
                            <div className=''>
                                <button onClick={() => deleteWorkHistory(workHistoryID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                                        <svg width="20" className=' text-white' height="20" viewBox="0 0 47 51" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.2592 23.4346V46.2701C39.2592 47.0752 38.6673 47.7277 37.937 47.7277H9.72969C8.99945 47.7277 8.40747 47.0752 8.40747 46.2701V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.4258 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M28.2407 38.0104V23.4346" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M43.6665 13.7172H32.648M32.648 13.7172V5.45759C32.648 4.65259 32.0561 4 31.3258 4H16.3407C15.6105 4 15.0185 4.65259 15.0185 5.45759V13.7172M32.648 13.7172H15.0185M4 13.7172H15.0185" stroke="black" strokeWidth="6.54545" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ลบ</span>
                                    <span className="relative invisible">Button Text</span>
                                </button>
                            </div>
                        </div>
                        <div className=' ml-3'>
                            <button onClick={() => BacktoWorkHistoryList(userID)} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">กลับ</span>
                                <span className="relative invisible">Button Text</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default WorkHistoryDetail