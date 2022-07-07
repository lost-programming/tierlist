import { useRecoilValue } from "recoil";
import { defaultList } from "../atom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import List from "../components/list";
import ItemBox from "../components/item";

const Home = () => {
  const list = useRecoilValue(defaultList);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-[1160px] h-full py-[80px] my-0 mx-auto">
        {list.map((item: any, index) => {
          return (
            <List title={item.id} bgStyle={item.style} items={item.list} key={`list-${index}`}/>
          )
        },)}
        <ItemBox/>
      </div>
    </DndProvider>
  )
}

export default Home;
