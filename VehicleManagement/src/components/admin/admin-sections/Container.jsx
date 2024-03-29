import React from 'react'
import { Outlet } from 'react-router-dom'

const Container = () => {
  return (
    <>
        <div className='bg-slate-100  flex justify-center items-start h-full w-full mt-5'>
          <Outlet/>
        </div>
    </>
  )
}

export default Container