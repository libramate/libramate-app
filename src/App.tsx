import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/common/NavBar/NavBar";
import Library from "./pages/Library/library";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div id="main-content">
          <Fragment>
            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </Fragment>
        </div>
        <NavBar></NavBar>
      </BrowserRouter>
    </>
  );
}
