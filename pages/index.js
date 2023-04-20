import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

export default function HomePage() {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  return (
    <>
      <ul>
        {data.map((picture) => {
          return (
            <li key={picture.slug}>
              {picture.artist} <ArtPieces pieces={picture} />
            </li>
          );
        })}
      </ul>
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
