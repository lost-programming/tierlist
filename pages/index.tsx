import {useRecoilValue} from "recoil";
import {defaultList} from "../atom";
import List from "../components/list";
import ItemBox from "../components/item";

const Home = () => {
  const list = useRecoilValue(defaultList);
  return (
    <div className="w-[1160px] h-full py-[80px] my-0 mx-auto">
      <div>
        {list.map((item: string, index) => {
          return (
            <List title={item} key={`list-${index}`}/>
          )
        },)}
      </div>

      <ItemBox/>
    </div>
  )
}

export default Home
