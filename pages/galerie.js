import ArtPieces from "@/components/ArtPieces";
import Link from "next/link";

export default function Galerie({ data }) {
  return (
    <>
      <Link href={`/`}>back</Link>
      <h1>Galerie</h1>
      <ArtPieces pieces={data} />
    </>
  );
}
