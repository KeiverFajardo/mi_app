import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from "react-router-dom";
import '../styles/styles.css'
import { useCartContext } from "../../context/cartContext";


const NabVar = (props) => {
    const {count} = props
    const {iconCart} = useCartContext()
    return (
        <>
            <Navbar className="menu-fixed">
                <Container>
                    <Link exact to='/'>
                        <Navbar.Brand exact to="/" className="text-uppercase active">
                            <li class="nav-item"><a class="nav-link" href="#home">Tecnology Shark.</a></li>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav text-uppercase ms-auto container">

                            <NavLink exact to='/categoria/mouse' activeClassName="active">
                                <li class="nav-item"><a class="nav-link" href="#services">Mouse</a></li>
                            </NavLink>

                            <NavLink exact to='/categoria/laptop' activeClassName="active">
                                <li class="nav-item"><a class="nav-link" href="#categorias">Laptop</a></li>
                            </NavLink>

                            <NavLink exact to='/categoria/teclado' activeClassName="active">
                                <li class="nav-item"><a class="nav-link" href="#contact">Teclado</a></li>
                            </NavLink>

                            <NavLink exact to='/categoria/monitor' activeClassName="active">
                                <li class="nav-item"><a class="nav-link" href="#contact">Monitor</a></li>
                            </NavLink>

                            <NavLink exact to='/categoria/gabinete' activeClassName="active">
                                <li class="nav-item" id="modal-abrir"><a class="nav-link" href="#modal-abrir">Gabinete</a></li>
                            </NavLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                    <Link exact to='/Cart'>
                        {iconCart()}
                        <CartWidget count={count}/>
                    </Link>
            </Navbar>
            
        </>
    )
}

export default NabVar
