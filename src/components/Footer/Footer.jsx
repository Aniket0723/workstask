import './Footer.css'
import Logo from "../../assets/logo.png";
import {BsFillTelephoneFill,BsFacebook,BsTwitter,BsLinkedin,BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
function Footer() {
  return (
    <div className="footer">
    <img src={Logo} alt='Logo' className='logog'/>
      <div className="fLists">
        <ul className="fList">
        <li className="listHeading"><h3>INFORMATION</h3></li>
        <li className="fListItem">About Us</li>
        <li className="fListItem">FAQs</li>
        <li className="fListItem">Return and Exchange</li>
        <li className="fListItem">Terms of Service</li>
        <li className="fListItem">Refund</li>
        </ul>
        <ul className="fList">
        <li className="listHeading"><h3>SHOP NOW</h3></li>
        <li className="fListItem">All Products</li>
        <li className="fListItem">Hemp Nutrition</li>
        <li className="fListItem">CannaBliss</li>
        <li className="fListItem">Skin Health</li>
        </ul>
        <ul className="fList">
        <li className="listHeading"><h3>CONTACT US</h3></li>
        <li className="fListItem"><BsFillTelephoneFill/>  &nbsp; +91 9108154392</li>
        <li className="fListItem"><AiOutlineMail/>  &nbsp; info@indiahemoorganics.com</li>
        <li className="fListItem"><CiLocationOn/> #41/2 Castle Street,
        <br></br>  &nbsp; &nbsp; &nbsp;Ashok Nagar ,Bangalore - 560025</li>
        <div className='icons'> 
        <li><BsFacebook/></li>
        <li><BsInstagram/></li>
        <li><BsTwitter/></li>
        <li><BsLinkedin/></li>
        </div>
        </ul>
      </div>
  
    </div>
  );
}



export default Footer