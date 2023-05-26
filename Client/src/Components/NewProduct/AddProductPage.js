import React, { useContext } from "react";
import ProductForm from "./ProductForm";
import ProductApi from "../../Data/ProductApi";
import { productContext } from "../ProductContext";
import { Card, Col, Container, Row } from "react-bootstrap";
const AddProductPage = (props) => {
  const { addProduct } = useContext(productContext);
  const AddProduct = (product) => {
    ProductApi.addProduct(product).then((newData) => addProduct(newData));
    props.history.push("/products");
    alert("The product has been added");
    window.location.reload()
  };
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={5}>
            <Card className="text-center mt-5" border="info" style={{boxShadow:'0px 12px 18px -6px rgba(0,0,0,0.7)'}}>
              <Card.Body>
                <Card.Title>
                  <b>Add New Product</b>
                </Card.Title>
                <hr />
                <ProductForm onSubmit={(product) => AddProduct(product)} />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProductPage;
