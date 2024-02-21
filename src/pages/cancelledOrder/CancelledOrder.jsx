import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../requestMethod'
import OrderItem from '../../components/orderItem/OrderItem'
import { SUMMER_SHOP } from '../../constants'

export default function CancelledOrder() {
    const [orderItem,setOrderItem] = useState([])
    useEffect(() => {
        const getOrderItem = async () => {
            const res = await axios.get(`${BASE_URL}/order/byCustomer?cancel=true`, {
                headers: {Authorization: `Bearer ${localStorage[SUMMER_SHOP]}`}
            })
            //console.log(res.data);
            setOrderItem(res.data.order)
        }
        getOrderItem();
    }, [])
    return (
        <div>
            {
                orderItem.map((order) => (
                    <OrderItem key={order.id} order={order} />
                ))
            }
        </div>
    )
}
