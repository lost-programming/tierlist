interface IconFormType {
  id: any
  name: any
}

const IconForm = ({ id, name }: IconFormType) => {
  return (
    <div
      style={{
        border: '2px solid black',
        marginBottom: 10,
        marginTop: 10
      }}
    >
      {name}
    </div>
  )
}

export default IconForm;