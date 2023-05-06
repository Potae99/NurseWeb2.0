import React from 'react'

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
            <h1 className=' text-black text-4xl text-center mt-10'>จัดการผู้ใช้</h1>
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

              <p className=' m-auto mt-5 mb-1 ml-2 text-black'>ภาพรวมนิสิตในการมีงานทำ</p>
              <div className='mt-5'>
                <Chart_pie4 />
              </div>
            </div>
          </div>
        )}

    </>
  )
}

export default Adminoverall