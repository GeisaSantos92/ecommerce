import React from 'react';
import './Products.css';
import {ProductsData1} from '../../Data/products';
import {ProductsData2} from '../../Data/products';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';

export const Products = () => {
  return (
    <div className="products">
        <div className="products-top">
            <div className="products-list">
                <ul>
                        <li>Electronics</li>
                        <li>Cosmetics</li>
                        <li>Clothes</li>
                        <li>Shoes</li>
                        <li>Furniture</li>
                        <li>See all</li>
                    </ul>
            </div>
         <div className="products-arrows">
            <AiOutlineArrowLeft className='icon'/>
            <AiOutlineArrowRight className='icon'/>
         </div>
        </div>

        <div className="products-botton">
            <div className="products-space">
            <div className="product-sold1">Now</div>
                {
                    ProductsData1.map((product,i)=>(
                       <div className="product" key={i}>
                            <div className='product-img'>
                                 <img src={product.img} alt="" />
                            </div>
                            <div className='product-text'>
                                <span>{product.name}</span>
                                <span>{product.price}$</span>
                            </div>
                       </div>
                      
                       
                    ))}
                    </div>

            <div className="products-space1">
                {
                    ProductsData2.map((product,i)=>(
                       <div className="product" key={i}>
                            <div className='product-img'>
                                 <img src={product.img} alt="" />
                            </div>
                            <div  className='product-text'>
                                <span>{product.name}</span>
                                <span>{product.price}$</span>
                            </div>
                       </div>                                            
                    ))}
                   <div className="product-sold">Sold</div>
                   <AiFillHeart className='product-icon'/>
                 </div>                
            </div>
        </div>
  )
}
