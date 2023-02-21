import ItemList from "./ItemList";
import products from "../data.json";
import { useParams } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();

  const catFilter = products.filter((prod) => prod.category === category)
  return (
    <div>
      <Center>
        <Heading>
          Catalogo de productos
        </Heading>
      </Center>
      {category ? <ItemList products={catFilter} /> : <ItemList products={products}/>}
    </div>

  );
};

export default ItemListContainer;
