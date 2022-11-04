import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Footer from "../components/footer";
import Header from "../components/header";
import ContextProvider from "../context/provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <ContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default MyApp;
