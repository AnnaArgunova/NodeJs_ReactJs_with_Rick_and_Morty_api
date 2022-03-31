import styled from "styled-components";
import {blue, darkBlue} from "../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  a{
    text-decoration: none;
  }
`;

export const Links = styled.div`
  display: flex;
  margin: 0 5px;
  color: ${(props) => (props.active ? darkBlue : blue)};
  font-size: ${(props) => (props.active ? "14" : "20")};
  font-weight: ${(props) => (props.active ? "900" : "normal")};
`;