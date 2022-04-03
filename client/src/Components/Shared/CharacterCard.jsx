import {CharacterImage, CharacterItem, CharacterTitle} from "./CharacterCard.styled";

export default function CharacterCard(props) {
    const {item} = props;

    return (
        <CharacterItem href={`/character/${item.id}`}>
            <CharacterTitle>{item.name}</CharacterTitle>
            <CharacterImage
                src={item.image}
                title={item.name}
                alt={item.name}/>
        </CharacterItem>
    )
}