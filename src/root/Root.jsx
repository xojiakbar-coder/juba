import Home from "../components/Home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Branding, Developing, Seo } from "../components/Detail";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/website-development" element={<Developing />} />
        <Route path="/branding" element={<Branding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
