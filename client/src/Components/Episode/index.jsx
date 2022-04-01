import {
    CharacterImage,
    CharacterItem,
    Characters, CharactersName, CharactersWrapper,
    CharacterTitle,
    Item,
    ItemText,
    ItemTitle,
    Title,
    Wrapper
} from "./index.styled";

export default function Episode(props) {
    const {episode} = props;
    return (
        <Wrapper>
            <Title>{episode.name}</Title>

            <Item>
                <ItemTitle>Episode</ItemTitle>
                <ItemText>{episode.episode}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Created</ItemTitle>
                <ItemText>{episode.created}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Air date</ItemTitle>
                <ItemText>{episode.air_date}</ItemText>
            </Item>

            <Characters>
                <CharactersName>Characters:</CharactersName>
                <CharactersWrapper>
                    {episode.characters.map(item => (
                        <CharacterItem key={item.id} href={`/character/${item.id}`}>
                            <CharacterTitle>{item.name}</CharacterTitle>
                            <CharacterImage
                                src={item.image}
                                title={item.name}
                                alt={item.name}/>
                        </CharacterItem>
                    ))}
                </CharactersWrapper>
            </Characters>

        </Wrapper>
    )
}