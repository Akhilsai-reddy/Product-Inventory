import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Chart from "../CHART/Chart";

const AboutUs = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <header>
                  <aside style={{ float: "left" }}>
                    <img src="logo11.jpg" alt="Product inventory" />
                  </aside>
                  <h1>PRODUCT INVENTORY</h1>
                </header>
                <hr />
                <p>
                  Products Inventory is an application made using React JS.
                  <br />
                  It uses Bootstrap for a responsive User Interface. You can
                  start off by viewing our products in our inventory, search
                  there to find the product you're looking for. There's a bar
                  chart which shows our top viewed products for a better User
                  Experience. There's also an option to customize the fields you
                  wish to see in the products list page. This app will open up
                  more features for you, once you signin into our app. For that
                  you'll need to register into our app first, by providing a few
                  basic details. Once successfully registered, you can sign in
                  when you're authenticated. When you become an authenticated
                  user, you can do a lot of things, like, viewing product
                  details, adding products, deleting or modifying them. You also
                  have the option of deleting multiple products in one go. You
                  can also view about yourself by clicking on your name, on the
                  navigation bar.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" className="text-center">
            <Card style={{ width: "18rem" }} border="info">
              <Card.Body>
                <Card.Title>Welcome!</Card.Title>
                <Card.Text>Already a User?</Card.Text>
                <Button variant="primary" href="/signIn">
                  Sign in
                </Button>
                <br />
                <br />
                <Card.Text>New User?</Card.Text>
                <Button variant="primary" href="/register">
                  Register
                </Button>
              </Card.Body>
            </Card>
            <Chart />
          </Col>
        </Row>
      </Container>
      <footer
        className="text-center "
        style={{ backgroundColor: "lightblue", marginTop: "7px" }}
      >
        <h5>A Project made using React JS by ~ AKHILSAI REDDY ~ </h5>
      </footer>
    </div>
  );
};

export default AboutUs;
