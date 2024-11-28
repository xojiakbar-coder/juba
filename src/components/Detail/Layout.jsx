import Navbar from "../Navbar";
import Footer from "../Footer";
import { Fragment } from "react";
import Form from "../Contact/Form";
import GenericElement from "../../view/index";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {children ? (
        <Fragment>
          <Navbar />
          <div>{children}</div>
          <Form />
          <Footer />
        </Fragment>
      ) : (
        <GenericElement />
      )}
    </Fragment>
  );
};

export default Layout;
