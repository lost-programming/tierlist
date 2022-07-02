import React, {useState} from "react";
import {closestCenter, DndContext, PointerSensor, useSensor} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import ImageItem from "./image";
import {useRecoilState} from "recoil";
import {foodItems} from "../../atom";

const ItemBox = () => {
  const [items, setItems] = useRecoilState(foodItems);

  const sensors = [useSensor(PointerSensor)]

  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
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
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map(item => <ImageItem {...item} key={item.id}/>)}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default ItemBox;
