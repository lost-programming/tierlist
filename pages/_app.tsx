import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { DndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'
import IconForm from '../components/IconForm'

const TierList = ({ Component, pageProps }: AppProps) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Chicken',
      image: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2175114_20220106094224864.png'
    },
    {
      id: 2,
      name: 'Pizza',
      image: 'https://img.hankyung.com/photo/202108/99.26501439.1-1200x.jpg'
    },
    {
      id: 3,
      name: 'Steak',
      image: 'https://static.wtable.co.kr/image/production/service/recipe/873/1c52a4fd-68fb-458f-aa6c-cf3537d674df.jpg'
    }
  ])

  const sensors = useSensors()

  return (
    <div
      style={{
        margin: 'auto',
        textAlign: 'center'
      }}
    >
      <DndContext
        sensors={sensors}
      >
        <SortableContext>
          {
            items.map(
              item => <IconForm {...item} key={item.id} />
            )
          }
        </SortableContext>
      </DndContext>
      <Component {...pageProps} />
    </div>
  )
}

export default TierList;
