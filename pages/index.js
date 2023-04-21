import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";
import Spotlight from "@/components/Spotlight";
import Link from "next/link";

export default function HomePage() {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`);
  // console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  function onClickPicture(event) {
    return;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const unsereZahl = getRandomInt(0, data.length);
  console.log("Zahl:", unsereZahl);

  return (
    <>
      <Spotlight pieces={data[unsereZahl]} />
      <Link href={`/galerie`}> Galerie</Link>
      {/* <ArtPieces pieces={data} /> */}
    </>
  );
}

// So sehen unsere Daten aus :)

// {"slug":"orange-red-and-green",
// "artist":"Steve Johnson",
// "name":"Orange Red and Green Abstract Painting",
// "imageSource":"https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
// "year":"2018",
// "genre":"Abstract Painting",
// "colors":["#0f5855","#e6ba15","#b42011","#cec4c6","#d5561f"],
// "dimensions":{"height":2432,"width":1920,"type":"jpg"}},

// slug, artist, name, imageSource, year, genre, colors, dimensions /: height, width, type
