import React, { useState } from "react";
import ImageItem from "../item/image/index";
import { useDrop } from "react-dnd";
import { useRecoilValue } from "recoil";
import { foodItems } from "../../atom";

interface ListProps {
  title: string;
  items: any;
  isDrop: any;
}

const List = ({ title, items, isDrop}: ListProps) => {
  const foodList = useRecoilValue(foodItems);
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: any) => isDrop(item.id, title, foodList),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
  }));

  return (
    <div className="flex h-[100px] border border-b-gray020">
      <div className={`flex items-center justify-center w-[120px] h-full bg-${title}`}>
        <p className="">{title}</p>
      </div>
      <div className="flex items-center w-full h-full bg-black" ref={drop}>
        {items.map((image: any) => {
          return (
            <ImageItem key={image.id} id={image.id} img={image.img} name={image.name}/>
          )
        })}
      </div>
    </div>
  )
}

export default List;
