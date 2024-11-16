import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenericElement from "../view/index";

const Layout = ({ children, page }) => {
  return (
    <Fragment>
      {page === true ? (
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
