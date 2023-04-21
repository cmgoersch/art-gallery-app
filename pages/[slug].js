import { useRouter } from "next/router";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";
import Link from "next/link";
import useSWR from "swr";

export default function Details() {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useSWR(`https://example-apis.vercel.app/api/art`);
  console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  const previewPicture = data.find((element) => element.slug === slug);

  console.log("guck mal", previewPicture);

  return (
    <>
      <Link href={`/`}>Back</Link>
      <h1>Detail Page</h1>
      <h2>Slug: {slug}</h2>
      <ArtPiecesPreview pieces={previewPicture} />
    </>
  );
}
