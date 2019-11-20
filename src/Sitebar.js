import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import Logo from './assets/pawprint.png'
import './App.css';
import {NavLink} from 'react-router-dom';


const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <Navbar color='faded' light expand='md'>            
            <NavbarBrand href='/'>
                <img alt='logo' src={Logo} width='50' height='50' className='d-inline-block align-top' />Paws</NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <ul className='nav-links'>                        
                        <NavLink to='/signin'>
                            <li>Sign In</li>
                        </NavLink>                        
                        <NavLink to='/signup'>
                            <li>Sign Up</li>
                        </NavLink>
                        <NavLink to='/seller'>
                            <li>Sell a service</li>
                        </NavLink>
                        {/* <NavLink to='/serviceindex'>
                            <li>Sell a service</li>
                        </NavLink> */}
                        <NavLink to='/buyer'>
                            <li>Buy a service</li>
                        </NavLink>
                        <NavLink to='/main'>
                            <li>Main Page</li>
                        </NavLink>
                    </ul>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>        
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;