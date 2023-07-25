import { Link } from 'react-router-dom';

import "./home.css";
import logo from '../../assets/images/logo.png';
import Navbar from '../Navbar/Navbar.js';

function HomeSection() {

  return (
    <section id="home" className=''>
      <Navbar />
      <div className="wrapper">
        <div className='landing'>
          <h1>CLEAN AND FLEXIBLE TEMPLATE</h1>
          <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <div className='btns'>
            <button className='main-btn'>Download now</button>
            <button className='sec-btn'>View Features</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;