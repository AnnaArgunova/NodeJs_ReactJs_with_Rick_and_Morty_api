import {render, screen} from "@testing-library/react";
import Characters from "./Characters";

describe('',()=>{
    test('Should render loading', ()=>{

        render(<Characters/>);

        expect(screen.queryByText(/Loading.../)).toBeInTheDocument();
    });
});