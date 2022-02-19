import NotFound from "./pages/Errors/NotFound";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/common/NavBar/NavBar";
import Account from "./pages/Account/Account";
import Authentificating from "./pages/Auth/Authentificating";
import ChooseAuthProvider from "./pages/Auth/ChooseAuthProvider";
import Splash from "./pages/Auth/Splash";
import BookDetails from "./pages/Books/BookDetails";
import CreateBook from "./pages/Books/CreateBook";
import LendBook from "./pages/Books/LendBook";
import ReturnBook from "./pages/Books/ReturnBook";
import Library from "./pages/Library/library";
import BarcodeScanner from "./pages/Scanner/ScannerComponent";
import Settings from "./pages/Settings/Settings";

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
            <Route
              path="/books/create"
              element={<NavlessSite element={<CreateBook />} />}
            />
            <Route
              path="/books/lend"
              element={<NavlessSite element={<LendBook />} />}
            />
            <Route
              path="/books/return"
              element={<NavlessSite element={<ReturnBook />} />}
            />
            <Route
              path="/books"
              element={<NavlessSite element={<BookDetails />} />}
            />
            <Route
              path="/settings"
              element={<NavSite element={<Settings />} />}
            />
            <Route
              path="/profile"
              element={<NavSite element={<Account />} />}
            />
            <Route path="/*" element={<NavSite element={<NotFound />} />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
}
