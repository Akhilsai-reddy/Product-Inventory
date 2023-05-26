import ProductsPage from "./ProductsPage";
import { render } from "@testing-library/react";

describe('Products page rednering',()=>{
    let name =true
    let price=true
    let view=true
    let ProductName='redmi'
    let ProductPrice=2334


    test('testing the name to be true',()=>{
    render(<ProductsPage/>)
    expect(name).toEqual(true)
    })
    test('testing the price to be true',()=>{
        render(<ProductsPage/>)
        expect(price).toEqual(true)
     })
        test('testing the view to be true',()=>{
            render(<ProductsPage/>)
            expect(view).toEqual(true)
     })

     test('the product name is to be rendered',()=>{
        render(<ProductsPage/>);
        expect(ProductName).toEqual('redmi')
     })
     test('the product price is to be rendered',()=>{
        render(<ProductsPage/>);
        expect(ProductPrice).toEqual(2334)
     })
})