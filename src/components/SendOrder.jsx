import { Button, Input , Box, Text} from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore"; 
import { useContext, useState } from 'react';
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const SendOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const {cart, cartSumaTotal, clear} = useContext(CartContext)
  
    const db = getFirestore();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id)); 
      clear()
    };
  
    const fecha= new Date()
    const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDay()}  ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`

    const order = {
      name,
      email,
      telefono,
      date,
      items:cart,
      total:cartSumaTotal()
    };
  
    const ordersCollection = collection(db, "orden");
  
    return (
      <Box borderWidth="3px" w="1000px">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nombre y apellido"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input type="number" placeholder="Telefono" onChange={(e)=> setTelefono(e.target.value)} required>
          </Input>
          <Button type="submit">Generar Orden</Button>
        </form>
        {orderId ? <Navigate to={"/thankyou/" + orderId}/> : ""}
      </Box>
    );
}

export default SendOrder