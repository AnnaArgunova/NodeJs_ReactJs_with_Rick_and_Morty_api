import styled from "styled-components";
import {blue, darkBlue} from "../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;

export const Links = styled.div`
  display: flex;
  margin: 0 5px;
`;

export const Link = styled.a`
  color: ${(props) => props.active ? darkBlue : blue};
  font-size: ${(props) => (props.active ? "20px" : "14px")};
  font-weight: ${(props) => (props.active ? "900" : "normal")};
`;

export const PaginationLink = styled.a`
  font-size: 14px;
  font-weight: 900;
  color: darkblue;
  margin:  0 10px;
`;