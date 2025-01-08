import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Fotter = () => {
  return (
    <div className='bg-neutral-950 w-full h-[200px] text-white p-10 flex flex-col gap-[20px]'>
        <div className='flex flex-row list-none justify-between text-[20px]'>
            <li>Home</li>
            <li>About</li>
            <li>Restaurant</li>
            <li>Contact Us</li>
        </div>
        <div className='text-[50px] flex flex-row items-center justify-between'>
            <h1>Company Logo</h1>
            <div className='flex gap-5'>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
            </div>
        </div>
    </div>
  )
}

export default Fotter