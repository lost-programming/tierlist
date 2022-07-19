import React, { useState } from "react";
import ImageItem from "../item/image/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { foodItems } from "../../atom";
import { useDrop } from "react-dnd";

interface ListProps {
  title: string;
  items: any;
  isDrop: any;
}

const List = ({ title, items, isDrop }: ListProps) => {
  const [board, setBoard] = useState([]);

  // const addImageToBoard = (id: any, list: any) => {
  //   const imageList = list.filter((image: any) => id === image.id);
  //   setBoard((board):any => [...board, imageList[0]]);
  //   const ItemList = list.filter((image: any) => id !== image.id);
  //   setItems(ItemList);
  // };

  const [{isOver}, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: any) => isDrop(item.id, title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    }),
  }));

  return (
    <div className="flex h-[100px] border border-b-gray020">
      <div className={`flex items-center justify-center w-[120px] h-full bg-${title}`}>
        <p className="">{title}</p>
      </div>
      <div className="flex items-center w-full h-full bg-black" ref={drop}>
        {items.map((image: any) => {
          return <ImageItem key={image.id} id={image.id} img={image.img} name={image.name}/>
        })}
      </div>
    </div>
  )
}

export default List;
