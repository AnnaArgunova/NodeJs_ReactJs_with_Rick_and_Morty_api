import {useEffect, useState} from "react";
import getCharacters from "../Fetch/getCharacters";
import {useParams} from "react-router-dom";
import Layout from "../Components/Shared/Layout";
import Characters from "../Components/Characters";

export default function CharactersPage() {
    const [data, setData] = useState(null);
    const [pagination, setPagination] = useState(null);
    const {page} = useParams();

    useEffect(() => {
        getCharacters(page ? page : null).then(res => {
            setData(res.characters)
            setPagination(res.pagination)
        });
    }, [])

    if (!data) return <div>Loading...</div>
    return (
        <Layout>
            <Characters data={data} pagination={pagination}/>
        </Layout>
    );
}
