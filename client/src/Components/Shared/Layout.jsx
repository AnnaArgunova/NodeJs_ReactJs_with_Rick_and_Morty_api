import Header from "./Header";
import {ChildrenWrapper, Wrapper} from "./Layout.styled";

export default function Layout(props) {

    const {children} = props
    return (
        <Wrapper>
            <Header/>
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </Wrapper>
    )
}