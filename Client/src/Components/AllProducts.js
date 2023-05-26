import React, { useContext, useState } from "react";
import { Accordion, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import  { productContext } from "./ProductContext";
import ProductsPage from "./ProductsPage";
import ProductApi from "../Data/ProductApi";
import { userContext } from "./USERCONTEXT/UserContext";


const AllProducts = (props) => {
  const { Products,getSearchedData,deleteProducts } = useContext(productContext);
  const {user}=useContext(userContext)
  const [colomns,setColomns]=useState({
    name: true,
    price: true,
    quantity: true,
    view: true,
    checkToSelect: true,
  })
  const [searchItem,setSearchItem]=useState('')
  const [checkedProducts,setCheckedProducts]=useState([])

const searchHandler=(e)=>{
  const quary=e.target.value
   setSearchItem(quary)
    e.preventDefault()
    ProductApi.getSearchedData(quary).then((data)=>getSearchedData(data)
 )

  }

 const handleChecked = (checked,id) => {
     if(checked){
      const data=[...checkedProducts,id]
      setCheckedProducts(data)
     }
     else{
      setCheckedProducts(checkedProducts.filter((e)=>e!==id))
     }
 }
 
  const handleAdd=(e)=>{
    e.preventDefault()
    if(user){
    props.history.push('/products/addproduct')
    }
    else{
      alert('please sign in to Add')
    }
  }

  const handleDelete=(e)=>{
    // e.preventDefault();
    if(checkedProducts.length>0){
    if(user){
    if(window.confirm('are you sure you want to delete..?')){
     ProductApi.deleteProductsByIds(checkedProducts)
     deleteProducts(checkedProducts)
    //  props.history.push('/products')
    }
  }
  else{
  alert('please login to perform this action')
  }
}
else{
  alert('No product is selected...!')
}
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
        <Card border="info" style={{boxShadow:'0px 12px 18px -6px rgba(0,0,0,0.7)'}}>
          <Card.Body>
            <Col>
                   <Form className="text-center">
                      <Row >
                      <Col/>
                      <Col/>
                        <Col>
                    <Form.Control type='text' placeholder='search product here' value={searchItem} onChange={(e)=>searchHandler(e)}></Form.Control> 
                    </Col>
                    <Col/>
                    <Col> 
                  <button className="btn btn-primary btn-md" onClick={(e)=>handleAdd(e)}>Add</button></Col>
                  <Col className="text-right"> 
                  <button className="btn btn-danger btn-md" onClick={(e)=>handleDelete(e)}>Delete</button>
                  </Col>
                  </Row>
                    </Form>
                    <hr/>
                    <Table>
                <thead>
                    <tr>
                      <th/>
                    {colomns.name ? <th>Product Name</th> : null}
                    {colomns.price ? <th>Price</th> : null}
                    {colomns.quantity ? <th>Quantity</th> : null}
                    {colomns.view ? <th>View</th> : null}
                    {colomns.checkToSelect ? <th> Select to Delete</th> : null}
                    </tr>
                </thead>
                  <tbody>
                  {Products.map((item, index) => (
                    <ProductsPage
                      key={index}
                      name={colomns.name}
                      price={colomns.price}
                      quantity={colomns.quantity}
                      view={colomns.view}
                      check={colomns.checkToSelect}
                      Id={item._id}
                      ProductName ={item.product_name}
                      ProductPrice={item.price}
                      ProductQuantity={item.quantity}
                      onCheck={(checked,id)=>handleChecked(checked,id)}
                    />
                  ))}
                  </tbody>
              </Table>
            </Col>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
   <Accordion>
  <Card border="primary" style={{boxShadow:'0px 12px 18px -6px rgba(0,0,0,0.7)'}}>
    <Card.Header>
      Costomise Fields
      </Card.Header>
      <Card.Body>
        Product Name: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
         setColomns({...colomns,name:checked})
          }} />
       
        Price: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            setColomns({...colomns,price:checked})
          }} />
        Quantity: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            setColomns({...colomns,quantity:checked})
          }} />
           View: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            setColomns({...colomns,view:checked})
          }} />
        Check To Select: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            setColomns({...colomns,checkToSelect:checked})
          }} />
      </Card.Body>
  </Card>
  </Accordion>
          </Col>
      </Row>
    </Container>
  );
};

export default AllProducts;
