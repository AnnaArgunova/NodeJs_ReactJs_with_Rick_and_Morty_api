import {useEffect, useState} from "react";
import { useLocation} from "react-router-dom";
import Character from "../Components/Character";
import getCharacterId from "../Fetch/getCharacter_id";

export default function CharacterPage() {
    const [character, setCharacter] = useState(null);
    let location = useLocation();
    const url = location.pathname.split('/')
    const id = url.reverse()[0]

    useEffect(() => {
        getCharacterId(id).then(res=>{
            setCharacter(res)
        })
    }, [])

    if (!character) return <div>Loading...</div>
    console.log('character',character)
    return <Character character = {character}/>
}