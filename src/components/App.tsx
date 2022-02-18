import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./common/NavBar/NavBar";
import Library from "./pages/Library/library";
import Scanner from "./pages/Scan/Scanner";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div id="main-content">
          <Fragment>
            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/scan" element={<Scanner />} />
            </Routes>
          </Fragment>
        </div>
        <NavBar></NavBar>
      </BrowserRouter>
    </>
  );
}