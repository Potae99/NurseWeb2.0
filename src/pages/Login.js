// import { signOut, signIn, useSession } from "next-auth/react";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { useRouter } from "next/router";
import Swal from 'sweetalert2'
import axios from 'axios'

export default function Login({ setToken }) {

  const [level, setLevel] = useState("student");


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  const submitContact = async (event) => {
    event.preventDefault();

    // console.log(event.target.IDnumber.value)
    const data = {
      IDnumber: event.target.IDnumber.value,
      password: event.target.password.value
    };

    // console.log(data);

    let path = "/student/auth";
    if (level == "admin"){
      path = "/admin/auth";
    }
    // else if (level == "student"){
    //   path = "/student/auth"
    // }
    else if (level == "teacher"){
      path = "/teacher/auth"
    }

    axios.post(process.env.REACT_APP_API_URL + path, data)
      .then(res => {
        // console.log(res);
        console.log(res.data);
        if (res.data && res.data.error == true) {
          throw new Error("login fail")
        }
        if (level == "admin"){
          window.location.href = "/admin/home"
        }
        else if (level == "teacher"){
          window.location.href = "/teacher/home"
        }
        else if (level == "student"){
          window.location.href = "/student/home"
        }
        else {
          window.location.href = "/error"
        }

        Toast.fire({
          icon: 'success',
          title: res.data.message
        });

        setToken(res.data.data);
      }).catch(error => {
        if (error.response) {
          console.log(error.response.data); // => the response payload 
        }
        Toast.fire({
          icon: 'error',
          title: "login fail"

        })
        // console.log(res);
      });

  };

  return (
    <>
      {false ?
        // <LoadingPage /> :
        <>
        </> :
        <>
          {/*container*/}
          < div className=" bg-gray-300 h-screen items-center p-4 flex justify-center">
            {/*login card*/}
            <div className=" bg-current  flex flex-col items-center max-w-screen-lg overflow-y-hidden rounded-lg shadow-lg bg-orange-400 w-full md:flex-row">
              {/*logo*/}
              <div className=" backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2">
                <h1 className="font-medium text-3xl">มหาวิทยาลัยนเรศวร</h1>
                <p className="italic text-lg">คณะพยาบาลศาสตร์</p>
              </div>

              {/*form*/}

              <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2 border border-rose-900">
                <div>

                  <div className="flex flex-col items-center">
                    <h1 className="font-medium text-black text-xl">ยินดีต้อนรับ</h1>
                    <p>ลงชื่อเข้าใช้บัญชีของคุณ</p>
                  </div>

                  <>
                    <Menu as="div" className="relative inline-block text-left min-w-[100px] w-full mb-3">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-100 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          {level == "student" ? "นิสิต" : level == "teacher" ? "อาจารย์" : level == "admin" ? "ผู้ดูแลระบบ" : ""}
                          <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-orange-200 hover:text-violet-100"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-orange-600 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  onClick={() => { setLevel("student"); }}
                                >
                                  {/* {active ? (
                              <EditActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <EditInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )} */}
                                  นิสิต
                                </button>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-orange-600 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  onClick={() => { setLevel("teacher"); }}
                                >
                                  อาจารย์
                                </button>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-orange-400 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  onClick={() => { setLevel("admin"); }}
                                >
                                  ผู้ดูแลระบบ
                                </button>
                              )}
                            </Menu.Item>

                          </div>




                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>

                  {/*inputs*/}
                  {/* onSubmit={submitContact} */}
                  <form
                    className="flex flex-col items-center space-y-4"
                    onSubmit={submitContact}
                  >
                    <div className="relative">
                      <input
                        className="border border-gray-400 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-orange-400"
                        placeholder="เลขประจำตัวประชาชน..."
                        type="text"
                        id="IDnumber"
                        autoComplete=""
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        className="border border-gray-400 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-orange-300"
                        placeholder="รหัสผ่าน..."
                        type="password"
                        id="password"
                        autoComplete="password"
                        required
                      />
                    </div>
                    <button
                      className=" bg-orange-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-orange-600"
                      type="submit"
                    >
                      เข้าสู่ระบบ
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}
