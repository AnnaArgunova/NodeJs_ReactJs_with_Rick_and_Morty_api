import styled from "styled-components";
import {darkBlue} from "../../styles/color";

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