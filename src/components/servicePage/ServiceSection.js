import "./service.css";

import Navbar from "../Navbar/Navbar";

import {
  FaDesktop,
  FaCode,
  FaAndroid,
  FaCamera,
  FaWandMagicSparkles,
  FaEarthAfrica
}
  from
  "react-icons/fa6";
import Footer from "../footerbar/Footer";

function ServicesSection() {
  return (
    <>
      <Navbar />
      <div className="wrapper" style={{ textAlign: "center" }}>
        {/* <h1>Under construcation GO AWAAAY!!! ヽ༼ ಠ益ಠ ༽ﾉ</h1> */}
        <div className="main-header">
          <h2>Services</h2>
          <p>Scope of our featured premium services</p>
          <div className="line-border"></div>
        </div>

        <div className="grid">
          <div className="block">
            <FaDesktop className="icon" />
            <h5>Web Design</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique.
              Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.</p>
          </div>

          <div className="block">
            <FaCode className="icon" />
            <h5>Web Design</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique.
              Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.</p>
          </div>

          <div className="block">
            <FaAndroid className="icon" />
            <h5>App Design</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique.
              Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.</p>
          </div>

          <div className="block">
            <FaCamera className="icon" />
            <h5>photography</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique.
              Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.</p>
          </div>

          <div className="block">
            <FaWandMagicSparkles className="icon" />
            <h5>Branding</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique.
              Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.</p>
          </div>

          <div className="block">
            <FaEarthAfrica className="icon" />
            <h5>Hosting</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique.
              Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ServicesSection;