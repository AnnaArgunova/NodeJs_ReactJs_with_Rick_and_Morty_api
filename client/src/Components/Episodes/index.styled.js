import styled from "styled-components";
import {mobile, tablet} from "../../styles/breackpoints";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media all and (max-width: ${tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: ${mobile}) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
