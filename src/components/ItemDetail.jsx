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
  import { useParams } from "react-router-dom";
  
  const ItemDetail = ({ products }) => {
    const { id } = useParams();
  
    const productFilter = products.filter((prod) => prod.id == id);
  
    return (
      <>
        {productFilter.map((prod) => (
          <div key={prod.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={prod.img} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{prod.name}</Heading>
                    <Text>Descripcion: {prod.description}</Text>
                    <Text>Categoria: {prod.category}</Text>
                    <Text>Precio: $ {prod.price}</Text>
                    <Text>stock: {prod.stock}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer"></CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
export default ItemDetail