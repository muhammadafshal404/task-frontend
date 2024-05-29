import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Router from "./Routes";
import { customTheme } from "./theme";

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
