import styled from "styled-components";
import {white} from "../../styles/color";

export const Wrapper = styled.div`
  position: fixed;
  background: ${white};
  z-index: 10;
  width: 100%;
  top: 0;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
`;

export const Item = styled.li`
  list-style: none;
  margin-right: 20px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
  }
`;