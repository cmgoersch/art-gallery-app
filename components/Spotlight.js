import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ pieces }) {
  const ListItem = styled.li`
    color: red;
  `;

  const DivItem = styled.div``;

  return (
    <>
      <h1>{pieces.artist}</h1>
      <DivItem>
        <Image
          src={pieces.imageSource}
          width={pieces.dimensions.width / 4}
          height={pieces.dimensions.height / 4}
          alt={pieces.name}
        />
      </DivItem>
    </>
  );
}
