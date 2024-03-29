import React from "react";
import livecar from '../../../assets/output-onlinegiftools.gif'

function Dashboard() {
  return (
    <>
      <div className="flex flex-row gap-14">
        <div className="bg-white w-52 p-9 mb-4 gap-3">
          <div><img src={livecar} alt="" width={60}/></div>
          <div className='text-3xl font-semibold font-mono'>344</div>
          <div className="text-base text-gray-800 font-semibold">Live Running Vehicles</div>
        </div>
        <div className="bg-white w-52 p-9 mb-4 gap-3">
          <div><img src={livecar} alt="" width={60}/></div>
          <div className='text-3xl font-semibold font-mono'>400</div>
          <div className="text-base text-gray-800 font-semibold">Online Drivers</div>
        </div>
        <div className="bg-white w-52 p-9 mb-4 gap-3">
          <div><img src={livecar} alt="" width={60}/></div>
          <div className='text-3xl font-semibold font-mono'>344</div>
          <div className="text-base text-gray-800 font-semibold">Live Running Vehicles</div>
        </div>
        <div className="bg-white w-52 p-9 mb-4 gap-3">
          <div><img src={livecar} alt="" width={60}/></div>
          <div className='text-3xl font-semibold font-mono'>344</div>
          <div className="text-base text-gray-800 font-semibold">Live Running Vehicles</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
