import NotFound from "./pages/Errors/NotFound";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/common/NavBar/NavBar";
import Account from "./pages/Account/Account";
import Authentificating from "./pages/Auth/Authentificating";
import ChooseAuthProvider from "./pages/Auth/ChooseAuthProvider";
import Splash from "./pages/Auth/Splash";
import BookDetails from "./pages/Books/BookDetails/BookDetails";
import CreateBook from "./pages/Books/CreateBook";
import LendBook from "./pages/Books/LendBook";
import ReturnBook from "./pages/Books/ReturnBook";
import Library from "./pages/Library/Library";
import BarcodeScanner from "./pages/Scanner/ScannerComponent";
import SettingsPage from "./pages/Settings/Settings";
import AuthAccessDenied from "./pages/Errors/AuthAccessDenied";

function NavSite(props: { element: JSX.Element }): JSX.Element {
  return (
    <>
      <div id="main-content">{props.element}</div>
      <NavBar />
    </>
  );
}

function NavlessSite(props: { element: JSX.Element }): JSX.Element {
  return <div id="main-content">{props.element}</div>;
}

export default function App(): JSX.Element {
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
              path="/auth/accessDenied"
              element={<NavlessSite element={<AuthAccessDenied />} />}
            />
            <Route
              path="/book/create"
              element={<NavlessSite element={<CreateBook />} />}
            />
            <Route
              path="/book/lend"
              element={<NavlessSite element={<LendBook />} />}
            />
            <Route
              path="/book/return"
              element={<NavlessSite element={<ReturnBook />} />}
            />
            <Route
              path="/book"
              element={<NavlessSite element={<BookDetails />} />}
            />
            <Route
              path="/settings"
              element={<NavSite element={<SettingsPage />} />}
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
