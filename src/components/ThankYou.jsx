import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ThankYou = () => {
    const {orderId} = useParams()
  return (
    <div className='container'>
        <div className='row my-3'>
            <div className='col-md-12 text-center'>
                {orderId ? <div className='alert alert-warning text-center' role="alert"><h3>Gracias por tu compra!</h3><p>Se genero una orden de compre con el ID: <b>{orderId}</b></p> </div>:""}
                <Link to={"/"} className="btn btn-warning">Volver al inicio</Link>
            </div>

        </div>
    </div>
  )
}

export default ThankYou;