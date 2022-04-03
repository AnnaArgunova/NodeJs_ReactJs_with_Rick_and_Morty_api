import styled from "styled-components";
import {mobile} from "../../styles/breackpoints";

export const Wrapper = styled.div`
  margin: 20px;
  text-align: center`;

export const Image = styled.img`
  width: 150px;
  height: 100%;
  object-fit: contain;

  @media all and (max-width: ${mobile}) {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.a`
  display: block;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: blue;
  cursor: pointer;
`;