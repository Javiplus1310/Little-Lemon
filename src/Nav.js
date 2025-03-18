import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import logo from './img/Logo.png';
import Homepage from './HomePage';

export default function Nav(){
    return(
        <nav className="nav">
        <ul>
          <li>
            <Link to="/">
            <img src={logo} alt="Little Lemon" className="logo-nav"/>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">About</Link>
          </li>
          <li>
            <Link to="/menu" className="nav-item">Menu</Link>
          </li>
          <li>
            <Link to="/reservations" className="nav-item">Reservations</Link>
          </li>
          <li>
            <Link to="/order" className="nav-item">Order Online</Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">Login</Link>
          </li>
        </ul>
        <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      </nav>
    );
}