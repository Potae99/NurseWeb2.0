import React from "react";
import BarChart from "./BarChart";

const SummaryForAdmin = () => {
    return (
        <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-96 h-96 bg-white rounded-lg shadow-md p-4">
                <BarChart />
            </div>
        </div>
    );
};

export default SummaryForAdmin;
