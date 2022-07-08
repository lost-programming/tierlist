import React, { useState } from "react";
import ImageItem from "../item/image/index";
import { useRecoilState } from "recoil";
import { foodItems } from "../../atom";
import { useDrop } from "react-dnd";

interface ListProps {
  title: string;
  items: any;
  bgStyle: string;
}

const List = ({ title, bgStyle }: ListProps) => {
  const bgClass = `bg-${title}`;

  const [items, setItems] = useRecoilState(foodItems);
  const [board, setBoard] = useState([]);

  const addImageToBoard = (id: any) => {
    const imageList = items.filter((image: any) => id === image.id);
    setBoard((board):any => [...board, imageList[0]]);
    const ItemList = items.filter((image: any) => id !== image.id);
    setItems(ItemList)
  };

  const [{isOver}, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: any) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    }),
  }));

  return (
    <div className="flex h-[100px] border border-b-gray020">
      <div className={`flex items-center justify-center w-[120px] h-full ${bgStyle}`}>
        <p className="">{title}</p>
      </div>
      <div className="flex items-center w-full h-full bg-black" ref={drop}>
        {board.map((image: any) => {
          return <ImageItem key={image.id} id={image.id} img={image.img} name={image.name}/>
        })}
      </div>
    </div>
  )
}

export default List;
