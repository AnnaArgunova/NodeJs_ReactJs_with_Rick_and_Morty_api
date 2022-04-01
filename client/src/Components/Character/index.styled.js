import styled from "styled-components";
import {darkBlue} from "../../styles/color";

export const Wrapper = styled.div``;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleWrapper = styled.div`
  margin-right: 20px;
`;

export const Image = styled.img`
  height: auto;
  width: 400px;
  object-fit: cover;
`;

export const Title = styled.p`
  color: ${darkBlue};
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemTitle = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;

export const ItemText = styled.p`
  font-size: 14px;
`;

export const Episodes = styled.ul``;

export const ItemEpisode = styled.li`
  list-style: none;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 10px 0;
`;

