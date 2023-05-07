import React from 'react'
import axios from 'axios'

import Chart_bar from '../../components/chart/Chart_bar'
import Chart_pie from '../../components/chart/Chart_pie'
import Chart_pie2 from '../../components/chart/Chart_pie2'
import Chart_pie3 from '../../components/chart/Chart_pie3'
import Chart_pie4 from '../../components/chart/Chart_pie4'
import { useState } from 'react'
import { useEffect } from 'react'
import LoadingPage from "../LoadingPage"
/////chart
// import Chart from "chart.js/auto";
// import { Bar } from "react-chartjs-2";
// import { CategoryScale } from "chart.js";
// import { Data } from "./Data";

// Chart.register(CategoryScale);
function SearchYear() {

  const [adminlistYear, setAdminListYear] = useState([]);
  const [adminlistGeneration, setAdminListGeneration] = useState([]);
  const [year, setYear] = useState("");
  const [yearStartEnroll, setYearStartEnroll] = useState([]);

  const [generation, setGeneration] = useState("");
  const [generationList, setGenerationList] = useState([]);

  useEffect(() => {

    const fetchData = () => {
      axios.get(process.env.REACT_APP_API_URL + "/student/yearStartEnroll")
        .then((res) => {
          setYearStartEnroll(res.data.data);
        })
        .catch((error) => {
          console.error("Error", error);
        });

      axios.get(process.env.REACT_APP_API_URL + "/student/generation")
        .then((res) => {
          setGenerationList(res.data.data);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
    fetchData();
  }, []);


  const Getyear = () => {

    axios.get(process.env.REACT_APP_API_URL + "/summary/student/workedEachYear", { params: { year: year } })
      .then(res => {
        // const persons = res.data;
        //this.setState({ persons });
        // console.log(res.data);

        if (res.data.error === true) {
          // console.log(res.data)
          // console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setAdminListYear(res.data.data);

      });
  }

  const handleGenerationSubmit = () => {

    axios.get(process.env.REACT_APP_API_URL + "/summary/student/workedEachGeneration", { params: { generation: generation } })
      .then(res => {
        // const persons = res.data;
        //this.setState({ persons });
        // console.log(res.data);

        if (res.data.error === true) {
          // console.log(res.data)
          // console.log("ERROR FOUND WHEN GET DATA FROM API ");


          return;
        }
        setAdminListGeneration(res.data.data);

      });
  }

  return (
    <>
      <div className=' mt-3'>
        <p className=' m-auto mt-5 mb-1 ml-2 text-black'>ภาพรวมการมีงานทำของนิสิตในปีการศึกษา</p>
        <div className="mb-5 flex justify-center ">
          <select
            onChange={(event) => {
              setYear(event.target.value)
            }}
            type="text"
            name="year"
            placeholder="ปีการศึกษา"
            className="w-1/3 rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
            required
          >
            <option value={""}>---ระบุปีการศึกษาของนิสิต---</option>
            {
              yearStartEnroll.map((_, index) => (<option key={index} value={_.yearStartEnroll}>{_.yearStartEnroll}</option>))
            }
          </select>
          <div className=' ml-3'>
            <button onClick={Getyear} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ค้นหา</span>
              <span className="relative invisible">Button Text</span>
            </button>
          </div>
        </div>

        <div className="stats shadow w-full   bg-gray-100 hover:bg-gray-300 ">

          <div className="stat place-items-center">
            <div className="stat-title text-black ">เปอร์เซนการมีงานทำ</div>
            <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (adminlistYear.percent) }}>{adminlistYear.percent}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-black">จำนวนนิสิตทั้งหมด</div>
            <div className="stat-value text-secondary">{adminlistYear.all}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-black">จำนวนนิสิตที่มีงานทำ</div>
            <div className="stat-value">{adminlistYear.count}</div>

          </div>
        </div>
      </div>
      <div className=' mt-3'>
        <p className=' m-auto mt-5 mb-1 ml-2 text-black'>ภาพรวมการมีงานทำของนิสิตในรุ่น</p>
        <div className="mb-5 flex justify-center ">
          <select
            onChange={(event) => {
              setGeneration(event.target.value)
            }}
            type="text"
            name="generation"
            placeholder="generation"
            className="w-1/3 rounded-md border border-black  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
            required
          >
            <option value={""}>---ระบุรุ่นของนิสิต---</option>
            {
              generationList.map((_, index) => (<option key={index} value={_.generation}>{_.generation}</option>))
            }
          </select>
          <div className=' ml-3'>
            <button onClick={handleGenerationSubmit} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                <svg className=' text-white' width="30" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.22H14.72M14.72 15.22H27.44M14.72 15.22V2.5M14.72 15.22V27.94" stroke="currentColor" strokeWidth="3.18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">ค้นหา</span>
              <span className="relative invisible">Button Text</span>
            </button>
          </div>
        </div>

        <div className="stats shadow w-full   bg-gray-100 hover:bg-gray-300 ">

          <div className="stat place-items-center">
            <div className="stat-title text-black ">เปอร์เซนการมีงานทำ</div>
            <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (adminlistGeneration.percent) }}>{adminlistGeneration.percent}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-black">จำนวนนิสิตทั้งหมด</div>
            <div className="stat-value text-secondary">{adminlistGeneration.all}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-black">จำนวนนิสิตที่มีงานทำ</div>
            <div className="stat-value">{adminlistGeneration.count}</div>

          </div>
        </div>
      </div>
    </>
  )
};



function Adminoverall() {

  // labels: Data.map((data) => data.year), 
  // data: Data.map((data) => data.userGain),

  const [chartData, setChartData] = useState({
    labels: [2023, 2024, 2025],
    datasets: [{
      label: 'My First Dataset',
      data: [10, 30, 50],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        // 'rgba(255, 205, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        // 'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        // 'rgb(255, 205, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        // 'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  });
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);

      setTimeout(() => {
        setCompleted(true);
      }, 1000);
    }, 2000);
  })

  return (
    <>
      {!completed ? (
        <LoadingPage></LoadingPage>
      ) :
        (
          <div className=' flex flex-col h-full'>
            <h1 className=' text-black text-4xl text-center mt-10'>ภาพรวม</h1>
            <div className='container mx-auto text-black'>
              <div className=' grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 p-6 '>
                <div>
                  <p className=' mt-3 m-auto mb-1 ml-2 text-black'>ภาพรวมนิสิตในแต่ละปีการศึกษา</p>
                  <div className=' '>
                    <Chart_bar />
                  </div>
                </div>
                <div>
                  <p className=' m-auto mt-3 mb-1 ml-2 text-black'>ภาพรวมนิสิตในแต่ละจังหวัด</p>
                  <div className=''>
                    <Chart_pie />
                  </div>
                </div>
                <div>
                  <p className=' m-auto mt-3 mb-1 ml-2 text-black'>ภาพรวมนิสิตในแต่ละทุนการศึกษา</p>
                  <div className=''>
                    <Chart_pie2 />
                  </div>
                </div>
                <div>
                  <p className=' m-auto mt-3 mb-1 ml-2 text-black'>ภาพรวมนิสิตในแต่ละรุ่น</p>
                  <div className=''>
                    <Chart_pie3 />
                  </div>
                </div>
              </div>
              <div>
                <p className=' m-auto mt-5 mb-1 ml-2 text-black'>ภาพรวมการมีงานทำของนิสิตทั้งหมด</p>
              </div>
              <div className='mt-5'>
                <Chart_pie4 />
              </div>
              <div>
                <SearchYear />
              </div>
            </div>
          </div>
        )}

    </>
  )
}

export default Adminoverall