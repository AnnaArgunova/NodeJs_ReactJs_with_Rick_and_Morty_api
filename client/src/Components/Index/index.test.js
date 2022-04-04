import {render, screen} from "@testing-library/react";
import Index from "./index";

const character = [
    {
        id: 55,
        name: "Name",
        image: "image",
    },
    {
        id: 4,
        name: "Name1",
        image: "image",
    },
]

const episodes= [
    {
        id: 1,
        name: 'name',
    },
    {
        id: 2,
        name: 'name2',
    },
]

describe('Index', () => {
    it('Should rendering Loading without episodes data', () => {
        render(<Index character={character}/>);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('Should rendering Loading without characters data', () => {
        render(<Index episodes={episodes}/>);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('Should rendering Loading without data', () => {
        render(<Index/>);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('Should rendering components', () => {
        render(<Index characters = {character} episodes={episodes}/>);

        expect(screen.queryByText('Loading...')).toBeNull();
    });
});