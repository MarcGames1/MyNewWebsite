import React, { useState } from "react"
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import SocialMedia from "../Social-Media/SocialMedia"



function MainNav() {

  const [show, setShow] = useState(false);
  const showDropdown = ()=>{
      setShow(!show);
  }
  const hideDropdown = () => {
      setShow(false);
  }


  return(<>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Marcu Alexandru</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/despre">Despre Mine</Nav.Link>
      <NavDropdown
       title="Servicii"
       id="collasible-nav-dropdown"
       show={show}
       onMouseEnter={showDropdown} 
       onMouseLeave={hideDropdown}
       >
        <NavDropdown.Item href="/creare-website">Creare Site De Prezentare</NavDropdown.Item>
        <NavDropdown.Item href="/optimizare-seo">Optimizare Seo</NavDropdown.Item>
        <NavDropdown.Item href="/alte-servicii">Vezi Mai Multe Servicii</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/portofoliu">Portofoliu</Nav.Link>
      <Nav.Link href='/tutoriale'>Tutoriale</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
    </Nav>
      
      
    
    <SocialMedia col_md={3} />
    
  </Navbar.Collapse>
  </Container>
</Navbar>

  </>)
}


export default MainNav