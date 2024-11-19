import Layout from "./Layout";
import { Fragment } from "react";
import Home from "../components/Home/index";
import useMessages from "../hooks/useMessage";
import detail_pages_data from "../utils/detail";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Detail pages */}
          {detail_pages_data.map(({ id, element: Element, path, page }) => {
            return (
              <Route
                key={id}
                path={path}
                element={
                  <Layout page={page}>
                    <Element />
                  </Layout>
                }
              />
            );
          })}

          {/* 404 Not Found page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Root;
