import React from 'react'
import searchsymbol from '../../../assets/search-interface-symbol.png'
import user from '../../../assets/user.png'
import {useSelector } from 'react-redux'
const Header = () => {
  const username = useSelector((state)=>state.login_user.value.username)
  const userphoto = useSelector((state)=>state.login_user.value.photo)
  console.log(username);
  return (
    <>
        <header className='w-full h-16 border text-black flex justify-between items-center'>
            <div className='font-sans font-bold tracking-widest text-xl  ml-5 flex items-center'>
              <img src={searchsymbol} alt="" className='w-5'/>
                <input type="text" className='outline-none text-black font-sans pl-2 ml-5 font-normal ' placeholder='Type to search...'/>
            </div>
            <div className='font-sans font-medium  text-base flex flex-row'>
              <h2 className='flex items-center '>{username}</h2>
              <img src={userphoto} alt="userphoto" width={50} height={20} className='ml-2 mr-10 rounded-full'/>
            </div>
        </header>
    </>
  )
}

export default Header