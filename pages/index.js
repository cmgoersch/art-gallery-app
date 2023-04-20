import { useId } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  // const [id, setId] = useState(1);

  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  return (
    <>
      <div>
        <h1>hello World</h1>
        <ul>
          {data.map((picture) => {
            return <li key={useId}>{picture.artist}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Hello from Next.js</h1>
//     </div>
//   );
// }

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
