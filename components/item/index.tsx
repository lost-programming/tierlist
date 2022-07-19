import React from "react";
import ImageItem from "./image";

interface ItemBoxProps {
  items: any;
}

const ItemBox = ({ items }: ItemBoxProps) => {
  return (
    <div className='mx-auto flex'>
      {items.map((image: any) => {
        return <ImageItem key={image.id} id={image.id} img={image.img} name={image.name}/>
      })}
    </div>
  );
}

export default ItemBox;
