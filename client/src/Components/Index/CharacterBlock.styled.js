import styled from "styled-components";
import {darkBlue, lightBlue} from "../../styles/color";


export const Title = styled.p`
  color: ${darkBlue};
  font-size: 16px;
  font-weight: bold;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.a`
  text-decoration: none;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  color: ${darkBlue};
`;

export const ScrollWrapper = styled.div`
  width: 100%
`;

export const Scroll = styled.div`
  overflow-x: scroll;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-gap: 20px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${lightBlue};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${darkBlue};
    border-radius: 20px;
    border: 3px solid ${lightBlue};
  }
`;



