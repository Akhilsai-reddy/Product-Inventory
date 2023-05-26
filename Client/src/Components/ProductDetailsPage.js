import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProductApi from "../Data/ProductApi";
import { productContext } from "./ProductContext";
// import TopviewedProducts from "../Data/TopviewProducts";



const ProductDetailsPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const {deleteProduct}=useContext(productContext)
  

  useEffect(() => {
    ProductApi.getProductById(id,data => setProduct(data))
  }, [id]);

// useEffect(()=>{
//   if(name){
//     const view={product_name:name}
//     TopviewedProducts.addViewProduct(view)
//   }
// },[name])

  const handleDelete = (e) => {
    e.preventDefault()
    if(window.confirm('are you sure you want to delete..?')){
      ProductApi.deleteProductById(id)
      deleteProduct(id)
      props.history.push('/products')
    }
  };
  return (
    <div>
      {product&&
      <Container className="mt-5" >
        {product.map((data,index)=>(
        <Row key={index}>
          <Col/>
          <Col>
            <Row>
            </Row>
            <Card className="text-center" border="info" style={{ width: "30rem",boxShadow:'0px 12px 18px -6px rgba(0,0,0,1)'}}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/seed/${id}/300/90`}
                alt=""
              />
               <Card.Body>
              <Card.Title>
                <b>{data.product_name}</b>
                <hr></hr>
              </Card.Title>
              <Card.Text>
                <b> About The Product:</b>
                <br />
                {data.description}
              </Card.Text>
             
                <Row>
                  <Col>
                    <b>Quantity:</b>
                    <Col>{data.quantity}</Col>
                  </Col>
                  <Col>
                    <b>Price:</b>
                    <Col>RS.{data.price}/-</Col>
                  </Col>
                </Row>
                <hr />
              </Card.Body>
              <Row>
                <Col>
                  <Col>
                    <Link to={'/Products/editProduct/'+id} className="btn btn-warning btn-sm">
                      EDIT THE DETAILS
                    </Link>
                  </Col>
                </Col>
                <Col>
                  <Col>
                    <a href='/Products'
                      className="btn btn-danger btn-sm"
                      onClick={(e) => handleDelete(e)}
                    >
                      DELETE THE PRODUCT
                    </a>
                  </Col>
                </Col>
                <Row>
                  <Col>
                  <Link to='/products'> BACK TO HOME</Link></Col>
                </Row>
              </Row>
            </Card>
          </Col>
          <Col/>
        </Row>
        ))}
      </Container>
}
    </div>
  );
};

export default ProductDetailsPage;
