import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {BrowserRouter as Router,  Route, Routes } from "react-router-dom"; 

 import Home from "../Pages/Home"
 import Stories from "../Pages/Stories";
 import Reportage from "../Pages/Reportage";
 import Comments from "../Pages/Comments"
import Price from "../Pages/Price"
import Clients from "../Pages/Clients"
import Contacts from "../Pages/Contacts"  

import Di from "../Couple/Di";
import Ru from "../Couple/Ru";
import Ok from "../Couple/Ok";
import Ta from "../Couple/Ta";
import Zhi from "../Couple/Zhi";
import Ss from "../Couple/Ss";

import House from "../Stories/House";
import Newyear from "../Stories/Newyear";
import Present from "../Stories/Present";
import Soul from "../Stories/Soul";
import Carpathians from "../Stories/Carpathians";
import Carpathian from "../Stories/Carpathian";

import Di1 from "../Clients/Di1";
import Krm from "../Clients/Krm";
import Uvd from "../Clients/Uvd";
import Ri from "../Clients/Ri";
import Top from "../Clients/Top";
import Pregnancy from "../Clients/Pregnancy";
import Fl from "../Clients/Fl";
import Party2 from "../Clients/Party2";
import F from "../Clients/F";
import Party2vv from "../Reportage/Party2vv";
import Bparty from "../Reportage/Bparty";
import Code from "../Reportage/Code";
import Girl from "../Reportage/Girl";



const Header = () => {
  return (
      <>
    <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variant ="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="img/logo.jpg"
            height="75"
            width="250"
            className=" d-inline-block atign-top noCopy"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="h5">Главная</Nav.Link>
            <NavDropdown title="Портфолио" id="collasible-nav-dropdown" className="h5">
        <NavDropdown.Item href="/action1">Свадьбы</NavDropdown.Item>
        <NavDropdown.Item href="/action2">Семейные и лав стори</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/action3">Репортаж</NavDropdown.Item>
      </NavDropdown>
            <Nav.Link href="/comments" className="h5">Отзывы</Nav.Link>
            <Nav.Link href="/price" className="h5">Прайс</Nav.Link>
            <Nav.Link href="/clients" className="h5">Для клиентов</Nav.Link>
      <Nav.Link  href="/contacts" className="h5">О нас</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
             <Route exact path="/comments" element={<Comments/>}/>
            <Route exact path="/price" element={<Price/>}/>
            <Route exact path="/clients" element={<Clients/>}/>
            <Route exact path="/contacts" element={<Contacts/>}/>
            <Route exact path="/action1" element={<Home/>}/> 
            <Route exact path="/action2" element={<Stories/>}/> 
            <Route exact path="/action3" element={<Reportage/>}/>

            <Route exact path="/di" element={<Di/>}/>
            <Route exact path="/ru" element={<Ru/>}/>
            <Route exact path="/ok" element={<Ok/>}/>
            <Route exact path="/ta" element={<Ta/>}/>
            <Route exact path="/zhi" element={<Zhi/>}/>
            <Route exact path="/ss" element={<Ss/>}/>

            <Route exact path="/house" element={<House/>}/>
            <Route exact path="/newyear" element={<Newyear/>}/>
            <Route exact path="/present" element={<Present/>}/>
            <Route exact path="/soul" element={<Soul/>}/>
            <Route exact path="/carpathians" element={<Carpathians/>}/>
            <Route exact path="/carpathian" element={<Carpathian/>}/>

            <Route exact path="/di1" element={<Di1/>}/>
            <Route exact path="/krm" element={<Krm/>}/>
            <Route exact path="/uvd" element={<Uvd/>}/>
            <Route exact path="/ri" element={<Ri/>}/>
            <Route exact path="/top" element={<Top/>}/>
            <Route exact path="/pregnancy" element={<Pregnancy/>}/>
            <Route exact path="/fl" element={<Fl/>}/>
            <Route exact path="/party2" element={<Party2/>}/>
            <Route exact path="/f" element={<F/>}/>

            <Route exact path="/party2vv" element={<Party2vv/>}/>
            <Route exact path="/bparty" element={<Bparty/>}/>
            <Route exact path="/code" element={<Code/>}/>
            <Route exact path="/girl" element={<Girl/>}/>
        </Routes>
    </Router>
      
      
    </>
    
  );
};
export default Header;
