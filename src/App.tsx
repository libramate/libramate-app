import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/common/NavBar/NavBar";
import Authentificating from "./pages/Auth/Authentificating";
import ChooseAuthProvider from "./pages/Auth/ChooseAuthProvider";
import Splash from "./pages/Auth/Splash";
import Library from "./pages/Library/library";
import BarcodeScanner from "./pages/Scanner/ScannerComponent";

function NavSite(props: { element: JSX.Element }) {
  return (
    <>
      <div id="main-content">{props.element}</div>
      <NavBar />
    </>
  );
}

function NavlessSite(props: { element: JSX.Element }) {
  return <div id="main-content">{props.element}</div>;
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<NavlessSite element={<Splash />} />} />
            <Route
              path="/library"
              element={<NavSite element={<Library />} />}
            />
            <Route
              path="/scan"
              element={<NavlessSite element={<BarcodeScanner />} />}
            />
            <Route
              path="/login"
              element={<NavlessSite element={<ChooseAuthProvider />} />}
            />
            <Route
              path="/auth/callback"
              element={<NavlessSite element={<Authentificating />} />}
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
}
