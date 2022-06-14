import NavBar from "./NavBar";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default AppLayout;