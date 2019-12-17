import React, {useState, useEffect} from 'react';
import '../App.css';
import {Navbar, Form, NavDropdown, Nav, FormControl, Button} from 'react-bootstrap';
const MyNavBar = ({links, old, setOld}) =>{
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onSelect={e => setOld (true) } href="/old">Menneet keikat</Nav.Link>
            <Nav.Link onSelect={e => setOld (false) } href="/new">Tulevat keikat</Nav.Link>
            <Nav.Link onSelect={e => setOld (false) } href="/lisaakeikka">Lisää keikka</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {links.map(link => <NavDropdown.Item href={link}>{link}</NavDropdown.Item>)}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}
export default MyNavBar;