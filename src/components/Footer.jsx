
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.product3} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Your one-stop shop for quality products delivered to your door. We’re committed to offering great value and fast service.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer