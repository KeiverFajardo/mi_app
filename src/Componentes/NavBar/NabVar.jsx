import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NabVar = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tecnology Shark</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">{props.ciudad[0]}</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">{props.ciudad[1]}</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">{props.ciudad[2]}</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">{props.ciudad[3]}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                    <CartWidget />

            </Navbar>
            
        </>
    )
}

export default NabVar;