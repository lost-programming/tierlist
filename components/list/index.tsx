import React from "react";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";

interface ListProps {
  title: string;
  items: any;
  bgStyle: string;
}

const List = ({ title, items, bgStyle }: ListProps) => {
  const bgClass = `bg-${title}`;
  return (
    <div className="flex h-[100px] border border-b-gray020">
      <div className={`flex items-center justify-center w-[120px] h-full ${bgStyle}`}>
        <p className="">{title}</p>
      </div>
      <div className="flex items-center w-full h-full bg-black">
        <SortableContext
          items={[]}
          strategy={verticalListSortingStrategy}
        >
        </SortableContext>
      </div>
    </div>
  )
}

export default List;
