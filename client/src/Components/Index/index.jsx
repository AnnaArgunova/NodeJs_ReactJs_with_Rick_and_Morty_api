import Layout from "../Shared/Layout";
import Block from "./CharacterBlock";
import CharacterBlock from "./CharacterBlock";
import EpisodeBlock from "./EpisodeBlock";

export default function Index(props) {

    const {characters, episodes} = props;

    if(!characters || !episodes) return <div>Loading...</div>

    return (
        <Layout>
            {characters ? (
                <CharacterBlock title={'Characters'} data={characters} link={'/characters'}/>
            ) : null}
            {episodes ? (
                <EpisodeBlock title={'Episodes'} data={episodes} link={'/episodes'}/>
            ) : null}
        </Layout>
    )
}