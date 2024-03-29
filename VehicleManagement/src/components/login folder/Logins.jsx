import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/mini-car.gif";
import {useNavigate } from "react-router-dom";
import axios from 'axios'
import {useDispatch, useSelector } from "react-redux";
import { submit } from "../../store/slices/AuthSlice";
const Logins = () => {
  const [data, setData] = useState([])
  const handleEmail  = useRef()
  const handlePassword = useRef()
  const navigate = useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get('http://localhost:3001/categories').then((res)=>res.data).then((res)=>setData([...res]))
  },[])


  const loginButton = () =>{
    data.find((obj)=>{
        if(obj.email===handleEmail.current.value && obj.password===handlePassword.current.value){
          dispatch(submit(obj))
          return navigate('/admin-panel')
        }   
        
    })
    
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="justify-center flex">
            <img src={logo} alt="" className="h-20" />
          </div>
          <div className='flex justify-center'>
            <h1 className="font-sans text-3xl subpixel-antialiased tracking-normal font-bold">
              Sign in to your account
            </h1>
          </div>
          <div className='mt-10 pl-2 pr-2'>
            <label htmlFor="email" className="leading-6  text-gray-900 font-medium">
              Email Address
            </label>
            <div className="mt-2 ">
              <input type="email"  className="w-full rounded-md border-0 py-1 outline-none ring-1 pl-3" ref={handleEmail}/>
            </div>
          </div>
          <div className='mt-4 pl-2 pr-2'>
            <div className=' flex justify-between'>
              <label htmlFor="" className='font-medium'>Password</label>
              <label htmlFor="" className='text-indigo-600 font-medium'>Forgot password?</label>
            </div>
            <div className='mt-2'>
            <input type="password" className="w-full rounded-md border-0 py-1 outline-none ring-1 pl-3" ref={handlePassword}/>
            </div>
          </div>
          <div className='flex justify-center mt-5 pl-2 pr-2 mb-3'>
            <button className='bg-v w-full p-2 rounded-xl bg-indigo-800 font-bold tracking-wide text-white hover:bg-indigo-500 font-sans' onClick={loginButton}>Sign in</button>
          </div>
          <div className='flex justify-end pr-3 text-blue-700 font-bold'>
            <button onClick={()=>navigate('/sign-up')}>Create New Account!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logins;
