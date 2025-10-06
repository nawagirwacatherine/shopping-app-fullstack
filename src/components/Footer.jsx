
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

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+256-751-172-007</li>
            <li>contact@katiescollection.com</li>
          </ul>
        </div>
        </div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Katiescollection.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer