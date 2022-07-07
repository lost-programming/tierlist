import React from "react";
import ImageItem from "./image";
import { useRecoilValue } from "recoil";
import { foodItems } from "../../atom";

const ItemBox = () => {
  const items = useRecoilValue(foodItems);

  return (
    <div className='mx-auto flex'>
      {items.map((image: any) => {
        return <ImageItem id={image.id} img={image.img} name={image.name}/>
      })}
    </div>
  );
}

export default ItemBox;
