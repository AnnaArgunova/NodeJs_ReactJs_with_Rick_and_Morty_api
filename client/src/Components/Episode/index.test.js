import {render, screen} from "@testing-library/react";
import Episode from "./index";

const episode = {
    air_date: "June 20, 2021",
    characters: [
        {
            id: 1,
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Sanchez",
        },
        {
            id: 2,
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Sanchez",
        },
    ],
    created: "2021-10-15T17:00:24.099Z",
    season: "01",
    series: "03",
    name: "Mort Dinner Rick Andre",
}

describe('Episode', () => {
    it('Should render description', () => {
        render(<Episode episode={episode}/>);

        expect(screen.getByText('Mort Dinner Rick Andre')).toBeInTheDocument();
        expect(screen.getByText('June 20, 2021')).toBeInTheDocument();
        expect(screen.getByText('2021-10-15T17:00:24.099Z')).toBeInTheDocument();
        expect(screen.getByText('01')).toBeInTheDocument();
        expect(screen.getByText('03')).toBeInTheDocument();
    });

    it('Should rendering static date', ()=>{
        render(<Episode episode={episode}/>);

        expect(screen.getByText('Season:')).toBeInTheDocument();
        expect(screen.getByText('Series:')).toBeInTheDocument();
        expect(screen.getByText('Created:')).toBeInTheDocument();
        expect(screen.getByText('Air date:')).toBeInTheDocument();
        expect(screen.getByText(/Characters/)).toBeInTheDocument();
    });
});