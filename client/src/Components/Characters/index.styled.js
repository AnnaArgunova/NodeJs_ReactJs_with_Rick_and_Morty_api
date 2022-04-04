import styled from "styled-components";
import {mobile} from "../../styles/breackpoints";

export const WrapperCharacters = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  
  margin-bottom: 20px;

  @media all and (max-width: ${mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;