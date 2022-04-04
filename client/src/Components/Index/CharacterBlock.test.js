import {render, screen} from "@testing-library/react";
import CharacterBlock from "./CharacterBlock";

const props = {
    title: 'Title',
    link: '/link',
    data: [
        {
            id: 1,
            name: 'name',
            image: 'image',
        },
        {
            id: 2,
            name: 'name2',
            image: 'image2',
        },
    ]
}

describe('CharacterBlock', () => {
    it('Should rendering links', () => {
        render(<CharacterBlock {...props}/>);

        const links = screen.getAllByRole('link');

        expect(links.length).toBe(3);
    });

    it('Should rendering images', () => {
        render(<CharacterBlock {...props}/>);

        const images = screen.getAllByRole('img');
        expect(images.length).toBe(2);
    });
})