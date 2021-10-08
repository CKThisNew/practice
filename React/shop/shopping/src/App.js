import Reat, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import image from "./shoesNum.js";

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [신발사진, 신발사진변경] = useState(image);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <h2>이거 최고</h2>
        <p>
          이래도 안산다고? 진짜 후회 할텐데? 다시는 안돌아오는 파격세일인데?
        </p>
        <p>
          <button className="background-button">구매</button>
        </p>
      </div>

      <div className="container">
        <div className="row">
          <Product shoes={shoes} 신발사진={신발사진} />
          <Product shoes={shoes} 신발사진={신발사진} />
          <Product shoes={shoes} 신발사진={신발사진} />
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img src={props.신발사진[0]} width="100%" />
      <h4>{props.shoes[0].title}</h4>
      <p>
        {props.shoes[0].content} & {props.shoes[0].price}
      </p>
    </div>
  );
}

export default App;
