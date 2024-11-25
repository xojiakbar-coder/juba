import Layout from "./Layout";
import Home from "../components/Home/index";
import Detail from "../components/Detail";
import { Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Detail pages */}
      <Route
        path="/detail/:name"
        element={
          <Layout page={true}>
            <Detail />
          </Layout>
        }
      />

      {/* 404 Not Found page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Root;
