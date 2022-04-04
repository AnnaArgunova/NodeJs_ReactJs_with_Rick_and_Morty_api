import {Flex} from "../Character/index.styled";
import { Link, Scroll, ScrollWrapper, Title} from "./CharacterBlock.styled";
import CharacterCard from "../Shared/CharacterCard";

export default function CharacterBlock(props) {
    const {title, link, data} = props;

    return (
        <>
            <Flex>
                <Title>{title}</Title>
                <Link href={link}>view all &#8594;</Link>
            </Flex>
            <ScrollWrapper>
               <Scroll>
                    {data.map(item => (
                        <CharacterCard key={item.id} item={item}/>
                    ))}
                </Scroll>
            </ScrollWrapper>
        </>
    )
}