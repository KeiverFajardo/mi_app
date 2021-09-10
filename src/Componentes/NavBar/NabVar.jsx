import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NabVar = (props) => {
    const {count} = props
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
                        <NavDropdown.Item href="#action/3.1">Uno</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Dos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Tres</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Cuatro</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                    <CartWidget count={count}/>

            </Navbar>
            
        </>
    )
}

export default NabVar
