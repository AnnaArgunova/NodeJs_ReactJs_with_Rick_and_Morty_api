import {render, screen} from "@testing-library/react";
import EpisodeBlock from "./EpisodeBlock";

const props = {
    title: 'Title',
    link: '/link',
    data: [
        {
            id: 1,
            name: 'name',
        },
        {
            id: 2,
            name: 'name2',
        },
    ]
}

describe('EpisodeBlock', () => {
    it('Should rendering links', () => {
        render(<EpisodeBlock {...props}/>);

        const links = screen.getAllByRole('link');

        expect(links.length).toBe(3);
    });
});