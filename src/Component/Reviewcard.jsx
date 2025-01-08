import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { SlStar } from 'react-icons/sl';

const Reviewcard = ({reviews}) => {
  return (
    <div className='bg-white flex flex-col max-w-fit  rounded-md border-0 shadow-lg p-6 gap-6'>
        <div className='flex items-center gap-5 text-[20px] justify-center'> 
            <FaUserCircle className='h-[64px] w-[64px]'/>
            <div className='flex flex-col'>
                    <h1 className='text-[28px]'>{reviews.User_name}</h1>
                    <div className='flex flex-row gap-2'> 
                        <SlStar className='fill-[#FF5733]'/>
                        <SlStar className='fill-[#FF5733]'/>
                        <SlStar className='fill-[#FF5733]'/>
                        <SlStar className='fill-[#FF5733]'/>
                    </div>
            </div>
        </div>
        <div className='w-[255px]'>
            <hr />
        </div>
        <div className='w-[255px]'>
            <p> {reviews.User_Review}</p>
        </div>
    </div>
  )
}

export default Reviewcard