import React from 'react'
import { SlStar } from 'react-icons/sl';

const List = ({item}) => {
  return (
    <div className='flex flex-col bg-white rounded-md max-w-fit shadow-lg p-6 gap-4'>
        <div>
            <img src={item.Image} alt="" className='w-[310px] h-[220px]'/>
        </div>
        <div className='flex justify-between items-center'>
                <h1 className='font-medium font-mono'>{item.Title}</h1>
                <h1 className='flex'>3.6 <SlStar className='fill-[#FF5733]'/></h1>
        </div>
        <div className='flex justify-between items-center'>
            <h1 className='font-light'>{item.List}</h1>
            <h1 className='font-light'>{item.Price}</h1>
        </div>
        <div className='justify-items-end font-mono'>
            <h1>{item.Delivery_Time}</h1>
        </div>
        <div>
                <button className='bg-orange-500 text-white p-1 rounded-tr-lg rounded-br-lg'>{item.Offers}</button>
        </div>
    </div>
  )
}

export default List