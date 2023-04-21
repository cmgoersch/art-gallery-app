import ArtPieces from "@/components/ArtPieces";
import Link from "next/link";
import useSWR from "swr";

export default function Galerie() {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`);
  // console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Link href={`/`}>back</Link>
      <h1>Galerie</h1>
      <ArtPieces pieces={data} />
    </>
  );
}
