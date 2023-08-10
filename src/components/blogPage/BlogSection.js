import './blog.css';

import Navbar from "../Navbar/Navbar";
import Footer from "../footerbar/Footer";

import image1 from "../../assets/images/news1.jpg";
import image2 from "../../assets/images/news2.jpg";
import image3 from "../../assets/images/news3.jpg";

import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function BlogSection() {
  return (
    <>
      <Navbar />
      <div className="wrapper" style={{textAlign: "center"}}>
        {/* <h1>Under construcation GO AWAAAY!!! (ノ￣□￣)ノ ~┻━┻</h1> */}
        <div className="main-header">
          <h2>LATEST NEWS</h2>
          <p>Check out our latest news and activities</p>
          <div className="line-border"></div>
        </div>

        <div className="articles">
          <div className="card-group">
            <div className="card">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"><small className="text-body-secondary">August 24, 2016</small></p>
                <p className="card-text myText">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="#" className="card-link">Read more <FaArrowRightLong /></Link>
              </div>
            </div>
            <div className="card">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Eiusmod tempor labore aliqua</h5>
                <p className="card-text"><small className="text-body-secondary">August 20, 2016</small></p>
                <p className="card-text myText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="#" className="card-link">Read more <FaArrowRightLong /></Link>
              </div>
            </div>
            <div className="card">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Conseqntur distinctio ipsum</h5>
                <p className="card-text"><small className="text-body-secondary">August 18, 2016</small></p>
                <p className="card-text myText">Aenean commodo ligula eget dolor sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <Link to="#" className="card-link">Read more <FaArrowRightLong /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className='read'>
          <button className='sec-btn'>Read Our Blog</button>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default BlogSection;