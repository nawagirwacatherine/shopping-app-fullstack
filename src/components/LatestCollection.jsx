
import React,{useContext} from 'react'
import { ShopContext} from '../context/ShopContext.jsx'
import Title from './Title.jsx'
const LatestCollection = () => {
    const {products} = useContext(ShopContext);

    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
         <Title text1={'LATEST'} text2={'COLLECTIONS'}/>

         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600'>
         Katies collection is simply dummy collection for all kinds clothes for kids men and women.</p>
          </div>
    </div>
  )
}

export default LatestCollection