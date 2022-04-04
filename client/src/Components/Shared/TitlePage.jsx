import {Title} from "./TitlePage.styled";

export default function TitlePage(props) {
    const {title} = props;

    return (<>{title ? <Title>{title}</Title> : null}</>)
}