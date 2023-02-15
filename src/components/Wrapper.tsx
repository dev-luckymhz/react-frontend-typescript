import React, {ReactNode} from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
interface Props {
  children: ReactNode
}
const Wrapper = (props : Props) => {
  return (
      <div
          id="main-wrapper"
          data-layout="vertical"
          data-navbarbg="skin5"
          data-sidebartype="full"
          data-sidebar-position="absolute"
          data-header-position="absolute"
          data-boxed-layout="full"
      >
        <Navbar />
        <Sidebar />
        <div className="page-wrapper">
          {props.children}
          <Footer />
        </div>
      </div>
  )
}

export default Wrapper;