import { render } from "@testing-library/react";
import renderer from 'react-test-renderer'
import ProductDetailsPage from "./ProductDetailsPage";

describe('ProductDetailsPage render',()=>{
    let name
    let quantity
    let price
    let description

    beforeEach(()=>{
   name ='redmi';
     quantity = 3
     price =12345
     description = 'redmi note 7 pro'
    })
  

    test('Product name page rendering',()=>{
        render(<ProductDetailsPage/>);
        expect(name).toEqual('redmi')
    })
    test('Product description page rendering',()=>{
        render(<ProductDetailsPage/>);
        expect(description).toEqual('redmi note 7 pro')
    })
    test('Product quantity page rendering',()=>{
        render(<ProductDetailsPage/>);
        expect(quantity).toEqual(3)
    })
    test('Product price page rendering',()=>{
        render(<ProductDetailsPage/>);
        expect(price).toEqual(12345)
    })

    test('snapshot of details page',()=>{
        const tree= renderer.create(<ProductDetailsPage/>);
        expect(tree).toMatchSnapshot()
    })

})