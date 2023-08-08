import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './navbar.css'

function Navbar() {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <nav>
      <div className='container'>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className='nav'>
          <ul className='navList'>
            <li>
              <Link to='/' className={splitLocation[1] === "" ? "nav-item isActive" : "nav-item"}>Home</Link>
            </li>
            <li>
              <Link to='/about' className={splitLocation[1] === "about" ? "nav-item isActive" : "nav-item"}>About</Link>
            </li>
            <li>
              <Link to='/portfolio' className={splitLocation[1] === "portfolio" ? "nav-item isActive" : "nav-item"}>Portfolio</Link>
            </li>
            <li>
              <Link to='/services' className={splitLocation[1] === "services" ? "nav-item isActive" : "nav-item"}>Services</Link>
            </li>
            <li>
              <Link to='/team' className={splitLocation[1] === "team" ? "nav-item isActive" : "nav-item"}>team</Link>
            </li>
            <li>
              <Link to='/blog' className={splitLocation[1] === "blog" ? "nav-item isActive" : "nav-item"}>Blog</Link>
            </li>
            <li>
              <Link to='/signin' className={splitLocation[1] === "signin" ? "nav-item isActive" : "nav-item"}>Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;