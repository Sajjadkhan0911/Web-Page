import React from 'react'
import { food_list } from '../../assets/assets'
import { VscLaw } from 'react-icons/vsc'

const Products = () => {
  return (
    <div className='mt-8'>
        <div className='text-center flex flex-col mx-[5%]'>
            <h1 className='font-bold sm:text-2xl lg:text-4xl'>Featured Products</h1>
            <div className='flex flex-row gap-10 justify-between overflow-hidden overflow-x-scroll my-5 [&::-webkit-scrollbar]:hidden'>
                {food_list.map((value,index) => {
                    return (
                        <div className=' mb-5 flex flex-col gap-3 xl:min-w-[12vw] lg:min-w-[18vw] md:min-w-[22vw] min-w-[30%] sm:text-xs md:text-[16px] p-3 border border-gray-200 shadow-lg rounded-lg'>
                            <div className='bg-gray-100 p-3'>
                                <img src={value.image} alt="" />
                            </div>
                            <div className='text-left'>
                                <p className='font-bold'> {value.name} </p>
                                <p className='mt-2'> {value.description} </p>
                                <p className=' font-bold mt-2'> ${value.price} </p>
                            </div>
                            <button className=' mt-auto sm:text-xs bg-[#0540CB] text-sm text-white py-2 px-2 md:px-8 rounded-md'>Add to Cart</button>
                           
                        </div>
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Products