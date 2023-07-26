import { ThemeProvider } from "@mui/material";
import { amber } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import router from "./routes";
import store from "./store";
import MusicState from "./context/MuiscList/MusicState";

const theme = createTheme({
  palette: {
    primary: amber,
    secondary: {
      main: "#ffd54f",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const persistor = persistStore(store);

const REACT_APP_GOOGLE_CLIENT_ID =
  "57595132312-5sr14i6adibnfj7nj0nui6sekndi63jk.apps.googleusercontent.com";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
          <MusicState>
            <RouterProvider router={router} />
          </MusicState>
        </GoogleOAuthProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
