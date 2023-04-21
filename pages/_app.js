import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
//import { Roboto } from "next/font/google";

// const roboto = Roboto({ weight: "400", subsets: ["latin"] });

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
