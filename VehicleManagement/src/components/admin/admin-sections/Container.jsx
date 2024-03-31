import React from 'react'
import { Outlet } from 'react-router-dom'

const Container = () => {
  return (
    <>
        <div className='bg-slate-100    h-full w-full'>
          <Outlet/>
        </div>
    </>
  )
}

export default Container