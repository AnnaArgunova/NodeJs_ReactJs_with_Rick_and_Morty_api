import {render, screen} from "@testing-library/react";
import Pagination from "./Pagination";

describe('Pagination', ()=>{
    const pagination ={
        pages:  [
            { page: 1, link: '/link1', active:1},
            { page: 2, link: '/link2', active:1},
            { page: 3, link: '/link3', active:1},
        ]
    }
   it('Should render links', ()=>{
       render(<Pagination pagination={pagination}/>);

       const link = screen.getAllByRole('link');

       expect(link.length).toBe(4);
   })

});