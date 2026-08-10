import React, { useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'


const Slider = ({slides}) => {

    let [current,setCurrent] = useState(0);
    
    let previousSlide = () => {
        if(current == 0){
            setCurrent(slides.length - 1);
        }else{
            setCurrent(current - 1);
        }
    }

    let nextSlide = () => {
        if(current == slides.length - 1){
            setCurrent(0);

        }else{
            setCurrent(current + 1);
        }
    }

  return (
    <div className=' overflow-hidden relative'>
        <div className='flex transition ease-in-out duration-500' style={{ transform: `translateX(-${current * 100}%)`, }}>
            {slides.map((s) => {
               return  <img src={s} alt="image" />
            })}
        </div>
        <div className='absolute flex justify-between z-10 h-full w-full top-0'>
            <button onClick={previousSlide} className='ml-3'>
                <BsFillArrowLeftCircleFill className='text-white '  />
            </button>
            <button onClick={nextSlide} className='mr-3'>
                <BsFillArrowRightCircleFill className='text-white ' />
            </button>   
        </div>
    </div>
  )
}

export default Slider