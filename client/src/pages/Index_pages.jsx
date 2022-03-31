import {useEffect, useState} from "react";
import Header from "../Components/Shared/Header";
import CharacterItem from "../Components/Characters/CharacterItem";
import {Wrapper, WrapperCharacters} from "./Index.styled";
import Pagination from "../Components/Shared/Pagination";
import {useLocation} from "react-router-dom";
import getCharacters_pages from "../Fetch/getCharacters_pages";

export default function Index_pages() {
    const [data, setData] = useState(null);
    const [pagination, setPagination] = useState(null);
    const {pathname} = useLocation();

    const page = pathname.split('/').reverse()[0];

    useEffect(() => {

        getCharacters_pages(page).then(res=>{
            setData(res.results)
            setPagination(res.info)
        })

    }, [])
    if (!data) return <div>Loading...</div>

    return (
        <Wrapper>
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
