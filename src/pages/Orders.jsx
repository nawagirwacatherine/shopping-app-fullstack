
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
import { FaBeer } from 'react-icons/fa';

const Orders = ({token}) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

      try {
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers:{token}})

     if (response.data.success) {
      setOrders(response.data.orders)

     } else {
      toast.error(response.data.message)
     }


    } catch (error) {

      toast.error(error.message)
      
    }


  }

  useEffect(() =>{
    console.log("Token received:", token);

    fetchAllOrders();

  }, [token])
  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order,index)=>(
            <div key={index}>

              <FaBeer />
              <div>
                {
                  order.items.map((item,index) =>{
                    if (index === order.items.length - 1) {
                      return <p key = {index}> {item.name} x {item.quantity} <span>{item.size}</span></p>

                    }

                    

                    else{

                    }

                    console.log('Orders:', orders);

                  })
                }
              </div>

            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Orders