import Root from "./root/Root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import { DetailProvider } from "./context/DetailContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <DetailProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </DetailProvider>
    </Provider>
  </StrictMode>
);
