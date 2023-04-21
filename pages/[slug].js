import { useRouter } from "next/router";
import Link from "next/link";

export default function Details() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <>
      <Link href={`/`}>Back</Link>
      <h1>Detail Page</h1>
      <h2>Slug: {slug}</h2>

      {/* <ArtPiecesPreview />; */}
    </>
  );
}
