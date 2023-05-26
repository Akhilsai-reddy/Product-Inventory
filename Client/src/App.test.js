import { render, screen } from "@testing-library/react";
import App from "./App";

test('content rendering',()=>{
    render(<App/>)
    const element=screen.getByText('ABOUT')
    expect(element).toBeInTheDocument();
})
test('testing the list items',()=>{
    render(<App/>)
    const listItem=screen.getAllByRole('listitem');
    expect(listItem).toHaveLength(3);
})
