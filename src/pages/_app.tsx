import "../styles/globals.scss";
import "../common/components/Loading/Loading.scss";
import type { AppProps } from "next/app";
import { FC } from "react";

// pages/_app.js
const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
