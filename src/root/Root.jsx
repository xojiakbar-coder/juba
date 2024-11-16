import { Fragment } from "react";
import Home from "../components/Home/index";
import useMessages from "../hooks/useMessage";
import Seo from "../components/Detail/Seo/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  const { contextHolder } = useMessages();
  return (
    <Fragment>
      {contextHolder}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/seo" element={<Seo />} />
          <Route element={<Navbar />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Root;
