import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../../public/assets/assets';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const CustomNavbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount } = useContext(StoreContext);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Link to='/'><img className='logoname' src={assets.logoname} alt="logo" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-menu">
                        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
                    </Nav>
                    <div className="navbar-right">
                        <img src={assets.search_icon} alt="Search icon" />
                        <div className="navbar-search-icon">
                            <Link to='/cart'><img src={assets.basket_icon} alt="Cart icon" /></Link>
                            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                        </div>
                        <button onClick={() => setShowLogin(true)} className='signin'>Sign in</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;

