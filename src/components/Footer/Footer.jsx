import React from 'react';
import './Footer.css';
import {TiSocialFacebook} from 'react-icons/ti';
import {RiInstagramLine} from 'react-icons/ri';
import {BsTwitter} from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-1">
            <h1><span>E</span>-shop</h1>
            <div className="footer-icons">
                <TiSocialFacebook className='icon'/>
                <BsTwitter className='icon'/>
                <RiInstagramLine className='icon'/>
            </div>
            <span>geisa.santos92@gmail.com</span>
        </div>

        <div className="footer-2">
            <h2>Shop</h2>
            <span>About Us</span>
            <span>Contact</span>
            <span>Location</span>
            <span>FAQ</span>
        </div>

        <div className="footer-3">
            <h2>Links</h2>
            <span>Electronics</span>
            <span>Summer</span>
            <span>Cosmetics</span>
            <span>Clothes</span>
            <span>Furnitures</span>
        </div>
        <div className="footer-4">
            <h2>Contact</h2>
            <span>+2 36 725 453</span>
            <span>e-shop@gmail.com</span>
            <span>123 Lon, London, United Kingdon</span>
        </div>
    </div>
  )
}
