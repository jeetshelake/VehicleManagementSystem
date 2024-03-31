import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import call from "../../../assets/circle-phone.png";
import car from "../../../assets/car-garage.png";
const DynamicDetails = () => {
  const [dynamicdata, setDynamicData] = useState({});
  const data = useSelector((state) => state.dynamic.driverdetail);
  useEffect(() => {
    setDynamicData({ ...data });
  }, []);
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(0) contrast(1) opacity(1)" }}
        ></iframe>
        <div
          style={{
            position: "absolute",
            top:10,
            right: 2,
            background: "rgba(255, 255, 255, 0.7)",
            padding: "10px",
          }}
        >
         <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className=" mx-full">
                  <div className="rounded-lg overflow-hidden">
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-10 h-10"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <img
                          src={dynamicdata.driverPhoto}
                          alt=""
                          className="w-20 h-20 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                          {dynamicdata.driverName}
                        </h2>
                        <p
                          className={
                            dynamicdata.status == "available"
                              ? "text-green-700 font-semibold"
                              : dynamicdata.status == "reserved"
                              ? "text-yellow-600 font-semibold"
                              : dynamicdata.status == "booked"
                              ? "text-violet-600 font-semibold"
                              : "text-red-600 font-semibold"
                          }
                        >
                          {dynamicdata.status}
                        </p>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                           <div className=" flex flex-row gap-2">
                          <img src={call} alt="" />
                          <p className="text-base">{dynamicdata.phoneNumber}</p>   
                        </div>

                        <div className="flex flex-row gap-2"><h1 className="mt-3">{dynamicdata.carName}</h1></div>
                        <div className="flex flex-row"> <h1>{dynamicdata.carNumber}</h1></div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </>
  );
};

export default DynamicDetails;
{
  /* </div>
          <div className="container px-5 py-24 mx-auto flex">
            
          </div>
        </section>
      </div> */
}
