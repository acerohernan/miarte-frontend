import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
