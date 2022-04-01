import styled from "styled-components";

export const Title = styled.h1``;

export const WrapperCharacters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media all and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;