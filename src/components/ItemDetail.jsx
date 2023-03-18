import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext)

  const onAdd = (quantity) =>{
    addItem(item, quantity)
  }


  return (
    <>
        <div key={item.index}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Center>
                <Image borderRadius="lg" src={item.img} width={"400px"} />
                </Center>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.name}</Heading>
                  <Text>Descripcion: {item.description}</Text>
                  <Text>Categoria: {item.category}</Text>
                  <Text>Precio: $ {item.price}</Text>
                  <Text>stock: {item.stock}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                stock={item.stock}
                onAdd={onAdd}
                />              
              </CardFooter>
            </Card>
          </Center>
        </div>
    </>
  );
};
export default ItemDetail;
