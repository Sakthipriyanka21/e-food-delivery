// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import {Link} from 'react-router-dom'
// import { StoreContext } from '../../Context/StoreContext'


// const Navbar = ({setShowLogin}) => {

//     const [menu,setMenu] = useState("menu");
//     const {getTotalCartAmount}=useContext(StoreContext);
//   return (
//     <div className='navbar'>
//         <Link to='/'><img className='logoname' src={assets.logoname} alt="logo" /></Link>
//         <ul className='navbar-menu'>
//             <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
//             <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
//             <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
//             <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
//         </ul>
//         <div className="navbar-right">
//             <img src={assets.search_icon} alt="" />
//             <div className="navbar-search-icon">
//                 <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
//                 <div className={getTotalCartAmount()===0?"":"dot"}></div>
//             </div>
//             <button onClick={()=>{setShowLogin(true)}}className='signin'>Sign in</button>
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

const CustomNavbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount } = useContext(StoreContext);

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
                        <img src={assets.search_icon} alt="" />
                        <div className="navbar-search-icon">
                            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                        </div>
                       
                        <button onClick={()=>{setShowLogin(true)}}className='signin'>Sign in</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
