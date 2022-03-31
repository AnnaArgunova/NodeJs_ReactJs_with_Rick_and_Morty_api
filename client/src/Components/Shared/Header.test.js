import {render, screen} from '@testing-library/react';
import Header from "./Header";

describe('Header', () => {
    test('Should rendering static', () => {
        render(<Header/>);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Episode')).toBeInTheDocument();
    });

    test('Should rendering list', () => {
        render(<Header/>);

        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    test('Should rendering link', () => {
        render(<Header/>);

        const links = screen.getAllByRole('link');

        expect(links.length).toBe(2);
    });
});