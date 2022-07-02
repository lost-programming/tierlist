import React from "react";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";

interface ListProps {
  title: string;
  items: any;
}

const List = ({ title, items }: ListProps) => {
  console.log(items);
  return (
    <div className="flex h-[150px] border border-b-gray020">
      <div className="flex items-center justify-center w-1/6 h-full bg-red">
        <p className="">{title}</p>
      </div>
      <div className="flex items-center w-5/6 h-full bg-black">
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
