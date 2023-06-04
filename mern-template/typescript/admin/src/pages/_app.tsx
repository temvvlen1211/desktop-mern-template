import "@temkanibno/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { CurrentUserProvider } from "@temkanibno/providers/CurrentUserProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CurrentUserProvider>
        <Component {...pageProps} />
      </CurrentUserProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </RecoilRoot>
  );
}
