import React from 'react'

const TopBar = () => {
  return (
    <div className='bg-black w-full flex flex-col md:flex-row justify-between text-white'>
        <div className=' flex flex-1 flex-row justify-around gap-4 lg:pr-20 py-2'>
            <p className='ml-24'>+92 300 1234567</p>
            <p className='text-gray-500'>|</p>
            <p className='flex flex-1 justify-start'>free shopping on order over 5000</p>
        </div>
        <div className='items-center flex justify-center flex-1'>
            <div className='flex flex-row gap-2 justify-between items-center'>
                <div className='px-6 border-gray-500 border-r-2'>English</div>
                <div className='px-6 border-gray-500 border-r-2'>USD $</div>
                <div className='px-6 border-gray-500 border-r-2'>Track Order</div>
                <div className='px-6'>Help Center</div>

            </div>

        </div>
    </div>
  )
}

export default TopBar