import Pagination from "../Shared/Pagination";
import {WrapperCharacters} from "./index.styled";
import TitlePage from "../Shared/TitlePage";
import CharacterCard from "../Shared/CharacterCard";

export default function Characters(props) {
    const {data, pagination} = props;

    if (!data || !pagination) return <div>Loading</div>

    return (
        <>
            <TitlePage title={'Rick and Morty characters'}/>
            <WrapperCharacters>
                {data.map(item => {
                        return <CharacterCard key={item.id} item={item}/>
                    }
                )}
            </WrapperCharacters>
            {pagination && <Pagination pagination={pagination}/>}
        </>
    )
}