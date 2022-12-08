import React from 'react';
import './Header.css';
import {RxMagnifyingGlass} from 'react-icons/rx';
import phone from '../../images/phone.png';
import parfum from '../../images/parfum.webp';
import {BsFacebook} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';
import {AiFillTwitterCircle} from 'react-icons/ai';


export const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <h1>Get the best product </h1>
            <h1>at your home</h1>
            <button>
                <RxMagnifyingGlass className='icon'/>
                Search your favorite product
            </button>                      
        </div>

        <div className="header-middle">
            <div className="middle">
                <img src={phone} alt="" />
            </div>
        </div>

        <div className="header-right">
            <div className="img">
                 <img src={parfum} alt="" />
            </div>
            </div>

    </div>
  )
}
