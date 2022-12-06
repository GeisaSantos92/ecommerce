import React, { useState } from 'react';
import './Navbar.css';
import {RxMagnifyingGlass} from 'react-icons/rx';
import {AiFillHeart} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import bar from '../../images/bar.png';


export const Navbar = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="navbar">
            <h1><span>E</span>-shop</h1>
                  
    { menuOpened === false && mobile === true? (
        <div onClick={()=> setMenuOpened(true)}>
            <img src={bar}style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>
    ) : (
    
        <ul>
            <li onClick={()=> setMenuOpened(false)}>Home</li>
            <li onClick={()=> setMenuOpened(false)}>Products</li>
            <li onClick={()=> setMenuOpened(false)}>Service</li>
            <li onClick={()=> setMenuOpened(false)}>Contact</li>
        </ul>
               
    )}   

     <div className="nav-icons">
            <RxMagnifyingGlass className='icons'/>
            <AiFillHeart className='icons'/>
            <FiShoppingCart className='icons'/>
        </div>        

        </div>  
   
  )
}
