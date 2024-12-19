import Detail from "../components/Detail";
import Home from "../components/Home/index";
import { Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Detail pages */}
      <Route path="/detail/:id" element={<Detail />} />

      {/* 404 Not Found page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Root;
