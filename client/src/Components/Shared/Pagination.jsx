import {Wrapper, Links} from "./Pagination.styled";
import {Link, useLocation} from "react-router-dom";

export default function Pagination(props) {
    const {pathname} = useLocation();

    const {pages, link} = props;
    const pagesUrl = [];

    for (let i = 1; i <= pages; i++) {

        const active = +pathname.split('/').reverse()[0] === i;

        if (i === 1) {
            pagesUrl.push({page: i, link: link, active: pathname === '/'});
        } else {
            pagesUrl.push({page: i, link: `${link}/${i}`, active});
        }
    }

    return (
        <Wrapper>
            {
                pagesUrl.map(item => (
                    <Links key={item.page} active={item.active}>
                        <a href={item.link} >{item.page}</a>
                    </Links>
                ))
            }
        </Wrapper>
    )
}