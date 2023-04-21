import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

//import { Roboto } from "next/font/google";

// const roboto = Roboto({ weight: "400", subsets: ["latin"] });

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export default function App({ Component, pageProps }) {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </>
  );
}
