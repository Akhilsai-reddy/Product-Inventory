import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const LoginForm = React.lazy(() => import("./USERS/LoginForm"));
const RegistrationForm = React.lazy(() => import("./USERS/RegistrationForm"));
const UserDetails = React.lazy(() => import("./USERS/UserDetails"));
const EditProduct = React.lazy(() =>import("./Components/EditProduct/EditProduct"));
const AllProducts = React.lazy(() => import("./Components/AllProducts"));
const ProductDetailsPage = React.lazy(() =>import("./Components/ProductDetailsPage"));
const AboutUs = React.lazy(() => import("./Components/AboutUs"));
const AddProductPage = React.lazy(() =>import("./Components/NewProduct/AddProductPage"));
const Chart =React.lazy(()=>import("./CHART/Chart"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <h1 style={{ marginLeft: "30%", marginTop: "10%",color:'white'}}>
              Getting things ready Please wait...
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            </h1>
          }
        >
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route exact path="/Products" component={AllProducts} />
            <Route exact path="/Products/AddProduct" component={AddProductPage} />
            <Route exact path="/Products/editProduct/:id" component={EditProduct} />
            <Route exact path="/Products/:id" component={ProductDetailsPage} />
            <Route  path="/TopViewed" component={Chart}/>
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/signIn" component={LoginForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/:name" component={UserDetails} />
           
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
