import {Item, Title} from "./EpisodeCard.styled";

export default function EpisodeCard(props){
    const {item} = props;

    return (
        <Item href={`/episode/${item.id}`}>
            <Title>{item.name}</Title>
        </Item>
    )
}