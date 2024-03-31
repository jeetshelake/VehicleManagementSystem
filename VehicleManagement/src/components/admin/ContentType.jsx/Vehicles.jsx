import React, { useEffect, useState } from "react";
import axios from "axios";
import VehicleCard from "./VehicleCard";
const Vehicles = () => {
  let [vehicledata, setVehicleData] = useState([])
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/driverdetail")
      .then((response) => response.data)
      .then((response) => setVehicleData([...response]));
  }, []);

    const filteredVehicleData = vehicledata.filter((vehicle) =>vehicle.driverName.toLowerCase().includes(search)||vehicle.status.toLowerCase().includes(search)||vehicle.carName.toLowerCase().includes(search));
const handleSearchInputChange = (event) => {
  setSearch(event.target.value)
};

const searchData = (obj) => {
  setSearch(obj.driverName.toLowerCase())
}
  return (
    <>
      <div>
      <input
        type="text"
        placeholder="Search by driver name..."
        value={search}
        onChange={handleSearchInputChange}
        className="p-2 m-4 border border-gray-300 rounded-md"
      />
      <ul>
      {search&&filteredVehicleData.map((obj)=><li onClick={()=>searchData(obj)} className='cursor-pointer'>{obj.driverName}</li>)}
      </ul>
        <section className="text-gray-600 body-font ml-10">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-2">
              {filteredVehicleData.map((obj) => {
                return <VehicleCard data={obj} key={obj.id}/>
              })}
    
              {!filteredVehicleData.length?<h1 className="font-extrabold text-red-600 text-3xl">Driver Not Found</h1>:''}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vehicles;
