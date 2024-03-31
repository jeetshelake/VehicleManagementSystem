import React from "react";
// import livecar from "../../../assets/output-onlinegiftools.gif";
import livecar from "../../../assets/mini-car.gif";
import waiting from '../../../assets/inheritance.gif'
import live from '../../../assets/wifi.gif'
import alert from '../../../assets/alert.gif'
function Dashboard() {
  const cards = [
    { name: "Live Vehicles", image: livecar, livedata: "800" },
    { name: "Online Drivers", image: live, livedata: "99" },
    { name: "Waiting Passengers", image: waiting, livedata: "34" },
    { name: "Passenger Raised Issue", image: alert, livedata: "8" },
  ];
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-10 mt-5">
          {cards.map((obj) => {
            return <div className="" key={obj.name}>
              <div className="border-10 border-gray-200 px-4 py-6 rounded-lg w-52 flex flex-col justify-center items-center bg-white cursor-pointer  hover:border">
                <div><img src={obj.image} alt="" className="w-16" /></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">{obj.livedata}</h2>
                <p className="leading-relaxed font-sans font-medium text-gray-500">{obj.name}</p>
              </div>
              </div>
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
