import AllProducts from "./AllProducts";
import renderer from 'react-test-renderer'
describe('Allproducts',()=>{
    test('testing the headings',()=>{
        const tree=renderer.create(<AllProducts/>).toJSON()
        let th=tree.find('th')
        expect(th.length).toEqual(4);
    })
})