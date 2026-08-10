import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full bg-[#053EC8] text-white'>
       <div className='md:flex hidden flex-row justify-around text-[20px] py-4 xl:gap-3  xl:mx-[15%]'>
         <Link to='/' >Home</Link>
         <Link to='/shop' >Shop</Link>
         <Link to='/categories' >Categories</Link>
         <Link to='/deals' >Deals</Link>
         <Link to='/new-arrivals' >New Arrivals</Link>
         <Link to='/best-sellers' >Best Sellers</Link>
         <Link to='/blogs' >Blogs</Link>
         <Link to='/contact-us' >Contact Us</Link>
         <Link to='/about-us' >About Us</Link>
       </div>
        
    </nav>
  )
}

export default Navbar