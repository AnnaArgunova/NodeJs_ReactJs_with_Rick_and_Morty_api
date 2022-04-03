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
import TitlePage from "../Shared/TitlePage";
import CharacterCard from "../Shared/CharacterCard";

export default function Episode(props) {
    const {episode} = props;
    return (
        <Wrapper>
            <TitlePage title={episode.name}/>

            <Item>
                <ItemTitle>Season:</ItemTitle>
                <ItemText>{episode.season}</ItemText>
            </Item>
            <Item>
                <ItemTitle>Series:</ItemTitle>
                <ItemText>{episode.series}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Created:</ItemTitle>
                <ItemText>{episode.created}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Air date:</ItemTitle>
                <ItemText>{episode.air_date}</ItemText>
            </Item>

            <Characters>
                <CharactersName>Characters:</CharactersName>
                <CharactersWrapper>
                    {episode.characters.map(item => (
                        <CharacterCard  key={item.id} item={item}/>
                    ))}
                </CharactersWrapper>
            </Characters>

        </Wrapper>
    )
}