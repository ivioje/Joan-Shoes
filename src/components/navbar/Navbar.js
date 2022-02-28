import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import './styles.css'
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavMenu = ({ totalItems }) => {

  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark" className='navbar_main'>
      <Container>
        <Navbar.Brand href="/" title='Home' className='brand'>Joan Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='burger' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/shop" title='shop'>Shop</Nav.Link>
            <Nav.Link href="/about" title='About Joan Shoes'>About Us</Nav.Link>
            <Nav.Link href="/about" title='About Joan Shoes'>Bulk Order</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart" title='Your cart' className='cart'><ShoppingCart /><div>{totalItems}</div></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Facebook />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Twitter />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Instagram />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
