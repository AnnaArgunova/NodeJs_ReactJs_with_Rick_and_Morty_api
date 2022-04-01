import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Layout from "../Components/Shared/Layout";
import Episode from "../Components/Episode";
import getEpisodeId from "../Fetch/getEpisode_id";

export default function EpisodePage() {
    const [episode, setEpisode] = useState(null);
    let {id} = useParams();

    useEffect(() => {
        getEpisodeId(id).then(res => {
            setEpisode(res)
        })
    }, [])

    if (!episode) return <div>Loading...</div>

    return (
        <Layout>
            <Episode episode={episode}/>
        </Layout>
    )
}