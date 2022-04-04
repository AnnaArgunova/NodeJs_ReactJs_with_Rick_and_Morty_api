import {render, screen} from "@testing-library/react";
import TitlePage from "./TitlePage";

describe('TitlePage', ()=>{
    it('Should rendering title', ()=>{
        render(<TitlePage title={'Title'}/>);

        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('Should not rendering without data', ()=>{
        render(<TitlePage/>);

        expect(screen.queryByText('Title')).toBeNull();
    });
});