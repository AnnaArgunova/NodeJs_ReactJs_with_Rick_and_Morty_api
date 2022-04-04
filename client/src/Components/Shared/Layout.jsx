import Header from "./Header";
import {ChildrenWrapper, Wrapper} from "./Layout.styled";
import Footer from "./Footer";

export default function Layout(props) {

    const {children} = props
    return (
        <Wrapper>
            <Header/>
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
            <Footer/>
        </Wrapper>
    )
}