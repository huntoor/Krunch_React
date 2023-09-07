import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className='social'>
        <ul className='footerList'>
          <li className='footerItem' ><Link to={"https://www.facebook.com/"} target='_blank' className='footerLink'>facebook</Link></li>
          <li className='footerItem' ><Link to={"https://www.instagram.com/"} target='_blank' className='footerLink'>instagram</Link></li>
          <li className='footerItem' ><Link to={"https://www.twitter.com/"} target='_blank' className='footerLink'>Twitter</Link></li>
          <li className='footerItem' ><Link to={"https://www.google.com/"} target='_blank' className='footerLink'>Google</Link></li>
        </ul>
      </div>
      <div className='copywrite'>
        <p>&copy; 2023 KRUNCH LANDING PAGE, Coded by <Link to={"https://github.com/huntoor"} className='myLink'>Hunter</Link></p>
      </div>
    </footer>
  )
}

export default Footer;