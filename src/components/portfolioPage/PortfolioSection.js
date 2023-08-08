import "./portfolio.css"

import Navbar from "../Navbar/Navbar"

import portfolio1 from "../../assets/images/portfolio1.jpg"
import portfolio2 from "../../assets/images/portfolio2.jpg"
import portfolio3 from "../../assets/images/portfolio3.jpg"
import portfolio4 from "../../assets/images/portfolio4.jpg"
import portfolio5 from "../../assets/images/portfolio5.jpg"
import portfolio6 from "../../assets/images/portfolio6.jpg"
import portfolio7 from "../../assets/images/portfolio7.jpg"
import portfolio8 from "../../assets/images/portfolio8.jpg"
import Footer from "../footerbar/Footer"

function PortfolioSection() {

  function handleClick() {
    alert("Hola!");
  }

  return (
    <>
      <Navbar />
      <div className="wrapper" style={{textAlign: "center"}}>
        {/* <h1>Under construcation GO AWAAAY!!! ヽ༼ ಠ益ಠ ༽ﾉ</h1> */}
        <div className="main-header">
          <h2>PORTFOLIO</h2>
          <p>Setibulum rutrum quam vitae fringilla tincidunt</p>
          <div className="line-border"></div>
        </div>

      </div>
      <div>
        <div className="cards">
          <div className="cardd" onClick={handleClick}>
            <img src={portfolio1}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>

          <div className="cardd" onClick={handleClick}>
            <img src={portfolio2}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>

          <div className="cardd" onClick={handleClick}>
            <img src={portfolio3}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>
          
          <div className="cardd" onClick={handleClick}>
            <img src={portfolio4}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>

          <div className="cardd" onClick={handleClick}>
            <img src={portfolio5}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>

          <div className="cardd" onClick={handleClick}>
            <img src={portfolio6}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>

          <div className="cardd" onClick={handleClick}>
            <img src={portfolio7}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>

          <div className="cardd">
            <img src={portfolio8}></img>
            <div className="overlay">
              <p className="text">Hola!</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default PortfolioSection