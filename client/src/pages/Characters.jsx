import {useEffect, useState} from "react";
import CharacterItem from "../Components/Characters/CharacterItem";
import {Title, Wrapper, WrapperCharacters} from "./Characters.styled";
import Pagination from "../Components/Shared/Pagination";
import getCharacters from "../Fetch/getCharacters";
import { useParams} from "react-router-dom";
import Layout from "../Components/Shared/Layout";

export default function Characters() {
    const [data, setData] = useState(null);
    const [pagination, setPagination] = useState(null);
    const {page} = useParams();

    useEffect(() => {
        getCharacters(page ? page : null).then(res=>{
            setData(res.characters)
            setPagination(res.pagination)
        });
    }, [])

    if (!data) return <div>Loading...</div>
    return (
        <Layout>
            <Title>Rick and Morty</Title>
            <WrapperCharacters>
                {data.map(item => {
                        return <CharacterItem key={item.id} character={item}/>
                    }
                )}
            </WrapperCharacters>
            {pagination && <Pagination pagination={pagination}/>}
        </Layout>
    );
}
