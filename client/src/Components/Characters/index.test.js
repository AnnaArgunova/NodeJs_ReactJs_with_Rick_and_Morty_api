import {render, screen} from "@testing-library/react";
import Characters from "./index";

const data = [
    {
        id: 1,
        image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        name: "Aqua Morty",
    },
    {
        id: 2,
        image: "https://rickandmortyapi.com/api/character/avatar/name.jpeg",
        name: "Name",
    }];

const pagination = {
    pages: [
        {
            active: 2,
            link: "/characters",
            page: 1
        },
        {
            active: 2,
            link: "/characters/2",
            page: 2
        },]
};

describe('Characters', () => {
    it('Should rendering title', () => {
        render(<Characters data={data} pagination={pagination}/>);

        expect(screen.getByText('Rick and Morty')).toBeInTheDocument();
    });

    it('Should rendering image', () => {
        render(<Characters data={data} pagination={pagination}/>);
        const images = screen.getAllByRole('img');

        expect(images.length).toBe(2);
    });

    it('Should rendering links data and pagination', () => {
        render(<Characters data={data} pagination={pagination}/>);
        const images = screen.getAllByRole('link');

        expect(images.length).toBe(5);
    });

    it('Should rendering Loading', ()=>{
        render(<Characters/>);

        expect(screen.getByText('Loading')).toBeInTheDocument();
    })
});