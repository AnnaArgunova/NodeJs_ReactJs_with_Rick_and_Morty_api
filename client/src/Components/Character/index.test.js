import {render, screen} from '@testing-library/react';
import Character from "./index";

const character = {
    name: 'name',
    image: 'image.jpg',
    gender: 'gender',
    species: 'species',
    status: 'status',
    episode: ['episode1', 'episode2']
}

describe('Character', () => {


    it('Should rendering props', () => {
        render(<Character character={character}/>);

        expect(screen.getByText('name')).toBeInTheDocument();
        expect(screen.getByText('gender')).toBeInTheDocument();
        expect(screen.getByText('species')).toBeInTheDocument();
        expect(screen.getByText('status')).toBeInTheDocument();
    });

    it('Should rendering static', () => {
        render(<Character character={character}/>);

        expect(screen.getByText(/Gender/)).toBeInTheDocument();
        expect(screen.getByText(/Species/)).toBeInTheDocument();
        expect(screen.getByText(/Status/)).toBeInTheDocument();

    });

    it('Should rendering image',()=>{
        render(<Character character={character}/>);

       expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Should rendering list',()=>{
        render(<Character character={character}/>);

       expect(screen.getByRole('list')).toBeInTheDocument();
    });
})