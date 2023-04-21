import Image from "next/image";

export default function ArtPieces({ pieces }) {
  // console.log(pieces);
  return (
    <>
      <div>
        <Image
          src={pieces.imageSource}
          width={600}
          height={500}
          alt={pieces.name}
        />
      </div>
    </>
  );
}
