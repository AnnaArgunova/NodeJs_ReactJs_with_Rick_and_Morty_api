import {render, screen} from '@testing-library/react';
import CharacterItem from "./CharacterItem";

const character = {
    image: 'image',
    name: 'Character',
    id: 3,
}

describe('CharacterItem', ()=>{
    it('CharacterItem rendering', ()=>{
        render(<CharacterItem character = {character}/>);

        expect(screen.getByText('Character')).toBeInTheDocument();
    });

    it('CharacterItem without character', ()=>{
        render(<CharacterItem/>);

        expect(screen.queryByText('Character')).toBeNull();
    });

    it('Character image render', ()=>{
        render(<CharacterItem character = {character}/>);

        expect(screen.getByRole('img')).toBeInTheDocument();
    })
})