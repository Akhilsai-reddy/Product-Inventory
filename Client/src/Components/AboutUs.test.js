import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer'
import AboutUs from "./AboutUs";

describe('About',()=>{
    test('rendering header',()=>{
    render(<AboutUs/>);
    const header=screen.getByText('PRODUCT INVENTORY')
    expect(header).toBeInTheDocument();
})
})
describe('renders correctly',()=>{
    test('rendering the About page',()=>{
        const tree= renderer.create(<AboutUs/>);
        expect(tree).toMatchSnapshot()
    })
})

