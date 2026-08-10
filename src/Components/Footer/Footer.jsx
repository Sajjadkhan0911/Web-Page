import React from 'react'
import logo from '../../assets/bag_icon.png'
import fb from '../../assets/facebook_icon.png'
import linkedin from '../../assets/linkedin_icon.png'
import twitter from '../../assets/twitter_icon.png'


const Footer = () => {
  return (
    <div className='bg-black text-white'>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] px-[10%] py-8'>
            <div>
                <div className='flex flex-row gap-3 items-center'>
                    <img className='text-white' src={logo} alt="" />
                    <h1 className='font-bold text-2xl'>Shopio</h1>
                </div>
                <div className='pr-12 mt-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officia ullam consectetur nam provident, accusantium veritatis ducimus.</p>
                </div>
                <div className='flex flex-row gap-3 mt-4'>
                    <img src={fb} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Company</h1>
                <ul className='mt-4'>
                    <li> <a href="">About Us </a> </li>
                    <li> <a href="">Carrers </a> </li>
                    <li> <a href="">Blog </a> </li>
                    <li> <a href="">Press </a> </li>
                    <li> <a href="">Contact Us </a> </li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Categories</h1>
                <ul className='mt-4'>
                    <li> <a href="">Electronics </a> </li>
                    <li> <a href="">Fashion </a> </li>
                    <li> <a href="">Shoes </a> </li>
                    <li> <a href="">Accessories </a> </li>
                    <li> <a href="">Home & Living </a> </li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Customer Services</h1>
                <ul className='mt-4'>
                    <li> <a href="">My Order </a> </li>
                    <li> <a href="">Returns </a> </li>
                    <li> <a href="">Shipping Info </a> </li>
                    <li> <a href="">FAQs </a> </li>
                    <li> <a href="">Terms & Conditions </a> </li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Contact Us</h1>
                <ul className='mt-4'>
                    <li> <a href="">123 Main Street, Lahore </a> </li>
                    <li> <a href="">+92 300 1234567 </a> </li>
                    <li> <a href="">support@shopio.com </a> </li>
                </ul>
            </div>

        </div>
        
    </div>
  )
}

export default Footer