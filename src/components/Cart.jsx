import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  WrapItem,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, removeItem, cartSumaTotal, clear } =useContext(CartContext);
  if (cartTotal() === 0) {
    return (
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          No se encontraron productos!!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          asegurese de agregar al carrito los productos que desea comprar
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <tr>
                <td className="text-end">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      clear();
                    }}
                  >
                    Vaciar Carrito
                  </button>
                </td>
              </tr>
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
                  <Link
                    onClick={() => {
                      removeItem(item.index);
                    }}
                    title="eliminar producto"
                  >
                    <td className="text-end">
                      {" "}
                      <button type="button" className="btn btn-warning">
                        {" "}
                        X{" "}
                      </button>
                    </td>
                  </Link>
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
              <WrapItem>
                <Link to={"/checkout"}>
                  <Button colorScheme="blue">Finalizar compra</Button>
                </Link>
              </WrapItem>
            </Center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
