import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

test('username input should be rendered',()=>{
    render(<LoginForm/>);
    const userInputEle=screen.getByPlaceholderText('Enter email')
    expect(userInputEle).toBeInTheDocument()
})
test('password input should be rendered',()=>{
    render(<LoginForm/>);
    const passInputEle=screen.getByPlaceholderText('Enter Password')
    expect(passInputEle).toBeInTheDocument()
})
test('button input should be rendered',()=>{
    render(<LoginForm/>);
    const buttonInputEle=screen.getByRole('button')
    expect(buttonInputEle).toBeInTheDocument()
})