import React from 'react';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';



const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
  <div className= "app__footer section__padding app__bg">
    
    <div className = "app__footer-links">

      <div className = "app__footer-links_contact">
          <h1 className= "app__footer-headtext "  >  Contact Us</h1>
          <img src={images.spoon} style={{marginTop: "10px"}} alt='' />
          <p className= "p__opensans">1235 kotie lane</p>
          <p className= "p__opensans">555-555-5555</p>
          
      </div>


      <div className = "app__footer-links_socials">
          <h1 className= "app__footer-headtext" style={{color: "#f5f5f5"}} >  Socials</h1>
          <img src={images.spoon} style={{ marginTop: "10px" }} alt='' />

          <div className = "app__footer-links_socials-icons">
            <FiFacebook className = "app__footer-links_socials-icons-icon" />
            <FiInstagram className = "app__footer-links_socials-icons-icon" />
            <FiTwitter className = "app__footer-links_socials-icons-icon" />
          </div>
      </div>
    
    </div>

    <div className = 'footer__copyright'>
      <p className= 'p__opensans'>© {year} All rights reserved.</p>
    </div>
  </div>
  )
};

export default Footer;
