import {Title, Wrapper} from "./index.styled";
import EpisodeCard from "../Shared/EpisodeCard";
import TitlePage from "../Shared/TitlePage";

export default function Episodes(props) {
    const {episodes} = props;
    return (
        <>
            <TitlePage title={'Rick and Morty episodes'}/>

            <Wrapper>
                {episodes.map(item => (
                    <EpisodeCard key={item.id} item={item}/>
                ))}
            </Wrapper>
        </>

    )
}