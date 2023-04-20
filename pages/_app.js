import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

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
