import React from 'react'
import { SlStar } from 'react-icons/sl';

const Items = ({item}) => {
  return (
    <div className='bg-white flex flex-col max-w-fit  rounded-md border-0 shadow-lg p-6 gap-6 '>
        <div>
            <img src={item.Image} alt="" className='h-[220px] w-[310px]'/>
        </div>
        <div className='flex flex-row justify-between'>
                <h1 className='font-semibold'>{item.Title}</h1>
                <button className='bg-orange-500 text-white font-medium rounded-full p-1'>{item.Button}</button>
        </div>
        <div className='flex flex-row justify-between'>
                <div className='flex gap-2'>
                    <SlStar className='fill-[#FF5733]'/>
                    <SlStar className='fill-[#FF5733]'/>
                    <SlStar className='fill-[#FF5733]'/>
                    <SlStar className='fill-[#FF5733]'/>
                </div>
                <h1 className='font-bold'>{item.Price}</h1>
        </div>
    </div>
  )
}

export default Items