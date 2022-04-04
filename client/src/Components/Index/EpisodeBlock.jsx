import {Flex} from "../Character/index.styled";
import { Link, Scroll, ScrollWrapper, Title} from "./EpisodeBlock.styled";
import EpisodeCard from "../Shared/EpisodeCard";

export default function EpisodeBlock(props) {
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
                        <EpisodeCard key={item.id} item={item}/>
                    ))}
                </Scroll>
            </ScrollWrapper>
        </>
    )
}