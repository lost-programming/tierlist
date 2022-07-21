import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {useRecoilState, useRecoilValue} from "recoil";
import {tierListState, tierTitleState } from "../atom";
import List from "../components/list";
import ImageItem from "../components/item/image";


const Home = () => {
  const tierList = useRecoilValue(tierListState);
  const tierTitles = useRecoilValue(tierTitleState); // {id: 1, title: 's'}

  const initTierData = (title: string) => {
    return tierList
      .filter((data: any) => data.tier === title)
      .map((item: any, index) => <ImageItem key={index} item={item}/>)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-[1160px] h-full py-[80px] my-0 mx-auto">
        {tierTitles.map((data: any) => (
          <List title={data.title} key={data.id}>
            {initTierData(data.title)}
          </List>
        ))}
      </div>
    </DndProvider>
  )
}

export default Home;
