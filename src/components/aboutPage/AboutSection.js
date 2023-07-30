import Navbar from "../Navbar/Navbar"

function AboutSection() {
  return (
    <>
      <Navbar />
      <div className="wrapper" style={{ textAlign: "center" }}>
        {/* <h1>Under construcation GO AWAAAY!!! ヽ༼ ಠ益ಠ ༽ﾉ</h1> */}
        <div className="main-header">
          <h2>About us</h2>
          <p>Setibulum rutrum quam vitae fringilla tincidunt</p>
          <div className="line-border"></div>
        </div>

        <div className="the-iframe">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" width="848" height="476" src="https://www.youtube.com/embed/lLWEXRAnQd0" title="Bob Ross - Island in the Wilderness (Season 29 Episode 1)" frameBorder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection