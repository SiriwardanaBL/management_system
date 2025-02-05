// import { Fragment } from "react/jsx-runtime";
//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items,heading, onSelectItem}:Props) {

  const Message = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  const [selectdIndex, setSelectedIndex] = useState(-1);

  //const handleClick = (event:MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      <Message />
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectdIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() =>{
                
                setSelectedIndex(index);
                onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
