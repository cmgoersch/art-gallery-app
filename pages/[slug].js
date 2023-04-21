import { useRouter } from "next/router";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";
import Link from "next/link";

export default function Details({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const previewPicture = data.find((element) => element.slug === slug);

  return (
    <>
      <Link href={`/galerie`}>Back</Link>
      <h1>Detail Page</h1>
      <h2>Slug: {slug}</h2>
      <ArtPiecesPreview pieces={previewPicture} />
    </>
  );
}
