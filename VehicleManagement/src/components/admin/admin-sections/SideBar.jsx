import React from "react";
import piston from "../../../assets/pistonss.gif";
import dashboard from "../../../assets/dashboard.png";
import vehicle from "../../../assets/vehicle.svg";
import users from "../../../assets/multiple-users-silhouette.png";
import type from "../../../assets/cars.png";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate()
  const menubar = [
    { name: "Dashboard", logo: dashboard, route:'dashboard' },
    { name: "Vehicles", logo: vehicle,  route:'vehicle'  },
    { name: "Drivers", logo: users, route:'drivers'  },
    { name: "Vehicle Types", logo: type, route:'vehicle-type'  }
  ];
  return (
    <>
      <aside className="h-screen text-yellow-50 bg-black flex flex-col items-center tracking-wide">
        <div className="mt-3">
          <img src={piston} alt="" className="w-20" />
        </div>
        <div className="mt-6 flex flex-col justify-center mx-1">
          {menubar.map((items) => (
            <div className="hover:bg-gray-700 flex flex-row py-4 px-2 rounded-md" onClick={()=>navigate(items.route)} key={items.name}>
              <div>
                <img src={items.logo} alt="" />
              </div>
              <div className="flex items-center ml-5 font-sans font-semibold hidden sm:block">{items.name}</div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
