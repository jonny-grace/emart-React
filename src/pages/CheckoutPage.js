import React from 'react'
import { useParams } from 'react-router-dom'

function CheckoutPage() {
    const { totalAmount } = useParams()
    return (

        <div>
            <h2>Total Amount {totalAmount}</h2>
        </div>
    )
}

export default CheckoutPage