import ArtPiecesPreview from "@/components/ArtPiecesPreview";
// import { useRouter } from "next/router";

export default function Details() {
  // const router = useRouter();
  // const { slug } = router.query;

  return (
    <>
      <h1>Detail Page</h1>
      <h2>Slug: {slug}</h2>
      <ArtPiecesPreview />;
    </>
  );
}
