import {Item, Wrapper, Nav} from './Header.styled'

export default function Header() {
    return (
        <Wrapper>
            <Nav>
                <Item>
                    <a href={'/'}>Rick and Morty</a>
                </Item>
                <Item>
                    <a href={'/characters'}>Characters</a>
                </Item>
                <Item>
                    <a href={'/episodes'}>Episodes</a>
                </Item>
            </Nav>
        </Wrapper>
    )
}