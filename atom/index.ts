import { atom } from "recoil";

export const defaultList = atom({
  key: 'defaultList',
  default: ['S', 'A', 'B', 'C', 'D']
});

export const foodItems = atom({
  key: 'foodItems',
  default: [
    {
      id: '1',
      name: '치킨',
      img: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2175114_20220106094224864.png'
    },
    {
      id: '2',
      name: '피자',
      img: 'https://img.hankyung.com/photo/202108/99.26501439.1-1200x.jpg'
    },
    {
      id: '3',
      name: '돈가스',
      img: 'https://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_1280.jpg'
    },
    {
      id: '4',
      name: '족발',
      img: 'http://image.auction.co.kr/itemimage/23/f5/9d/23f59d9426.jpg'
    },
    {
      id: '5',
      name: '보쌈',
      img: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/20/ecdefb73ec9113b40fcb123183e4eeb51.jpg'
    }
  ]
});
