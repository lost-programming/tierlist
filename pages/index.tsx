import { useRecoilState } from "recoil";
import { defaultList, foodItems } from "../atom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import List from "../components/list";
import ItemBox from "../components/item";
import {useCallback} from "react";

const Home = () => {
  const [items, setItems] = useRecoilState(foodItems);
  const [list, setList] = useRecoilState(defaultList);

  const addImageToBoard = (id: any, tier: string, test?: any) => {
    const tierList = list.find((item: any) => item.id === tier) || { list: [] };
    const image: any = items.filter((image: any) => id === image.id);
    let newList = [{}];

    if (tierList.list.length > 0) {
      const tierImage: any = tierList.list.filter((image: any) => id === image.id);
      newList = [...tierImage, ...image, ...tierList.list];
    } else {
      newList = [...tierList.list, ...image];
    }

    setList(
      list.map((v: any) => {
        return v.id === tier ? {...v, list: newList} : v
      })
    )
    deleteItem(id);
  };

  const callbackTest = useCallback((id: string, tier: string, test?: any) => {
    console.log(test);
    // const tierList = list.find((item: any) => item.id === tier) || { list: [] };
    // const image: any = items.filter((image: any) => id === image.id);
    // let newList = [{}];
    //
    // if (tierList.list.length > 0) {
    //   const tierImage: any = tierList.list.filter((image: any) => id === image.id);
    //   newList = [...tierImage, ...image, ...tierList.list];
    // } else {
    //   newList = [...tierList.list, ...image];
    // }
    //
    // setList(
    //   list.map((v: any) => {
    //     return v.id === tier ? {...v, list: newList} : v
    //   })
    // )
    deleteItem(id);
  }, [items, list])

  const deleteItem = (id: string) => {
    const ItemList = items.filter((image: any) => id !== image.id);
    setItems(ItemList);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-[1160px] h-full py-[80px] my-0 mx-auto">
        {list.map((item: any, index) => {
          return (
            <List
              title={item.id}
              items={item.list}
              isDrop={callbackTest}
              key={`list-${index}`}
            />
          )
        },)}
        <ItemBox items={items}/>
      </div>
    </DndProvider>
  )
}

export default Home;
