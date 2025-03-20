
import {Link} from 'react-router-dom';
import logo from './img/Logo.png';

export default function Nav(){
    return(
        <menu className="navbar-menu">

            <Link to="/">
            <img src={logo} alt="Little Lemon" className="nav-image"/>
            </Link>

            <Link to="/" className="hover-effect">Home</Link>

            <Link to="/about" className="hover-effect">About</Link>

            <Link to="/menu" className="hover-effect">Menu</Link>

            <Link to="/reservations" className="hover-effect">Reservations</Link>

            <Link to="/order" className="hover-effect">Order Online</Link>

            <Link to="/login" className="hover-effect">Login</Link>

      </menu>
    );
}