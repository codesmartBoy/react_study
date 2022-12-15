import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./noHook/App";
// import App from "./Counter/App";
// import App from "./useState使用/App";
// import App from "./useEffect/App";
// import App from "./5_useContext/App";
// import App from "./06_useReducer/App";
// import App from "./07_useCallback/App";
// import App from "./08_useMemo/index";
// import App from "./09_useRef/App";
// import App from "./10_useImperativeHandle/App";
// import App from "./11_useLayoutEffect/App";
// import App from "./12_redux中的hook/App";
// import App from "./13_useId/App";
import App from "./14_useTransition/App";
import store from "./12_redux中的hook/store";

import { UserContext, ThemeContext } from "./5_useContext/context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext.Provider value={{ name: "why", level: "99" }}>
    <ThemeContext.Provider value={{ color: "red", size: 30 }}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContext.Provider>
  </UserContext.Provider>
);
