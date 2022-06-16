import { useState } from 'react'
import { closestCenter, DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import IconForm from '../components/IconForm'

const IconCard = () => {
  const [items, setItems] = useState([
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
  ])

  const sensors = [useSensor(PointerSensor)]

  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)
  
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className='mx-auto flex' >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map(item => <IconForm {...item} key={item.id} />)}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default IconCard;