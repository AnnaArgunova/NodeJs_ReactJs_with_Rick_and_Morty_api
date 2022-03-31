import {Item, Wrapper, Nav} from './Header.styled'

export default function Header() {
    return (
        <Wrapper>
            <Nav>
                <Item>
                    <a href={'/'}>Home</a>
                </Item>
                <Item>
                    <a href={'/episodes'}>Episode</a>
                </Item>
            </Nav>
        </Wrapper>
    )
}