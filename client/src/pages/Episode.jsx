import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import Layout from "../Components/Shared/Layout";

export default function Episode(){

    const [episode, setEpisode] = useState(null);
    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/episode/${id}`)
            .then(res => res.json())
            .then((response) => {
                    setEpisode(response.character)
                },
                (err) => setEpisode(err));

    }, [])

    if (!episode) return <div>Loading...</div>

    const date = new Date(episode.created)

    const month = date.getMonth()+1 >= 10 ? date.getMonth()+1 : `0${date.getMonth()+1}`
    const created = `${date.getDate()}.${month}.${date.getFullYear()}`

    return <Layout>

        <h1>{episode.name}</h1>
        <p>Episode: {episode.episode}</p>
        <p>Created: {created}</p>
        <p>Air date: {episode.air_date}</p>
    </Layout>
}