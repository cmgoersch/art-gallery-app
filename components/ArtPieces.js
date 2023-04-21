import Image from "next/image";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  // console.log(pieces);
  return (
    <>
      <ul>
        {pieces.map((picture) => {
          return (
            <li key={picture.slug}>
              <Link href={`${picture.slug}`}>
                {picture.artist}
                <div>
                  <Image
                    src={picture.imageSource}
                    width={600}
                    height={500}
                    alt={picture.name}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
