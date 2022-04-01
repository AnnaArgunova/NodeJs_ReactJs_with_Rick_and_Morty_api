import {
    Episodes, Flex,
    Image,
    Item,
    ItemEpisode, ItemLink,
    ItemText,
    ItemTitle,
    Title, TitleWrapper,
    Wrapper
} from "./index.styled";

export default function Character(props) {
    const {character} = props;
    return (
        <Wrapper>
            <Title>{character.name}</Title>

            <Flex>
                <TitleWrapper>
                    <Image src={character.image}
                           alt={character.name}
                           title={character.name}/>
                </TitleWrapper>
                <div>
                    <Item>
                        <ItemTitle>Gender: </ItemTitle>
                        <ItemText>{character.gender}</ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>Species: </ItemTitle>
                        <ItemText>{character.species}</ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>Status: </ItemTitle>
                        <ItemText>{character.status}</ItemText>
                    </Item>

                </div>
            </Flex>

            <Episodes>{character.episode.length > 1 ? 'Episodes' : 'Episode'}:
                {character.episode.map(item => (
                <ItemEpisode key={item.id}>
                    <ItemLink href={`/episode/${item.id}`}>
                        {item.name}
                    </ItemLink>
                </ItemEpisode>
            ))}
            </Episodes>
        </Wrapper>
    )
}