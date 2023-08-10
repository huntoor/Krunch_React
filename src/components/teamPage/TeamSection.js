import './team.css'
import image1 from '../../assets/images/team1.jpg';
import image2 from '../../assets/images/team2.jpg';
import image3 from '../../assets/images/team3.jpg';
import image4 from '../../assets/images/team4.jpg';

import Navbar from "../Navbar/Navbar"
import Footer from "../footerbar/Footer";

import { FaRegCirclePlay, FaSquareFacebook, FaSquareTwitter, FaLinkedin }
  from
  "react-icons/fa6";
import { Link } from 'react-router-dom';

function TeamSection() {
  return (
    <>
      <Navbar />
      <div className="wrapper" style={{ textAlign: "center" }}>
        {/* <h1>Under construcation GO AWAAAY!!! (ㆆ _ ㆆ)</h1> */}
        <div className="main-header">
          <h2>AWESOME TEAM</h2>
          <p>Setibulum rutrum quam vitae fringilla tincidunt</p>
          <div className="line-border"></div>
        </div>

        <div className="cardWrapper">
          <div className="myCard">
            <div className="cardImage">
              <img src={image1} />
              <div className='imgInfo'>
                <Link to={"https://www.facebook.com/"} className='socialLinks'><FaSquareFacebook /></Link>
                <Link to={"https://www.twitter.com/"} className='socialLinks'><FaSquareTwitter /></Link>
                <Link to={"https://www.linkedin.com/"} className='socialLinks'><FaLinkedin /></Link>
              </div>
            </div>
            <h3>MICHAEL THOMAS</h3>
            <p>Creative Director</p>
          </div>

          <div className="myCard">
            <div className="cardImage">
              <img src={image2} />
              <div className='imgInfo'>
                <Link to={"https://www.facebook.com/"} className='socialLinks'><FaSquareFacebook /></Link>
                <Link to={"https://www.twitter.com/"} className='socialLinks'><FaSquareTwitter /></Link>
                <Link to={"https://www.linkedin.com/"} className='socialLinks'><FaLinkedin /></Link>
              </div>
            </div>
            <h3>ALEXA MEYER</h3>
            <p>Graphic Designer</p>
          </div>

          <div className="myCard">
            <div className="cardImage">
              <img src={image3} />
              <div className='imgInfo'>
                <Link to={"https://www.facebook.com/"} className='socialLinks'><FaSquareFacebook /></Link>
                <Link to={"https://www.twitter.com/"} className='socialLinks'><FaSquareTwitter /></Link>
                <Link to={"https://www.linkedin.com/"} className='socialLinks'><FaLinkedin /></Link>
              </div>
            </div>
            <h3>JEFFREY STEWARD</h3>
            <p>Web Developer</p>
          </div>

          <div className="myCard">
            <div className="cardImage">
              <img src={image4} />
              <div className='imgInfo'>
                <Link to={"https://www.facebook.com/"} className='socialLinks'><FaSquareFacebook /></Link>
                <Link to={"https://www.twitter.com/"} className='socialLinks'><FaSquareTwitter /></Link>
                <Link to={"https://www.linkedin.com/"} className='socialLinks'><FaLinkedin /></Link>
              </div>
            </div>
            <h3>BRUCE MOORE</h3>
            <p>Web Developer</p>
          </div>
        </div>

      </div>

      <div className='download'>
        <div className='icon'><FaRegCirclePlay /></div>
        <div className='paragraph'>
          <p>Aenean commodo ligula eget dolor sociis natoque penatibus et magnis
            <br />
            dis parturient montes, nascetur ridiculus consectetur muse.</p>
        </div>
        <div className='myBtn'>
          <button className='main-btn'>Download now</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TeamSection;