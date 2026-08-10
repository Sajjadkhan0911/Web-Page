import React from 'react'
import logo from '../../../src/assets/bag.png';
import { VscSearchLarge } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";





const Header = () => {
  return (
    <div className='flex flex-row justify-between bg-white w-full h-auto'>
        <div className='flex flex-row items-center ml-20 '>
            <div>
                <img src={logo} alt="" className='w-20 h-20' />
            </div>
            <div className='md:flex hidden flex-col'>
                <h1 className='font-bold text-4xl'>Shopio</h1>
                <p>E-Commerce Store</p>
            </div>
        </div>
        <div className='flex' >
            <div className='lg:flex hidden flex-1 items-center '>
                <input type="text" placeholder='Search For Products....' className=' w-auto border p-3 rounded-l-lg' />
                <p className='border hidden xl:flex w-auto p-3 rounded-r-lg'>All Categories <span>&#9660;</span></p>
                <div className='border m-1 rounded-lg p-4 bg-[#0742CB]'>
                    <VscSearchLarge className='text-white' />
                </div>
               
            </div>
        </div>
        <div className='flex flex-row justify-around items-center'>
             
            <div className='flex flex-row items-center p-4'>
                <CiHeart className='w-8 h-8' />
                <p className=' hidden md:flex font-bold'>Wishlist</p>
            </div>
            <div className='flex flex-row items-center mr-10 p-4'>
                <CiShoppingCart className='w-8 h-8' />
                <p className='font-bold hidden md:flex'>Cart</p>
            </div>
            <div className='flex flex-col mr-20'>
                <div className='flex flex-row items-center'>
                    <IoPersonOutline className='w-8 h-8' />
                    <p className='hidden md:flex font-bold'>Account</p>
                </div>
                <p>Login / Register</p>
            </div>
        </div>
    </div>
  )
}

export default Header