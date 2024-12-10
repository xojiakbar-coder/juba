import "./index.css";
import Root from "./root/Root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { DetailProvider } from "./context/DetailContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DetailProvider></DetailProvider> */}
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
