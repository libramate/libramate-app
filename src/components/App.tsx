import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./common/NavBar/NavBar";
import Library from "./pages/Library/library";

export default function App() {
  return (
    <>
      <div id="main-content">
        <BrowserRouter>
          <Fragment>
            <Routes>
              <Route path="/" element={<Library />} />
            </Routes>
          </Fragment>
        </BrowserRouter>
      </div>
      <NavBar></NavBar>
    </>
  );
}
