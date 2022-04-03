import styled from "styled-components";
import {blue, darkBlue} from "../../styles/color";
import {mobile} from "../../styles/breackpoints";

export const Item = styled.a`
  width: 200px;
  height: 100px;

  border: solid 1px ${darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  margin: 10px 0;

  @media all and (max-width: ${mobile}) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: ${blue};
  text-transform: uppercase;
  font-size: 14px;

  width: 100px;

  @media all and (max-width: ${mobile}) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;