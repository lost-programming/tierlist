import NavBar from "./NavBar";

const AppLayout = ({ children }: any) => {
  return (
    <div className='grid'>
      <NavBar />
      {children}
    </div>
  )
}

export default AppLayout;