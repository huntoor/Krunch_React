import  'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "../Navbar/Navbar";
import "./singin.css";
import Footer from '../footerbar/Footer';

function SigninSection() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main-header">
          <h2>SignIn with us</h2>
          <p>Setibulum rutrum quam vitae fringilla tincidunt</p>
          <div className="line-border"></div>
        </div>

        <div className='form-content'>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>

            <div className="col-md-12">
              <label htmlFor="textarea" className="form-label">Textarea</label>
              <textarea className="form-control" id="textarea" rows="3"></textarea>
            </div>

            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" name="inputState">
                <option value={"choose"}>Choose...</option>
                <option value={"..."}>...</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>

            <div className='col-md-6'>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    First radio
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Second radio
                  </label>
                </div>
                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    Third disabled radio
                  </label>
                </div>
              </div>
            </fieldset>
            </div>

            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="main-btn">Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SigninSection;