import styled from "styled-components";
import {darkBlue} from "../../styles/color";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  color: ${darkBlue};
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ItemTitle = styled.p``;

export const ItemText = styled.p``;

export const CharactersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

export const Characters = styled.div`

`;

export const CharactersName = styled.div`
  color: ${darkBlue};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
`

export const CharacterItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  border: solid 1px ${darkBlue};
  border-radius: 3px;
  
  text-decoration: none;
  color: ${darkBlue};
`;

export const CharacterTitle = styled.p``;

export const CharacterImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;