import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products?.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          description={prod.description}
          price={prod.price}
          stock={prod.stock}
          category={prod.category}
          img={prod.img}
        />
      ))}
    </>
  );
};

export default ItemList;
