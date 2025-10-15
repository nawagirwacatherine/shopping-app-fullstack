
import React, { useEffect,useContext,useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { IoIosStarOutline } from "react-icons/io";

const Product = () => {

  const {productId} = useParams();
  const {products,currency} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item)=>{
      if (item.id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        return null;
      }

    })

  }

  useEffect(() => {
    fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*---------Product Data---------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* --------Product Images--------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal'>
             {
              productData.image.map((item,index)=>(
                <img  onClick={()=>setImage(item)} src={item}  key={index} className='w-[24%] sm:w-full sm:mb-3 ' alt="" />
              ))
             }
          </div>

          <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt="" />

          </div>

        </div>

        {/* --------Product Info -------- */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className=' flex items-center gap-1 mt-2'>

            <IoIosStarOutline className='w-3 text-red-500 '  />
            <IoIosStarOutline className='w-3 5 text-red-500'  />
            <IoIosStarOutline className='w-3 5 text-red-500'  />
            <IoIosStarOutline className='w-3 5 text-red-500'  />
            <IoIosStarOutline className='w-3 5 text-red-500'  />

            <p className='pl-2'>(122)</p>

          </div>

          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

        </div>

      </div>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product