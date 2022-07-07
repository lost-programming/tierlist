import React from "react";
import Nav from "./nav";

const Layout = ({ children }: any) => {
  return (
    <div className='grid'>
      <Nav/>
      {children}
    </div>
  )
}

export default Layout;
