import React, { useState } from "react";
import { useDrop } from "react-dnd";

interface ListProp {
  title: string
  children: any
}


const List = ({ title, children }: ListProp) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'image',
    drop: () => ({tier: title}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  return (
    <div className={`flex h-[100px] ${title !== 'base' ? 'border border-b-gray020' : ''}`}>
      {title !== 'base' &&
        (
          <div className={`flex items-center justify-center w-[120px] h-full bg-${title}`}>
            <p>{ title }</p>
          </div>
        )
      }
      <div className={`flex items-center w-full h-full ${title !== 'base' ? 'bg-black' : 'bg-white'}`} ref={drop}>
        { children }
      </div>
    </div>
  )
}

export default List;
