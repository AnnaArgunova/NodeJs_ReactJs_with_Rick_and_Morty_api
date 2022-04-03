import {Image, Name, Wrapper} from "./CharacterItem.styled";

export default function CharacterItem(props) {
    const {character} = props;
    if (!character) return <div>Loading...</div>;
    return (
        <Wrapper>
           <Name href={`/character/${character.id}`}>{character.name}</Name>
            <Image
                src={character.image}
                alt={character.name}
                title={character.name}
            />
        </Wrapper>
    )
}