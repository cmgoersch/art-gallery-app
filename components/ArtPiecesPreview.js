import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecesPreview({ pieces }) {
  const ListItem = styled.li`
    color: #bccbd5;
  `;

  return (
    <>
      <h1>{pieces.artist}</h1>
      <div>
        <Image
          src={pieces.imageSource}
          width={600}
          height={500}
          alt={pieces.name}
        />
        <ul>
          <ListItem>Picturename:{pieces.name}</ListItem>
          <li>Year: {pieces.year}</li>
          <li>Genre: {pieces.genre}</li>
          <li>
            {pieces.colors.map((color) => {
              const ListColor = styled.li`
                background-color: ${color};
                color: white;
              `;
              return <ListColor>Farbe:{color}</ListColor>;
            })}
          </li>
          <li>Year: {pieces.year}</li>
        </ul>
      </div>
    </>
  );
}
