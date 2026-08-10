import React, { useState } from 'react'
import { menu_list } from '../../assets/assets'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const Category = () => {

    let [current,setCurrent] = useState(0);

    let movenext = () => {
        
    }
     let moveprev = () => {
        if(current == 1){
            setCurrent(0)
            console.log(current)
        }else{
            setCurrent(1)
        }
     }

  return (
    <div className='mt-8'>
        <div className='relative text-center mx-[5%]'>
            <h1 className='font-bold sm:text-2xl lg:text-4xl'>Shop By Category</h1>
            <div className=' flex-row flex mx-[4%]  lg:gap-14 gap-[5vw] mt-8 overflow-hidden overflow-x-scroll [&::-webkit-scrollbar]:hidden '
            >
                {menu_list.map((value,index) => {
                    return(
                        <div id='scrl' style={{transform : `translateX(-${current * 100}%)`}} className='flex min-w-[10vw] flex-col gap-2'>
                            <img src={value.menu_image} alt="" />
                            <p>{value.menu_name}</p>
                        </div>
                    )   
                })}
            </div>
            <div className='flex justify-between absolute h-full w-full top-4'>
                <div className='flex items-center mr-1 '>   
                    <button onClick={moveprev} className='shadow p-1 rounded-full'> 
                        <GrPrevious  />
                        
                    </button>
                </div>
                <div className='flex items-center'>
                    <button onClick={movenext} className='shadow p-1 rounded-full'>
                        <GrNext />
                    </button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Category