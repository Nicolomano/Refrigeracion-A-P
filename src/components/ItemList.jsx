import Item from "./Item";

const ItemList = ({ prods }) => {
  return (
    <div className="item-list">
      {prods.map(item => (
        <div key={item.index}>
        <Item item={item}/>
        </div>
      ))}
      </div>
  )
}

export default ItemList;
