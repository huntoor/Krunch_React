import  'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "../Navbar/Navbar";
import "./singin.css";

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
              <label for="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>

            <div class="col-md-12">
              <label for="textarea" class="form-label">Textarea</label>
              <textarea class="form-control" id="textarea" rows="3"></textarea>
            </div>

            <div className="col-md-6">
              <label for="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-2">
              <label for="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>

            <div className='col-md-6'>
            <fieldset class="row mb-3">
              <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label class="form-check-label" for="gridRadios1">
                    First radio
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label class="form-check-label" for="gridRadios2">
                    Second radio
                  </label>
                </div>
                <div class="form-check disabled">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                  <label class="form-check-label" for="gridRadios3">
                    Third disabled radio
                  </label>
                </div>
              </div>
            </fieldset>
            </div>

            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
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
    </>
  )
}

export default SigninSection;