
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { FaBeer } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )

      if (response.data.success) {
        setOrders(response.data.orders)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    console.log("Token received:", token)
    fetchAllOrders()
  }, [token])


  return (
    <div>
      <h3>Order Page</h3>

      <div>
        {orders.map((order, index) => (
          <div key={index} className="order">

            <FaBeer />

            {/* ITEMS */}
            <div>
              {order.items?.map((item, idx) => (
                <p key={idx}>
                  {item.name} x {item.quantity} <span>{item.size}</span>
                  {idx < order.items.length - 1 && ","}
                </p>
              ))}
            </div>

            {/* NAME */}
            <p>
              {order.address?.firstName} {order.address?.lastName}
            </p>

            {/* ADDRESS */}
            <div>
              <p>{order.address?.street},</p>
              <p>
                {order.address?.city}, {order.address?.state},{" "}
                {order.address?.country}, {order.address?.zipcode}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
