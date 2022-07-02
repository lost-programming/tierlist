import {useRecoilValue} from "recoil";
import {defaultList, tierItems} from "../atom";
import List from "../components/list";
import ItemBox from "../components/item";
import {DndContext} from "@dnd-kit/core";

const Home = () => {
  const abs = useRecoilValue(tierItems);
  const list = useRecoilValue(defaultList);
  return (
    <div className="w-[1160px] h-full py-[80px] my-0 mx-auto">
      <DndContext>
        {list.map((item: string, index) => {
          return (
            <List title={item} items={abs.classBox[index]} key={`list-${index}`}/>
          )
        },)}
      </DndContext>

      <ItemBox/>
    </div>
  )
}

export default Home;
