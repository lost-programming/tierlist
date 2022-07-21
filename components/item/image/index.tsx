import React from "react";
import { useDrag } from "react-dnd";
import {useRecoilState} from "recoil";
import {tierListState} from "../../../atom";

interface ItemProps {
  item: any;
}

const ImageItem = ({ item }: ItemProps) => {
  const [food, setFood] = useRecoilState(tierListState);

  const changeItemTier = (item: any, tier: string) => {
    setFood((prev: any) => {
      return prev.map((e:any) => {
        return {
          ...e,
          tier: e.id === item.id ? tier : e.tier
        }
      })
    })
  }

  const [{ isDragging }, dragItem] = useDrag({
    type: 'image',
    item: item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end: (item: any, monitor) => {
      const dropResult: any = monitor.getDropResult();
      if (dropResult) {
        changeItemTier(item, dropResult.tier);
      }
    }
  });

  return (
    <img
      id={item.id}
      src={item.img}
      alt={item.name}
      title={item.name}
      ref={dragItem}
      className='w-24 h-24'
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
}

export default ImageItem;
