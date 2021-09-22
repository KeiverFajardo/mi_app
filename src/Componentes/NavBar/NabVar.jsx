import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";



const NabVar = (props) => {
    const {count} = props
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link exact to='/'>
                        <Navbar.Brand href="#home">Tecnology Shark</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link exact to='/categoria/camara'>
                            Camara
                        </Link>
                        <Link exact to='/categoria/laptop'>
                           Laptop
                        </Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                    <Link exact to='/cart'>
                        <CartWidget count={count}/>
                    </Link>
            </Navbar>
            
        </>
    )
}

export default NabVar
