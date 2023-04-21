import axios from 'axios';
import React, { useState, useEffect } from 'react'



////chart
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);



function Chart_bar() {

    const [adminlist, setAdminList] = useState([]);
    useEffect(() => {
        const fetchData = () => {

            axios.get(process.env.REACT_APP_API_URL + "/summary/student/year/count")
                .then(res => {
                    // const persons = res.data;
                    //this.setState({ persons });
                    console.log(res.data);

                    if (res.data.error === true) {
                        console.log(res.data)
                        console.log("ERROR FOUND WHEN GET DATA FROM API ");


                        return;
                    }
                    setAdminList(res.data.data);

                });
        }
        fetchData();
    }, [])
    const labels = adminlist.map((item) => item.yearStartEnroll);
    const data = {
        labels: labels,
        datasets: [
            {
                label: "จำนวนนักเรียนในปีการศึกษา",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                ],

                borderColor: "rgb(255, 99, 132, 0.2)",
                data: adminlist.map((item) => item.count),
            },
        ],
    };
    return (
        <div className='' >
            <Bar data={data} />
        </div>

    )
}

export default Chart_bar