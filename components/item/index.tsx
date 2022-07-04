import React, {useState} from "react";
import {closestCenter, DndContext, PointerSensor, useSensor} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import ImageItem from "./image";
import {useRecoilState} from "recoil";
import {foodItems, tierItems} from "../../atom";

const ItemBox = () => {
  const [items, setItems] = useRecoilState(tierItems);

  const sensors = [useSensor(PointerSensor)]

  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over.id) {
      const activeIndex = items.itemBox.findIndex(item => item.id === active.id);
      const overIndex = items.itemBox.findIndex(item => item.id === over.id);

      setItems((items) => ({
        ...items,
        itemBox: arrayMove(items.itemBox, activeIndex, overIndex)
      }));
    }
  }

  return (
    <div className='mx-auto flex'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.itemBox.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.itemBox.map(item => <ImageItem {...item} key={item.id}/>)}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default ItemBox;
