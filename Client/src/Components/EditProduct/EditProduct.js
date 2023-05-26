import React, {useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ProductApi from '../../Data/ProductApi';
import EditForm from './EditForm';

const EditProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    
    // const name = product && product.product_name;
    // const quantity = product && product.quantity;
    // const price = product && product.price;
    // const description = product && product.description;
    useEffect(() => {
      ProductApi.getProductById(id,data=>setProduct(data));
    }, [id]);
  
    const updateData=(updatedData)=>{
    ProductApi.updateDataById(id,updatedData)
    alert('Data has been Updated...')
    window.location.replace(`/products/${id}`)
    }
  return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs={5}>
                <Card className="text-center mt-5" border="success" style={{boxShadow:'0px 12px 18px -6px rgba(0,0,0,0.7)'}}>
                    <Card.Body>
                      <Card.Title><b> Edit the Product</b></Card.Title>
                      <hr/>   
                      {product && product.map((data,index)=><EditForm key={index} id={data._id} name={data.product_name} quantity={data.quantity}
                      price={data.price} description={data.description}
                      onSubmit={(value)=>updateData(value)}/>)}
                      
                    </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
        </Row>
    </Container>
  
  )
}

export default EditProduct