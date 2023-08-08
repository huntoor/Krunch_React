import "./home.css";
import Navbar from '../Navbar/Navbar.js';
import Footer from "../footerbar/Footer";

function HomeSection() {

  return (
    <>
      <div id="home" className=''>
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
      </div>
      <Footer />
    </>
  );
}

export default HomeSection;