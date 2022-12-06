import React from 'react';
import './Collection.css';
import nike from '../../images/nike.png';


export const Collection = () => {
  return (
    <div className="collection">
        <div className="col-left">
            <h1>Latest stylish shoe</h1>
            <span>Man 2022 collection shoe</span>
            <button>See all</button>
        </div>

        <div className="col-right">
            <img src={nike} alt="" />
        </div>
    </div>
  )
}
