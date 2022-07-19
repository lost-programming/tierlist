import React from "react";
import { useDrag } from "react-dnd";

interface ItemProps {
  id: string
  img: string
  name : string
}

const ImageItem = ({ id, img, name }: ItemProps) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'image',
    item: {id: id},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  }));

  return (
    <img
      id={id}
      src={img}
      alt={name}
      title={name}
      ref={drag}
      className='w-24 h-24'
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
}

export default ImageItem;
