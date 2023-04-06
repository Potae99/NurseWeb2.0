import React from "react";

const BarChart = () => {
    const data = [
        { label: "January", value: 20 },
        { label: "February", value: 35 },
        { label: "March", value: 15 },
        { label: "April", value: 25 },
        { label: "May", value: 10 },
        { label: "June", value: 30 },
    ];

    const maxValue = Math.max(...data.map((d) => d.value));

    return (
        <div className="flex items-end h-full w-full">
            {data.map((d, index) => (
                <div
                    key={index}
                    className="flex-1 h-full mx-1 bg-blue-500"
                    style={{ height: `${(d.value / maxValue) * 100}%` }}
                >
                    <div className="text-center text-white pt-2">{d.label}</div>
                </div>
            ))}
        </div>
    );
};
export default BarChart;
