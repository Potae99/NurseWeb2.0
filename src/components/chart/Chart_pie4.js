import axios from 'axios';
import React, { useState, useEffect } from 'react'



////chart




function Chart_pie4() {

    const [adminlist, setAdminList] = useState([]);
    useEffect(() => {
        const fetchData = () => {

            axios.get(process.env.REACT_APP_API_URL + "/summary/student/worked")
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


    return (
        <div className=''>
            <div className="stats shadow w-full   bg-gray-100 hover:bg-gray-300 ">

                <div className="stat place-items-center">
                    <div className="stat-title text-black ">เปอร์เซนการมีงานทำ</div>
                    <div className="radial-progress  bg-orange-400 text-primary-content border-4 border-orange-400" style={{ "--value": (adminlist.percent)  }}>{adminlist.percent}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-black">จำนวนนิสิตทั้งหมด</div>
                    <div className="stat-value text-secondary">{adminlist.all}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-black">จำนวนนิสิตที่มีงานทำ</div>
                    <div className="stat-value">{adminlist.count}</div>

                </div>
            </div>
        </div>

    )
}

export default Chart_pie4