import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import Character from "../Components/Character";
import getCharacterId from "../Fetch/getCharacter_id";
import Layout from "../Components/Shared/Layout";

export default function CharacterPage() {
    const [character, setCharacter] = useState(null);
    let {id} = useParams();

    useEffect(() => {
        getCharacterId(id).then(res=>{
            setCharacter(res)
        })
    }, [])

    if (!character) return <div>Loading...</div>
    return (
        <Layout>
            <Character character = {character}/>
        </Layout>
    )
}