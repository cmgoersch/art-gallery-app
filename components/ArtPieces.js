import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
// import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  const UlItem = styled.ul`
    display: flex;
    align-content: center;
    flex-direction: rows;
    justify-content: center;
    flex-flow: wrap;
    gap: 20px;
  `;

  const LiItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  `;

  const DivItem = styled.div`
    text-decoration: none;
    background-color: gray;
    padding: 5px 0px 5px 0px;
    margin: 5px 0px 5px 0px;
    text-align: center;
    color: white;
  `;

  return (
    <>
      <UlItem>
        {pieces.map((picture) => {
          return (
            <LiItem key={picture.slug}>
              <Link href={`${picture.slug}`}>
                <>
                  <Image
                    src={picture.imageSource}
                    width={picture.dimensions.width / 8}
                    height={picture.dimensions.height / 8}
                    alt={picture.name}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <DivItem>{picture.artist}</DivItem>
                </>
              </Link>
            </LiItem>
          );
        })}
      </UlItem>
    </>
  );
}
