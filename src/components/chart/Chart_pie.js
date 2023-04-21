import axios from 'axios';
import React, { useState, useEffect } from 'react'



////chart
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);



function Chart_pie() {

    const [adminlist, setAdminList] = useState([]);
    useEffect(() => {
        const fetchData = () => {

            axios.get(process.env.REACT_APP_API_URL + "/summary/student/province")
                .then(res => {
                    // const persons = res.data;
                    //this.setState({ persons });
                    

                    if (res.data.error === true) {
           


                        return;
                    }
                    setAdminList(res.data.data);

                });
        }
        fetchData();
    }, [])
    const labels = adminlist.map((item) => item.province);
    const data = {
        labels: labels,
        datasets: [
            {
                label: "จำนวนนิสิตในจังหวัด",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 213, 22, 0.46)',
                    'rgba(22, 213, 188, 0.46)'
                ],

                borderColor: "rgb(255, 99, 132,0.2)",
                data: adminlist.map((item) => item.count),
            },
        ],
    };
    return (
        <div className=''>
            <Doughnut data={data} />
        </div>

    )
}

export default Chart_pie