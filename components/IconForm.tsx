import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities'

interface IconFormType {
  id: string
  img: string
  name : string
}

const IconForm = ({ id, img, name }: IconFormType) => {

  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id: id })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    marginBottom: 10,
    marginTop: 10,
    opacity: isDragging ? 0.5 : 1
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <img 
        src={img} 
        alt={name} 
        title={name} 
        style ={{ width: 100, height: 100 }}
      />
      {/* <img> 부분 next.js 참고해서 next/image 형식으로 바꿔야함 */}
    </div>
  )
}

export default IconForm;