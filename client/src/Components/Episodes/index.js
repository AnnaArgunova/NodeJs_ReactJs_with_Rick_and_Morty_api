import {Item, Title, Wrapper} from "./index.styled";

export default function Episodes(props){
    const {episodes} = props;
    return (
        <Wrapper>
        {episodes.map(item=>(
            <Item key={item.id} href={`/episodes/${item.id}`}>
                <Title>{item.name}</Title>
            </Item>
        ))}
    </Wrapper>
    )
}