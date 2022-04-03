import {render, screen} from "@testing-library/react";
import React from "react";
import EpisodeCard from "./EpisodeCard";

const data = {
    id: 13,
    name: "Mortynight Run",
}

describe('EpisodeCard', () => {
    it('Should rendering name cards', () => {
        render(<EpisodeCard item={data}/>);

        expect(screen.getByText('Mortynight Run')).toBeInTheDocument();
    });
    it('Should rendering link cards', () => {
        render(<EpisodeCard item={data}/>);

        expect(screen.getByRole('link')).toBeInTheDocument();
    });
});