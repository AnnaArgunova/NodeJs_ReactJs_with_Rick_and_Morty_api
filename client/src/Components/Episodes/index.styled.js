import styled from "styled-components";
import {blue, darkBlue} from "../../styles/color";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Item = styled.a`
  width: 150px;
  height: 100px;

  border: solid 1px ${darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  
  margin: 10px 0;
`;

export const Title = styled.p`
  color: ${blue};
  text-transform: uppercase;
  font-size: 14px;
  
  width: 100px;
`;