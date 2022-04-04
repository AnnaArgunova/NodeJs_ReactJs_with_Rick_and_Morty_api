import {
    Episodes, Flex,
    Image,
    Item,
    ItemEpisode,
    ItemText,
    ItemTitle,
    TitleWrapper,
    Wrapper
} from "./index.styled";
import EpisodeCard from "../Shared/EpisodeCard";
import TitlePage from "../Shared/TitlePage";

export default function Character(props) {
    const {character} = props;
    return (
        <Wrapper>
            <TitlePage title={character.name}/>
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

            <TitlePage title = {`${character.episode.length > 1 ? 'Episodes' : 'Episode'}:`}/>
            <Episodes>
                {character.episode.map((item, index) => (
                    <ItemEpisode key={index}>
                        <EpisodeCard item={item}/>
                    </ItemEpisode>
                ))}
            </Episodes>
        </Wrapper>
    )
}