import {render, screen} from "@testing-library/react";
import CharacterCard from "./CharacterCard";

const item = {
    id: 1,
    name: 'Name',
    image: 'Image',
}

describe('CharacterCard', () => {
    it('Should rendering link', () => {
        render(<CharacterCard item={item}/>);

        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('Should rendering image', ()=>{
        render(<CharacterCard item={item}/>);

        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Should rendering title', ()=>{
        render(<CharacterCard item={item}/>);

        expect(screen.getByText('Name')).toBeInTheDocument();
    })
})