import { Fragment } from "react";
import Home from "../components/Home/index";
import useMessages from "../hooks/useMessage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Root = () => {
  const { contextHolder } = useMessages();
  return (
    <Fragment>
      {contextHolder}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Root;
