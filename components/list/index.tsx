import React from "react";

interface ListProps {
  title: string;
}

const List = ({ title }: ListProps) => {
  return (
    <div className="flex h-[150px] border border-b-gray020">
      <div className="flex items-center justify-center w-1/6 h-full bg-red">
        <p className="">{title}</p>
      </div>
      <div className="flex items-center w-5/6 h-full bg-black">

      </div>
    </div>
  )
}

export default List;
