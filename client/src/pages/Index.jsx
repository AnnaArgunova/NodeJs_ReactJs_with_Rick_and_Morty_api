import Index from "../Components/Index";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getEpisodes from "../Fetch/getEpisodes";
import getInfoForIndex from "../Fetch/getInfoforIndex";

export default function IndexPage(){

    const [characters, setCharacters] = useState(null);
    const [episodes, setEpisodes] = useState(null);

    useEffect(() => {
        getInfoForIndex().then(res=>{
            setCharacters(res.express.characters)
            setEpisodes(res.express.episodes)
        });
    }, []);

    return  <Index characters={characters} episodes={episodes}/>
}