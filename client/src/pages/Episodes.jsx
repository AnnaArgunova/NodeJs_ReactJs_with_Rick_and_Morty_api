import {useEffect, useState} from "react";
import Pagination from "../Components/Shared/Pagination";
import getEpisodes from "../Fetch/getEpisodes";
import Episodes from "../Components/Episodes";
import { useParams} from "react-router-dom";
import Layout from "../Components/Shared/Layout";

export default function EpisodesPage(){
    const [data, setData] = useState(null);
    const [pagination, setPagination] = useState(null);

    const {page} = useParams();

    useEffect(() => {
        getEpisodes(page ? page : null).then(res=>{
            setData(res.episodes)
            setPagination(res.pagination)
        });
    }, [])

    if(!data || !pagination) return <div>Loading...</div>

    return (
        <Layout>
            <Episodes episodes={data}/>
            {pagination && <Pagination pagination={pagination}/>}
        </Layout>
    )
}