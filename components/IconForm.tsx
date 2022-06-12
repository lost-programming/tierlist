import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities'

interface IconFormType {
  id: any
  name: any
  img: string
}

const IconForm = ({ id, name, img }: IconFormType) => {

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
    border: '2px solid black',
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
      <img src={img} style ={{ width: 100, height: 100 }}/>
    </div>
  )
}

export default IconForm;