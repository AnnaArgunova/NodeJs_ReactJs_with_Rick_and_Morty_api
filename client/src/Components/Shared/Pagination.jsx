import {Wrapper, Links, Link, PaginationLink} from "./Pagination.styled";
import { useParams} from "react-router-dom";

export default function Pagination(props) {
    const {page} =  useParams();
    const {pagination} = props;
    const url = page ? +page : 1

    const indexPrev = pagination.pages[1].active - 1;
    const indexNext = pagination.pages[1].active + 1;

    return (
        <Wrapper>
            {indexPrev ? <PaginationLink href={pagination.pages[indexPrev - 1].link}>&#10094;</PaginationLink> : null}
            {
                pagination.pages.map((item, index) => (
                    <Links key={item.page}>
                        <Link href={item.link} active={item.page === url}>{item.page}</Link>
                    </Links>
                ))
            }
            {indexNext < pagination.pages.length+1 ? <PaginationLink href={pagination.pages[indexNext-1].link}>&#10095;</PaginationLink> : null}
        </Wrapper>
    )
}