import React from 'react';
import  '../Css/Footer.css';

import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>FloodHelpo</Link>
          </div>
          <small className='website-rights'>FloodHelpo © 2020</small>
          <div className='social-icons'>
            <Link className='social-icon-link fb' to='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </Link>
            <Link className='social-icon-link ig' to='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </Link>
            <Link className='social-icon-link yt' to='/' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </Link>
            <Link className='social-icon-link tw' to='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </Link>
            <Link className='social-icon-link ln' to='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      
    </div>
  );
}

export default Footer;
