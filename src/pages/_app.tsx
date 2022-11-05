import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Footer from "../components/footer";
import Header from "../components/header";
import ContextProvider from "../context/provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
