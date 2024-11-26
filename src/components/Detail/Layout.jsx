import Navbar from "../Navbar";
import Footer from "../Footer";
import { Fragment } from "react";
import GenericElement from "../../view/index";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {children ? (
        <Fragment>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Fragment>
      ) : (
        <GenericElement />
      )}
    </Fragment>
  );
};

export default Layout;
