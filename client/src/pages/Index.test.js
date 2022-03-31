import {render, screen} from "@testing-library/react";
import Index from "./Index";

describe('',()=>{
    test('Should render loading', async ()=>{

        render(<Index/>);

        expect(screen.queryByText(/Loading.../)).toBeInTheDocument();
    });
});