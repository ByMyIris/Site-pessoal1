import React from "react";
import { Link } from "react-router-dom";
import  "./navbar.css";


function NavBar() {
    return (
    <nav>
        <ul>
          <li className='button'><Link to="/">Currículo</Link></li>
          <li className='button'><Link to="/Portfolio">Portfólio</Link></li>
          <li className='button'><Link to="/contact">contact</Link></li>
        </ul>
    </nav>
    )
}


export default NavBar;