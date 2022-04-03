import styled from "styled-components";
import {darkBlue} from "../../styles/color";
import {mobile} from "../../styles/breackpoints";

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

export const ItemTitle = styled.p`
  font-weight: bold;
  margin-right: 10px;
  font-size: 20px;
`;

export const ItemText = styled.p`
  font-size: 16px;
`;

export const CharactersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;


  @media all and (max-width: ${mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Characters = styled.div``;

export const CharactersName = styled.div`
  color: ${darkBlue};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
`
