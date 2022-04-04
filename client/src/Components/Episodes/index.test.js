import {render, screen} from "@testing-library/react";
import Episodes from "./index";

const episodes = [
    {
        id: 13,
        name: "Mortynight Run",
    },
    {
        id: 1,
        name: "Mortynight Run",
    },
    {
        id: 133,
        name: "Mortynight Run",
    },
]

describe('Episodes', ()=>{
    it('Should rendering title', ()=>{
        render(<Episodes episodes={episodes}/>);

        expect(screen.getByText('Rick and Morty episodes')).toBeInTheDocument();
    })
})