import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='container'>
        <div className="logo">
          <img src={ logo } />
        </div>
        <div className='nav'>
          <ul>
            <li>
              <Link to='/' className="nav-item isActive">Home</Link>
            </li>
            <li>
              <Link to='/about' className="nav-item">About</Link>
            </li>
            <li>
              <Link to='/portfolio' className="nav-item">Portfolio</Link>
            </li>
            <li>
              <Link to='/services' className="nav-item">Services</Link>
            </li>
            <li>
              <Link to='/team' className="nav-item">team</Link>
            </li>
            <li>
              <Link to='/blog' className="nav-item">Blog</Link>
            </li>
            <li>
              <Link to='/signin' className="nav-item">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;