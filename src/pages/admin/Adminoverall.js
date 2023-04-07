import React from 'react'
import Admin_sum_student from '../../components/Table/Admin_sum_student'
import Admin_sum_province from '../../components/Table/Admin_sum_province'
import Admin_sum_scolar from '../../components/Table/Admin_sum_scolar'
import { useState } from 'react'
import { useEffect } from 'react'
import LoadingPage from "../LoadingPage"
/////chart
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
// import { Data } from "./Data";

Chart.register(CategoryScale);

function Adminoverall() {

  // labels: Data.map((data) => data.year), 
  // data: Data.map((data) => data.userGain),

  const [chartData, setChartData] = useState({
    labels: [2023,2024,2025],
    datasets: [{
      label: 'My First Dataset',
      data: [10,30,50],
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
          <div>
            {/* <div className="w-[500px] h-[500px]">
              <h2 style={{ textAlign: "center" }}>Line Chart</h2>
              <Bar
                data={chartData}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Users Gained between 2016-2020"
                    },
                    legend: {
                      display: false
                    }
                  }
                }}
              />
            </div> */}
            <div className=' text-center text-4xl'>
              <p>ภาพรวมนิสิต</p>
            </div>
            <div className='mt-5'>
              <Admin_sum_student />
            </div>
            <div className='mt-3'>
              <Admin_sum_province />
            </div>
            <div className='mt-3'>
              <Admin_sum_scolar />
            </div>
          </div>
        )}

    </>
  )
}

export default Adminoverall