import React, { useRef } from "react";
import logo from "../../assets/open-enrollment.gif";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const SignUp = () => {
  const handlefirstname=useRef()
  const handleLastname = useRef()
  const handleemail = useRef()
  const handlepassword = useRef()
  const navigate = useNavigate();
  const addtoData = () =>{
    
    if(handlefirstname.current.value && handleLastname.current.value && handleemail.current.value && handlepassword.current.value){
      axios.post('http://localhost:3001/categories',{username:`${handlefirstname.current.value} ${handleLastname.current.value}`, email:handleemail.current.value, password:handlepassword.current.value})
      navigate(-1)
    }
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <div className="flex justify-center">
            <img src={logo} alt="" className="h-20" />
          </div>
          <div className="mt-5">
            <div>
              <label
                htmlFor=""
                className="leading-6  text-gray-900 font-medium"
              >
                FirstName
              </label>
              <div className="mt-3">
                <input
                  type="text"
                  className="w-full rounded-md border-0 py-1 outline-none ring-1 pl-3"
                  ref={handlefirstname}
                />
              </div>
              <div className="mt-3">
                <label className="leading-6  text-gray-900 font-medium">
                  LastName
                </label>
                <div className="mt-3">
                  <input
                    type="text"
                    className="w-full rounded-md border-0 py-1 outline-none ring-1 pl-3"
                    ref={handleLastname}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="leading-6  text-gray-900 font-medium"
                >
                  Set email address
                </label>
                <div className="mt-2 ">
                  <input
                    type="email"
                    className="w-full rounded-md border-0 py-1 outline-none ring-1 pl-3"
                    ref={handleemail}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor=""
                  className="leading-6  text-gray-900 font-medium"
                >
                  Set password
                </label>
                <div className="mt-3">
                  <input
                    type="password"
                    className="w-full rounded-md border-0 py-1 outline-none ring-1 pl-3"
                    ref={handlepassword}
                  />
                </div>
                <div className="flex justify-end mt-3 text-blue-700 font-bold ">
                  <button
                    className="tracking-wide"
                    onClick={() => navigate("/login")}
                  >
                    already have account!
                  </button>
                </div>
              </div>
              <div className="mt-5 flex justify-center">
                <button className="bg-v w-full p-2 rounded-xl bg-indigo-800 font-bold tracking-wide text-white hover:bg-indigo-500 font-sans" onClick={addtoData}>
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
