import {atom} from "recoil";

export const defaultList = atom({
  key: 'defaultList',
  default: [
    {id: 'S', style: 'bg-blue000'},
    {id: 'A', style: 'bg-blue005'},
    {id: 'B', style: 'bg-blue010'},
    {id: 'C', style: 'bg-blue020'},
    {id: 'D', style: 'bg-blue030'}
  ]
});

export const tierItems = atom({
  key: 'tierItems',
  default: {
    itemBox: [
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
    ],
    classBox: [
      {id: 'S', list: []},
      {id: 'A', list: []},
      {id: 'B', list: []},
      {id: 'C', list: []},
      {id: 'D', list: []},
    ]
  }
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
