import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Stepper, Button, Group } from "@mantine/core";
import axios from "axios";



import { AiOutlineInfoCircle, AiFillInfoCircle } from "react-icons/ai";

//encode array before send to server
function encodeBody(body) {
  var formBody = [];
  for (var property in body) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(body[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}





export default function Data({ data }) {
  // const [pageMenu, setPageMenu] = useState(0);



  // ----- page 0
  const [dataEXCEL, setDataEXCEL] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [err_data, setErr_data] = useState([]);

  const [isSend, setIsSend] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [active, setActive] = useState(0);
  const [sendAmount, setSendAmount] = useState(0);

  //modal popup


  // check error
  const [sendError, setSendError] = useState(false);

  const list_allow_header = [
    { name: "IDnumber", colNum: 0 },
    { name: "username", colNum: 1 },
    { name: "Name", colNum: 2 },
    { name: "userPassword", colNum: 3 },
    { name: "roleIDs", colNum: 4 },
    { name: "phone", colNum: 5 },
    { name: "gender", colNum: 6 },
    // { name: "Test", colNum: 1 },
  ];

  const nextStep = () => {
    // condition to check
    if (active == 0) {
      if (dataEXCEL.length <= 0) {
        // don't next disable
        return;
      }

      // update check err in data
      // let _err_data = [];
      // for (let i = 0; i < dataEXCEL.length; i++) {
      //   for (let j = 0; j < dataEXCEL[i].length; j++) {
      //     if (!dataEXCEL[i][j]) {
      //       // check if error data is phone number
      //       const columIgnore = list_allow_header.filter((el) => {
      //         if (el.name == "phone") {
      //           return el.colNum;
      //         }
      //       });
      //       if (i in columIgnore) {
      //         console.log("passed");
      //         dataEXCEL[i][j] = "";
      //         continue;
      //       }
      //       _err_data.push(dataEXCEL[i]);
      //       break;
      //     }
      //   }
      // }
      // setErr_data(_err_data);
    } else if (active == 1) {
      // check err in data

      // check if error data is phone number
      const columIgnore = [];
      list_allow_header.map((el) => {
        if (el.name == "phone") {
          columIgnore.push(el.colNum);
        }
      });
      // console.log(columIgnore);

      let _err_data = [];
      for (let i = 0; i < dataEXCEL.length; i++) {
        for (let j = 0; j < dataEXCEL[i].length; j++) {
          if (!dataEXCEL[i][j]) {
            if (columIgnore.includes(j)) {
              // console.log("passed");
              dataEXCEL[i][j] = "";
              continue;
            } else {
              console.log(`fail => i=${i}, j=${j},`);

              _err_data.push(dataEXCEL[i]);
              break;
            }
          }
        }
      }
      setErr_data(_err_data);

      if (_err_data.length > 0) {
        // console.log("ERR FOUND");
        return;
      }
    } else if (active == 2) {
      setIsSend(true);
      // console.log("SEND DATA TO API.");
    }

    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () => {
    if (active == 0) {
      //router.back();
    } else {
      setActive((current) => (current > 0 ? current - 1 : current));
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryData = e.target.result;
      const workbook = XLSX.read(binaryData, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      // console.log("---------------------------------");
      // console.log(jsonData[2].length);

      // for (let i = 0; i < jsonData[2].length; i++) {
      //   // console.log("****");
      //   console.log(jsonData[2][i]);
      //   if (!jsonData[2][i]) {
      //     console.log("AHA XD++++");
      //   }
      // }

      // console.log("---------------------------------");

      setDataEXCEL(jsonData.slice(1));
      setHeaders(jsonData[0]);
    };

    reader.readAsBinaryString(file);
  };

  const totalPages = Math.ceil(dataEXCEL.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = dataEXCEL.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const clear = () => {
    setDataEXCEL([]);
    setHeaders([]);
    setCurrentPage(1);
    setErr_data([]);
    setSendAmount(0);

    setActive(0);
  };

  async function sendData_api() {
    for (let row of dataEXCEL) {
      // console.log("row[4]");
      // console.log(row[4]);

      let roles = [];
      if (row[4] != "" && row[4].toString().split(",").length > 0) {
        roles = row[4].toString().split(",");
      } else {
        roles = [row[4]];
      }

      var sendData = {
        IDnumber: "" + row[0],
        username: "" + row[1],
        Name: "" + row[2],
        userPassword: "" + row[3],
        roles: roles,
        phone: "" + row[5],
        gender: "" + row[6],
      };

      // console.log(sendData);

      try {
        const res = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + "/admin/import/user",
          sendData
        );

        if (res) {
          if (res.error == true) {
            setSendError(true);
            setErr_data((err_data) => [...err_data, row]);
          }
        }
      } catch (err) {
        setSendError(true);
        setErr_data((err_data) => [...err_data, row]);
      } finally {
        setIsUpdate(true);
      }

      //console.log("--------------------------- end sendAmount");
    }
  }

  useEffect(() => {
    if (isUpdate) {
      // for(let _ in data){
      //   console.log(_);
      // }
      setSendAmount(sendAmount + 1);
      setIsUpdate(false);
    }
  }, [isUpdate]);

  useEffect(() => {
    if (isSend) {
      // for(let _ in data){
      //   console.log(_);
      // }
      sendData_api();
      setIsSend(false);
    }
  }, [isSend]);

  function generateExcelFile() {
    // create a new workbook
    const workbook = XLSX.utils.book_new();

    // create a new worksheet
    const worksheet = XLSX.utils.aoa_to_sheet([
      [
        "IDnumber",
        "username",
        "Name",
        "userPassword",
        "roleIDs",
        "phone",
        "gender",
      ],
      ["", "", "", "", ""],
    ]);

    // add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // write the workbook to a binary string
    const excelFile = XLSX.write(workbook, { type: "binary" });

    // convert the binary string to a Blob object
    const blob = new Blob([s2ab(excelFile)], {
      type: "application/octet-stream",
    });

    // create a link element to download the file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "excel_importUSER.xlsx";

    // simulate a click on the link to start the download
    link.click();
  }

  // utility function to convert a string to an ArrayBuffer
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  }
  return (
    <>
      <div
        className="mt-1 items-center ms-3 ml-3 mb-3"
        style={{
          color: "green",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        <h1>นำเข้าข้อมูล USER</h1>
      </div>
      <div className="p-6">
        <>
          <Stepper
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
            allowNextStepsSelect={false}
          // color="cyan"
          >
            <Stepper.Step label="#1" description="นำเข้าเอกสาร">
              {/* step 1: upload excel file */}
              <h2 className=" text-lg font-bold text-green-700">
                {" "}
                อัพโหลดข้อมูล{" "}
              </h2>
              {active == 0 && previewTable(paginatedData, headers)}
            </Stepper.Step>
            <Stepper.Step label="#2" description="ตรวจสอบ">
              {/* step 2: check data row in excel file if value error show */}
              <h2 className=" text-lg font-bold text-green-700">
                {" "}
                ตรวจสอบข้อมูล{" "}
              </h2>
              {active == 1 && validateTable(dataEXCEL)}
            </Stepper.Step>
            <Stepper.Step label="#3" description="ยืนยัน">
              {/* Step 3 content: Get full access */}
              <h2 className=" text-lg font-bold text-green-700">
                {" "}
                ยืนยันการนำเข้าข้อมูล
              </h2>
              <p> ข้อมูลจำนวน {dataEXCEL.length} รายการ กำลังจะถูกนำเข้าระบบ</p>
            </Stepper.Step>
            <Stepper.Completed>
              {/* Completed, click back button to get to previous step */}
              <h2 className=" text-lg font-bold text-green-700">
                {" "}
                กำลังดำเนินการ
              </h2>

            </Stepper.Completed>
          </Stepper>

          {active == 3 ? (
            <></>
          ) : (
            <>
              <Group position="center" mt="xl">
                {/* <Button variant="default" onClick={prevStep}>
            Back
          </Button> */}
                <button
                  className=" bg-white border hover:bg-slate-100 text-stone-800 font-bold p-2 w-20 rounded focus:outline-none focus:shadow-outline"
                  onClick={prevStep}
                >
                  กลับ
                </button>
                {/* <Button onClick={nextStep}>Next step</Button> */}
                <button
                  className="bg-green-700 hover:bg-green-800 text-white font-bold p-2 w-20 rounded focus:outline-none focus:shadow-outline"
                  onClick={nextStep}
                  disabled={active == 1 && err_data.length > 0 ? true : false}
                >
                  ต่อไป
                </button>
              </Group>
            </>
          )}
        </>
      </div>
    </>

  );
  function previewTable(paginatedData, headers) {
    return (
      <>
        <div className="p-6 overflow-auto">
          <div className="flex flex-wrap justify-between gap-4">
            <input
              type="file"
              accept=".xlsx"
              onChange={handleFileUpload}
              className="py-2 px-4 overflow-hidden bg-white border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />

            <div className=" flex items-center">
              <div
                className=" w-[30px] h-[30px] flex items-center mr-3"

              >
                <AiOutlineInfoCircle className="  w-[20px] h-[20px]" />
              </div>
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
                onClick={generateExcelFile}
              >
                ไฟล์ข้อมูลตั้งต้น
              </button>
            </div>
          </div>
          {paginatedData.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-900">
                ข้อมูลตัวอย่าง
              </h2>
              <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {headers.map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedData.map((row, index) => (
                      <tr key={startIndex + index}>
                        {headers.map((header, index) => (
                          <td
                            key={index}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {row[index]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* paging */}
              <div className="flex items-center justify-between border-t  px-4 py-3 sm:px-6">
                {/* border-gray-200 bg-white */}
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{currentPage}</span>{" "}
                      to <span className="font-medium">{totalPages}</span> of{" "}
                      <span className="font-medium">{dataEXCEL.length}</span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <a
                        onClick={() => {
                          if (currentPage != 1)
                            handlePageChange(currentPage - 1);
                        }}
                        // href="#"
                        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        onClick={() => {
                          if (currentPage != totalPages)
                            handlePageChange(currentPage + 1);
                        }}
                        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <table class="min-w-full">
            <thead style={{ backgroundColor: "#f1f3f5" }}>
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 "
                >
                  roleID
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 "
                >
                  roleName
                </th>
              </tr>
            </thead>
            <tbody>
              {data.dataAPI.map((item, index) => {
                // if (item.projectName == "ไม่พบข้อมูล") return <></>;
                return (
                  <tr key={"dataRow" + index} class="border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.roleID}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.roleName}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  function validateTable(data) {
    let newData = [];

    const getRows = (arr) => {
      let content = [];
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        content.push(
          <td
            key={"element_" + i}
            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
          >
            {item}
          </td>
        );
      }
      return content;
    };
    return (
      <>
        {data.length > 0 && (
          <>
            <p className=" text-center">ข้อมูลซ้ำ/ผิดพลาด</p>
            <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
              {err_data.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {list_allow_header.map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header.name}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* err_data.length >0  data */}

                    <>
                      {err_data.map((row, index) => (
                        <tr key={startIndex + index}>{getRows(row)}</tr>
                      ))}
                    </>
                  </tbody>
                </table>
              ) : (
                <div className="flex justify-center p-6">
                  <h1 className=" font-bold">รูปแบบข้อมูล ถูกต้อง</h1>
                </div>
              )}
            </div>
          </>
        )}
      </>
    );
  }
  function progressUpload() {
    // sendData_api();
    return (
      <>
        <div className="flex justify-center">
          {sendAmount == dataEXCEL.length && sendError == false ? (
            <>
              <div className="flex flex-col">
                <p className=" text-center">อัพโหลดข้อมูลสำเร็จ</p>
                <button
                  className=" self-center mt-5 bg-white border hover:bg-slate-100 text-stone-800 font-bold p-2 w-20 rounded focus:outline-none focus:shadow-outline"
                  onClick={clear}
                >
                  กลับ
                </button>
              </div>
            </>
          ) : sendAmount == dataEXCEL.length && sendError == true ? (
            <>
              <div className="flex flex-col">
                <p className=" text-center">ข้อมูลซ้ำ/ผิดพลาด</p>
                <table className="min-w-full divide-y divide-gray-200 mt-3">
                  <thead className="bg-gray-50">
                    <tr>
                      {headers.map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {err_data.map((row, index) => (
                      <tr key={startIndex + index}>
                        {headers.map((header, index) => (
                          <td
                            key={index}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {row[index]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className=" self-center mt-5 bg-white border hover:bg-slate-100 text-stone-800 font-bold p-2 w-20 rounded focus:outline-none focus:shadow-outline"
                  onClick={clear}
                >
                  กลับ
                </button>
              </div>
            </>
          ) : (
            <>
              <div className=" ">
                <div className="flex justify-center">
                </div>

                <p className=" text-center">
                  อัพโหลดข้อมูลแล้ว
                  <p className=" text-bold">
                    {sendAmount} / {dataEXCEL.length}
                  </p>
                  รายการ
                </p>
                {err_data.length > 0 ? (
                  <>
                    <p className=" text-center">ข้อมูลซ้ำ/ผิดพลาด</p>
                    <table className="min-w-full divide-y divide-gray-200 mt-3">
                      <thead className="bg-gray-50">
                        <tr>
                          {headers.map((header, index) => (
                            <th
                              key={index}
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {err_data.map((row, index) => (
                          <tr key={startIndex + index}>
                            {headers.map((header, index) => (
                              <td
                                key={index}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                              >
                                {row[index]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}