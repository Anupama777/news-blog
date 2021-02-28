import React from 'react';
//import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Header = () =>(

   <div> <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">NewsTime</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#trending">Trending</Nav.Link>
      <Nav.Link href="#archive">Archive</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Navbar></div>
)

export default Header;
