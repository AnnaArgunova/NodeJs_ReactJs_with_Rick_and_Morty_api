import styled from "styled-components";
import {darkBlue} from "../../styles/color";
import {mobile, tablet} from "../../styles/breackpoints";

export const Wrapper = styled.div``;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  margin-top: 30px;
`;

export const TitleWrapper = styled.div`
  margin-right: 20px;
`;

export const Image = styled.img`
  height: 100%;
  width: 400px;
  object-fit: cover;

  @media all and (max-width: ${mobile}) {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemTitle = styled.p`
  font-weight: bold;
  margin-right: 10px;
  font-size: 20px;
`;

export const ItemText = styled.p`
  font-size: 16px;
`;

export const Episodes = styled.ul`
  padding: 0;
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

export const ItemEpisode = styled.li`
  list-style: none;
  width: 100%;
`;

