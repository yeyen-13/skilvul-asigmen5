import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Produck from "./Component/Produck";
import Profile from "./Component/Profile";
import Register from "./Component/Register";
import { Navbar, Nav, Row, Col ,Button} from "react-bootstrap";
import { Container } from "react-bootstrap";
import Bloct from "./Component/Bloct";
import Catlist from "./Component/Catlist/Catlist";
// import { useEffect, useState } from "react";
import {useHistory}from "react-router-dom"
function App() {
  let dataLogin = localStorage.getItem("isLogin");
  let history = useHistory();
  
  function logeout() {
    localStorage.clear("islogin"&& "user")
    history.push("/register")
  }

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">YEYEN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Row md={6}>
                <Col>
                  <Link to="/">Home</Link>
                </Col>
                <Col>
                  <Link to="/profile">Profile</Link>
                </Col>
                <Col>
                  <Link to="/produck">Product</Link>
                </Col>
                <Col>
                  <Link to="/catlist">Cats List</Link>
                </Col>
                <Col>{dataLogin ? <Button
                onClick={logeout}>logout</Button> : <Link to="/login">login</Link>}</Col>
                <Col>
                  {dataLogin ? <></> : <Link to="/register">Register</Link>}
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
       <Login />
          
        </Route>
        <Route path="/register">
        
          <Register />
        </Route>
        <Route path="/profile">
          {dataLogin ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route path="/produck">
          <Produck />
        </Route>
        <Route path="/catlist">
          <Catlist />
        </Route>
        <Route path="/:NotFound404">
          <Bloct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
