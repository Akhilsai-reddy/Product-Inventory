import Navbar from "./Navbar";
import renderer from 'react-test-renderer'
import { render, screen } from "@testing-library/react";

describe('rendering the nav bar',()=>{
     
    test('rendering PRODUCTS Links',()=>{
        render(<Navbar/>);
        const header=screen.getByText('PRODUCTS')
        expect(header).toBeInTheDocument();
    })
    test('rendering ABOUT Links',()=>{
        render(<Navbar/>);
        const header=screen.getByText('ABOUT')
        expect(header).toBeInTheDocument();
    }) 
    test('rendering navabar',()=>{
        const tree=renderer.create(<Navbar/>)
        expect(tree).toMatchSnapshot()
    })


}
)