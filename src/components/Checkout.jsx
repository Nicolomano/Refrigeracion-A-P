import {
    Center,
  } from "@chakra-ui/react";
  import React from "react";
  import { useContext } from "react";
  import { CartContext } from "../context/CartContext";
import SendOrder from "./SendOrder";
  
  const Checkout = () => {
    const { cart, cartSumaTotal, clear } =useContext(CartContext);
  
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                {cart.map((item) => (
                  <tr key={item.id} className="carrito"> 
                    <td className="text-start">
                      <img src={item.img} alt={item.name} width={80} />
                    </td>
                    <td className="text-start">{item.name}</td>
                    <td className="text-start">
                      {item.quantity} x ${item.price}
                    </td>
                    <td className="text-start">${item.quantity * item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td className="text-end" colSpan={3}>
                    Total a pagar
                  </td>
                  <td>
                    <b>${cartSumaTotal()}</b>
                  </td>
                </tr>
              </table>
              <Center>
                <SendOrder/>
              </Center>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default Checkout