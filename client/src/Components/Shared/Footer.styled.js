import styled from "styled-components";
import {darkBlue, white} from "../../styles/color";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  bottom: 0;
  background: ${darkBlue};
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
`;

export const Item = styled.li`
  list-style: none;
  margin-right: 20px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    color: ${white};

  }
`;

export const ItemWithMargin = styled.li`
  list-style: none;
  margin-right: 20px;
  margin-left: auto;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    color: ${white};

  }
`;