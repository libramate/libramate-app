import "../styles/globals.scss";
import "../common/components/Loading/Loading.scss";
import type { AppProps } from "next/app";
import { FC } from "react";
// pages/_app.js
import { SessionProvider } from "next-auth/react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
