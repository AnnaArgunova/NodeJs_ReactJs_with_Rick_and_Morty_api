import {useEffect, useState} from "react";
import CharacterItem from "../Components/Characters/CharacterItem";
import {Title, Wrapper, WrapperCharacters} from "./Index.styled";
import Pagination from "../Components/Shared/Pagination";
import getCharacters from "../Fetch/getCharacters";

export default function Index() {
    const [data, setData] = useState(null);
    const [pagination, setPagination] = useState(null);

    useEffect(() => {
        getCharacters().then(res=>{
            setData(res.results)
            setPagination(res.info)
        });
    }, [])

    if (!data) return <div>Loading...</div>

    return (
        <Wrapper>
            <Title>Rick and Morty</Title>
            <WrapperCharacters>
                {data.map(item => {
                        return <CharacterItem key={item.id} character={item}/>
                    }
                )}
            </WrapperCharacters>
            {pagination && <Pagination pages={pagination.pages} link={'/characters'}/>}
        </Wrapper>
    );
}
