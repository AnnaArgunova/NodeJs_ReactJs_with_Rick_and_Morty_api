import {Item, ItemWithMargin, Nav, Wrapper} from "./Footer.styled";

export default function Footer(){
    return (
        <Wrapper>
            <Nav>
                <Item>
                    <a href={'/'}>Rick and Morty</a>
                </Item>
                <ItemWithMargin>
                    <a href={'/characters'}>Characters</a>
                </ItemWithMargin>
                <Item>
                    <a href={'/episodes'}>Episodes</a>
                </Item>
            </Nav>
        </Wrapper>
    )
}