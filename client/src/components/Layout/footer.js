import React from 'react';
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='footerContent'>
          <div className='footerSection'>
            <h3>Contact Us</h3>
            <p>
              Email: clothstore@gmail.com<br />
              Phone: 9786543456<br />
            </p>
          </div>
  
          <div className='footerSection'>
            <h3>Quick Links</h3>
            <ul className='footerList'>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
  
          <div className='footerSection'>
          <h3>Connect With Us</h3>
          <div className='socialIcons'>
            <a href="" target="_blank" rel="noreferrer"><img src={"/images/fb.png"}  alt="fb" width={30} height={30} /></a>
            <a href="" target="_blank" rel="noreferrer"><img src={"/images/instagram.png"}  alt="instagram" width={30} height={30} /></a>
            <a href="" target="_blank" rel="noreferrer"><img src={"/images/twitter.png"}  alt="x" width={30} height={30} /></a>
          </div>
        </div>
      </div>
  
        <div className='footerBottom'>
          <Link to='/policy'>
          <p>&copy; Copyright @ 2024 Cloth Store.</p>
          </Link>
        </div>
      </footer>
    );
  };
  
  export default Footer;